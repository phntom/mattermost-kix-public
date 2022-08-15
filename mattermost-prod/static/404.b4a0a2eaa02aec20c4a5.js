"use strict";
(self["webpackChunk_mattermost_webapp"] = self["webpackChunk_mattermost_webapp"] || []).push([[404],{

/***/ 29404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "AllListing": () => (/* binding */ AllListing),
  "InstalledListing": () => (/* binding */ InstalledListing),
  "default": () => (/* binding */ MarketplaceModal)
});

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(88674);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var debounce = __webpack_require__(23279);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/es/Tabs.js
var Tabs = __webpack_require__(29278);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/es/Tab.js
var Tab = __webpack_require__(63483);
// EXTERNAL MODULE: ./components/widgets/modals/full_screen_modal.tsx + 1 modules
var full_screen_modal = __webpack_require__(86486);
// EXTERNAL MODULE: ./components/root_portal.jsx
var root_portal = __webpack_require__(75872);
// EXTERNAL MODULE: ./components/quick_input/index.ts + 2 modules
var quick_input = __webpack_require__(13781);
// EXTERNAL MODULE: ./components/localized_input/localized_input.tsx
var localized_input = __webpack_require__(927);
// EXTERNAL MODULE: ./components/widgets/icons/plugin_icon.tsx
var plugin_icon = __webpack_require__(1832);
// EXTERNAL MODULE: ./components/loading_screen.tsx
var loading_screen = __webpack_require__(19476);
// EXTERNAL MODULE: ./components/formatted_markdown_message.jsx
var formatted_markdown_message = __webpack_require__(45288);
// EXTERNAL MODULE: ./actions/telemetry_actions.jsx
var telemetry_actions = __webpack_require__(59925);
// EXTERNAL MODULE: ./utils/i18n.tsx
var i18n = __webpack_require__(87993);
// EXTERNAL MODULE: ./utils/utils.tsx + 25 modules
var utils = __webpack_require__(15883);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.sort.js
var es_array_sort = __webpack_require__(2707);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.symbol.description.js
var es_symbol_description = __webpack_require__(41817);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/utils/marketplace.ts
var marketplace = __webpack_require__(5481);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 19 modules
var es = __webpack_require__(14494);
// EXTERNAL MODULE: ./node_modules/redux/es/redux.js + 1 modules
var redux = __webpack_require__(97779);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/general.ts
var general = __webpack_require__(22742);
// EXTERNAL MODULE: ./actions/marketplace.ts
var actions_marketplace = __webpack_require__(10479);
// EXTERNAL MODULE: ./actions/views/modals.ts
var modals = __webpack_require__(97486);
// EXTERNAL MODULE: ./utils/constants.tsx + 19 modules
var constants = __webpack_require__(66788);
// EXTERNAL MODULE: ./selectors/views/marketplace.ts
var views_marketplace = __webpack_require__(40858);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(19601);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(94184);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/semver/index.js
var semver = __webpack_require__(81249);
var semver_default = /*#__PURE__*/__webpack_require__.n(semver);
// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(73727);
// EXTERNAL MODULE: ./components/overlay_trigger.tsx
var overlay_trigger = __webpack_require__(15558);
// EXTERNAL MODULE: ./components/tooltip.tsx
var tooltip = __webpack_require__(89959);
;// CONCATENATED MODULE: ./components/plugin_marketplace/marketplace_item/marketplace_item.tsx


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





 // Label renders a tag showing a name and a description in a tooltip.
// If a URL is provided, clicking on the tag will open the URL in a new tab.

const Label = _ref => {
  let {
    name,
    description,
    url,
    color
  } = _ref;
  const tag = /*#__PURE__*/react.createElement("span", {
    className: "tag",
    style: {
      backgroundColor: color || ''
    }
  }, name.toUpperCase());
  let label;

  if (description) {
    label = /*#__PURE__*/react.createElement(overlay_trigger/* default */.Z, {
      delayShow: constants/* Constants.OVERLAY_TIME_DELAY */.gT.OVERLAY_TIME_DELAY,
      placement: "top",
      overlay: /*#__PURE__*/react.createElement(tooltip/* default */.Z, {
        id: 'plugin-marketplace_label_' + name.toLowerCase() + '-tooltip'
      }, description)
    }, tag);
  } else {
    label = tag;
  }

  if (url) {
    return /*#__PURE__*/react.createElement("a", {
      "aria-label": name.toLowerCase(),
      className: "style--none more-modal__row--link",
      target: "_blank",
      rel: "noopener noreferrer",
      href: url
    }, label);
  }

  return label;
};
class MarketplaceItem extends react.PureComponent {
  render() {
    let icon;

    if (this.props.iconSource) {
      icon = /*#__PURE__*/react.createElement("div", {
        className: "icon__plugin icon__plugin--background"
      }, /*#__PURE__*/react.createElement("img", {
        src: this.props.iconSource
      }));
    } else {
      icon = /*#__PURE__*/react.createElement(plugin_icon/* default */.Z, {
        className: "icon__plugin icon__plugin--background"
      });
    }

    let labels;

    if (this.props.labels && this.props.labels.length !== 0) {
      labels = this.props.labels.map(label => /*#__PURE__*/react.createElement(Label, {
        key: label.name,
        name: label.name,
        description: label.description,
        url: label.url,
        color: label.color
      }));
    }

    const pluginDetailsInner = /*#__PURE__*/react.createElement(react.Fragment, null, this.props.name, this.props.versionLabel);
    const description = /*#__PURE__*/react.createElement("p", {
      className: classnames_default()('more-modal__description', {
        error_text: this.props.error
      })
    }, this.props.error ? this.props.error : this.props.description);
    let pluginDetails;

    if (this.props.homepageUrl) {
      pluginDetails = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("a", {
        "aria-label": this.props.name.toLowerCase(),
        className: "style--none more-modal__row--link",
        target: "_blank",
        rel: "noopener noreferrer",
        href: this.props.homepageUrl
      }, pluginDetailsInner), labels, /*#__PURE__*/react.createElement("a", {
        "aria-label": "Plugin's website",
        className: "style--none more-modal__row--link",
        target: "_blank",
        rel: "noopener noreferrer",
        href: this.props.homepageUrl
      }, description));
    } else {
      pluginDetails = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("span", {
        "aria-label": this.props.name.toLowerCase(),
        className: "style--none"
      }, pluginDetailsInner), labels, /*#__PURE__*/react.createElement("span", {
        "aria-label": "Plugin\\'s website",
        className: "style--none"
      }, description));
    }

    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("div", {
      className: classnames_default()('more-modal__row', 'more-modal__row--link', {
        item_error: this.props.error
      }),
      key: this.props.id,
      id: 'marketplace-plugin-' + this.props.id
    }, icon, /*#__PURE__*/react.createElement("div", {
      className: "more-modal__details"
    }, pluginDetails, this.props.updateDetails), /*#__PURE__*/react.createElement("div", {
      className: "more-modal__actions"
    }, this.props.button)));
  }

}

_defineProperty(MarketplaceItem, "propTypes", {
  id: (prop_types_default()).string.isRequired,
  name: (prop_types_default()).string.isRequired,
  description: (prop_types_default()).string,
  iconSource: (prop_types_default()).string,
  labels: (prop_types_default()).array,
  homepageUrl: (prop_types_default()).string,
  error: (prop_types_default()).string,
  button: (prop_types_default()).element.isRequired,
  updateDetails: prop_types_default().oneOfType([(prop_types_default()).element, prop_types_default().oneOf([null])]),
  versionLabel: prop_types_default().oneOfType([(prop_types_default()).element, prop_types_default().oneOf([null])])
});
// EXTERNAL MODULE: ./components/confirm_modal.tsx
var confirm_modal = __webpack_require__(32579);
// EXTERNAL MODULE: ./components/widgets/loading/loading_wrapper.tsx
var loading_wrapper = __webpack_require__(21843);
;// CONCATENATED MODULE: ./components/plugin_marketplace/marketplace_item/marketplace_item_plugin/marketplace_item_plugin.tsx



function marketplace_item_plugin_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.










// UpdateVersion renders the version text in the update details, linking out to release notes if available.
const UpdateVersion = _ref => {
  let {
    version,
    releaseNotesUrl
  } = _ref;

  if (!releaseNotesUrl) {
    return /*#__PURE__*/react.createElement("span", null, version);
  }

  return /*#__PURE__*/react.createElement("a", {
    target: "_blank",
    rel: "noopener noreferrer",
    href: releaseNotesUrl
  }, version);
};
UpdateVersion.propTypes = {
  version: (prop_types_default()).string.isRequired,
  releaseNotesUrl: (prop_types_default()).string
};
// UpdateDetails renders an inline update prompt for plugins, when available.
const UpdateDetails = _ref2 => {
  let {
    version,
    releaseNotesUrl,
    installedVersion,
    isInstalling,
    onUpdate
  } = _ref2;

  if (!installedVersion || isInstalling) {
    return null;
  }

  let isUpdate = false;

  try {
    isUpdate = semver_default().gt(version, installedVersion);
  } catch (e) {// If we fail to parse the version, assume not an update;
  }

  if (!isUpdate) {
    return null;
  }

  return /*#__PURE__*/react.createElement("div", {
    className: classnames_default()('update')
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "marketplace_modal.list.update_available",
    defaultMessage: "Update available:"
  }), ' ', /*#__PURE__*/react.createElement(UpdateVersion, {
    version: version,
    releaseNotesUrl: releaseNotesUrl
  }), ' - ', /*#__PURE__*/react.createElement("b", null, /*#__PURE__*/react.createElement("a", {
    onClick: onUpdate
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "marketplace_modal.list.update",
    defaultMessage: "Update"
  }))));
};
UpdateDetails.propTypes = {
  version: (prop_types_default()).string.isRequired,
  releaseNotesUrl: (prop_types_default()).string,
  installedVersion: (prop_types_default()).string,
  isInstalling: (prop_types_default()).bool.isRequired,
  onUpdate: (prop_types_default()).func.isRequired
};
// UpdateConfirmationModal prompts before allowing upgrade, specially handling major version changes.
const UpdateConfirmationModal = _ref3 => {
  let {
    show,
    name,
    version,
    installedVersion,
    releaseNotesUrl,
    onUpdate,
    onCancel
  } = _ref3;

  if (!installedVersion) {
    return null;
  }

  let isUpdate = false;

  try {
    isUpdate = semver_default().gt(version, installedVersion);
  } catch (e) {// If we fail to parse the version, assume not an update;
  }

  if (!isUpdate) {
    return null;
  }

  const messages = [/*#__PURE__*/react.createElement("p", {
    key: "intro"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "marketplace_modal.list.update_confirmation.message.intro",
    defaultMessage: "Are you sure you want to update the ".concat(name, " plugin to ").concat(version, "?"),
    values: {
      name,
      version
    }
  }))];

  if (releaseNotesUrl) {
    messages.push( /*#__PURE__*/react.createElement("p", {
      key: "current"
    }, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
      id: "marketplace_modal.list.update_confirmation.message.current_with_release_notes",
      defaultMessage: "You currently have {installedVersion} installed. View the [release notes](!{releaseNotesUrl}) to learn about the changes included in this update.",
      values: {
        installedVersion,
        releaseNotesUrl
      }
    })));
  } else {
    messages.push( /*#__PURE__*/react.createElement("p", {
      key: "current"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "marketplace_modal.list.update_confirmation.message.current",
      defaultMessage: "You currently have ".concat(installedVersion, " installed."),
      values: {
        installedVersion
      }
    })));
  }

  let sameMajorVersion = false;

  try {
    sameMajorVersion = semver_default().major(version) === semver_default().major(installedVersion);
  } catch (e) {// If we fail to parse the version, assume a potentially breaking change.
    // In practice, this won't happen since we already tried to parse the version above.
  }

  if (!sameMajorVersion) {
    if (releaseNotesUrl) {
      messages.push( /*#__PURE__*/react.createElement("p", {
        className: "alert alert-warning",
        key: "warning"
      }, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
        id: "marketplace_modal.list.update_confirmation.message.warning_major_version_with_release_notes",
        defaultMessage: "This update may contain breaking changes. Consult the [release notes](!{releaseNotesUrl}) before upgrading.",
        values: {
          releaseNotesUrl
        }
      })));
    } else {
      messages.push( /*#__PURE__*/react.createElement("p", {
        className: "alert alert-warning",
        key: "warning"
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "marketplace_modal.list.update_confirmation.message.warning_major_version",
        defaultMessage: 'This update may contain breaking changes.'
      })));
    }
  }

  return /*#__PURE__*/react.createElement(confirm_modal/* default */.Z, {
    show: show,
    title: /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "marketplace_modal.list.update_confirmation.title",
      defaultMessage: 'Confirm Plugin Update'
    }),
    message: messages,
    confirmButtonText: /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "marketplace_modal.list.update_confirmation.confirm_button",
      defaultMessage: "Update"
    }),
    onConfirm: onUpdate,
    onCancel: onCancel
  });
};
UpdateConfirmationModal.propTypes = {
  show: (prop_types_default()).bool.isRequired,
  name: (prop_types_default()).string.isRequired,
  version: (prop_types_default()).string.isRequired,
  releaseNotesUrl: (prop_types_default()).string,
  installedVersion: (prop_types_default()).string,
  onUpdate: (prop_types_default()).func.isRequired,
  onCancel: (prop_types_default()).func.isRequired
};
class MarketplaceItemPlugin extends react.PureComponent {
  constructor(props) {
    var _this;

    super(props);
    _this = this;

    marketplace_item_plugin_defineProperty(this, "trackEvent", function (eventName) {
      let allowDetail = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (_this.props.isDefaultMarketplace && allowDetail) {
        _this.props.trackEvent('plugins', eventName, {
          plugin_id: _this.props.id,
          version: _this.props.version,
          installed_version: _this.props.installedVersion
        });
      } else {
        _this.props.trackEvent('plugins', eventName);
      }
    });

    marketplace_item_plugin_defineProperty(this, "showUpdateConfirmationModal", () => {
      this.setState({
        showUpdateConfirmationModal: true
      });
    });

    marketplace_item_plugin_defineProperty(this, "hideUpdateConfirmationModal", () => {
      this.setState({
        showUpdateConfirmationModal: false
      });
    });

    marketplace_item_plugin_defineProperty(this, "onInstall", () => {
      this.trackEvent('ui_marketplace_download');
      this.props.actions.installPlugin(this.props.id, this.props.version);
    });

    marketplace_item_plugin_defineProperty(this, "onConfigure", () => {
      this.trackEvent('ui_marketplace_configure', false);
      this.props.actions.closeMarketplaceModal();
    });

    marketplace_item_plugin_defineProperty(this, "onUpdate", () => {
      this.trackEvent('ui_marketplace_download_update');
      this.hideUpdateConfirmationModal();
      this.props.actions.installPlugin(this.props.id, this.props.version);
    });

    this.state = {
      showUpdateConfirmationModal: false
    };
  }

  getItemButton() {
    if (this.props.installedVersion !== '' && !this.props.installing && !this.props.error) {
      return /*#__PURE__*/react.createElement(react_router_dom.Link, {
        to: '/admin_console/plugins/plugin_' + this.props.id
      }, /*#__PURE__*/react.createElement("button", {
        onClick: this.onConfigure,
        className: "btn btn-outline"
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "marketplace_modal.list.configure",
        defaultMessage: "Configure"
      })));
    }

    let actionButton;

    if (this.props.error) {
      actionButton = /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "marketplace_modal.list.try_again",
        defaultMessage: "Try Again"
      });
    } else {
      actionButton = /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "marketplace_modal.list.install",
        defaultMessage: "Install"
      });
    }

    return /*#__PURE__*/react.createElement("button", {
      onClick: this.onInstall,
      className: "btn btn-primary",
      disabled: this.props.installing
    }, /*#__PURE__*/react.createElement(loading_wrapper/* default */.Z, {
      loading: this.props.installing,
      text: (0,utils/* localizeMessage */._u)('marketplace_modal.installing', 'Installing...')
    }, actionButton));
  }

  render() {
    let version = "(".concat(this.props.version, ")");

    if (this.props.installedVersion !== '') {
      version = "(".concat(this.props.installedVersion, ")");
    }

    const versionLabel = /*#__PURE__*/react.createElement("span", {
      className: "light subtitle"
    }, version);
    const updateDetails = /*#__PURE__*/react.createElement(UpdateDetails, {
      version: this.props.version,
      installedVersion: this.props.installedVersion,
      releaseNotesUrl: this.props.releaseNotesUrl,
      isInstalling: this.props.installing,
      onUpdate: this.showUpdateConfirmationModal
    });
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(MarketplaceItem, Object.assign({
      button: this.getItemButton(),
      versionLabel: versionLabel,
      updateDetails: updateDetails,
      iconSource: this.props.iconData
    }, this.props)), /*#__PURE__*/react.createElement(UpdateConfirmationModal, {
      show: this.state.showUpdateConfirmationModal,
      name: this.props.name,
      version: this.props.version,
      installedVersion: this.props.installedVersion,
      releaseNotesUrl: this.props.releaseNotesUrl,
      onUpdate: this.onUpdate,
      onCancel: this.hideUpdateConfirmationModal
    }));
  }

}

marketplace_item_plugin_defineProperty(MarketplaceItemPlugin, "propTypes", {
  id: (prop_types_default()).string.isRequired,
  name: (prop_types_default()).string.isRequired,
  description: (prop_types_default()).string,
  version: (prop_types_default()).string.isRequired,
  homepageUrl: (prop_types_default()).string,
  releaseNotesUrl: (prop_types_default()).string,
  labels: (prop_types_default()).array,
  iconData: (prop_types_default()).string,
  installedVersion: (prop_types_default()).string,
  installing: (prop_types_default()).bool.isRequired,
  error: (prop_types_default()).string,
  isDefaultMarketplace: (prop_types_default()).bool.isRequired,
  trackEvent: (prop_types_default()).func.isRequired,
  actions: prop_types_default().shape({
    installPlugin: (prop_types_default()).func.isRequired,
    closeMarketplaceModal: (prop_types_default()).func.isRequired
  }).isRequired
});
;// CONCATENATED MODULE: ./components/plugin_marketplace/marketplace_item/marketplace_item_plugin/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.










function mapStateToProps(state, props) {
  const installing = (0,views_marketplace/* getInstalling */.zN)(state, props.id);
  const error = (0,views_marketplace/* getError */.by)(state, props.id);
  const isDefaultMarketplace = (0,general/* getConfig */.iE)(state).IsDefaultMarketplace === 'true';
  return {
    installing,
    error,
    isDefaultMarketplace,
    trackEvent: telemetry_actions/* trackEvent */.L9
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      installPlugin: actions_marketplace/* installPlugin */.Tk,
      closeMarketplaceModal: () => (0,modals/* closeModal */.M)(constants/* ModalIdentifiers.PLUGIN_MARKETPLACE */.r8.PLUGIN_MARKETPLACE)
    }, dispatch)
  };
}

/* harmony default export */ const marketplace_item_plugin = ((0,es.connect)(mapStateToProps, mapDispatchToProps)(MarketplaceItemPlugin));
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(33948);
;// CONCATENATED MODULE: ./components/plugin_marketplace/marketplace_item/marketplace_item_app/marketplace_item_app.tsx




function marketplace_item_app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





class MarketplaceItemApp extends react.PureComponent {
  constructor() {
    super(...arguments);

    marketplace_item_app_defineProperty(this, "onInstall", () => {
      this.props.trackEvent('plugins', 'ui_marketplace_install_app', {
        app_id: this.props.id
      });
      this.props.actions.installApp(this.props.id).then(res => {
        if (res) {
          this.props.actions.closeMarketplaceModal();
        }
      });
    });
  }

  getItemButton() {
    if (this.props.installed && !this.props.installing && !this.props.error) {
      return /*#__PURE__*/react.createElement("button", {
        className: "btn btn-outline",
        disabled: true
      }, /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "marketplace_modal.list.installed",
        defaultMessage: "Installed"
      }));
    }

    let actionButton;

    if (this.props.error) {
      actionButton = /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "marketplace_modal.list.try_again",
        defaultMessage: "Try Again"
      });
    } else {
      actionButton = /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "marketplace_modal.list.install",
        defaultMessage: "Install"
      });
    }

    return /*#__PURE__*/react.createElement("button", {
      onClick: this.onInstall,
      className: "btn btn-primary",
      disabled: this.props.installing
    }, /*#__PURE__*/react.createElement(loading_wrapper/* default */.Z, {
      loading: this.props.installing,
      text: (0,utils/* localizeMessage */._u)('marketplace_modal.installing', 'Installing...')
    }, actionButton));
  }

  render() {
    return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(MarketplaceItem, Object.assign({
      button: this.getItemButton(),
      updateDetails: null,
      versionLabel: null,
      iconSource: this.props.iconURL
    }, this.props)));
  }

}

marketplace_item_app_defineProperty(MarketplaceItemApp, "propTypes", {
  id: (prop_types_default()).string.isRequired,
  name: (prop_types_default()).string.isRequired,
  description: (prop_types_default()).string,
  homepageUrl: (prop_types_default()).string,
  iconURL: (prop_types_default()).string,
  installed: (prop_types_default()).bool.isRequired,
  labels: (prop_types_default()).array,
  installing: (prop_types_default()).bool.isRequired,
  error: (prop_types_default()).string,
  trackEvent: (prop_types_default()).func.isRequired,
  actions: prop_types_default().shape({
    installApp: (prop_types_default()).func.isRequired,
    closeMarketplaceModal: (prop_types_default()).func.isRequired
  }).isRequired
});
;// CONCATENATED MODULE: ./components/plugin_marketplace/marketplace_item/marketplace_item_app/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.









function marketplace_item_app_mapStateToProps(state, props) {
  const installing = (0,views_marketplace/* getInstalling */.zN)(state, props.id);
  const error = (0,views_marketplace/* getError */.by)(state, props.id);
  return {
    installing,
    error,
    trackEvent: telemetry_actions/* trackEvent */.L9
  };
}

function marketplace_item_app_mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux.bindActionCreators)({
      installApp: actions_marketplace/* installApp */.eI,
      closeMarketplaceModal: () => (0,modals/* closeModal */.M)(constants/* ModalIdentifiers.PLUGIN_MARKETPLACE */.r8.PLUGIN_MARKETPLACE)
    }, dispatch)
  };
}

/* harmony default export */ const marketplace_item_app = ((0,es.connect)(marketplace_item_app_mapStateToProps, marketplace_item_app_mapDispatchToProps)(MarketplaceItemApp));
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/preferences.ts
var preferences = __webpack_require__(89754);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/utils/theme_utils.ts
var theme_utils = __webpack_require__(71170);
;// CONCATENATED MODULE: ./components/plugin_marketplace/marketplace_list/navigation_row/navigation_button.tsx



function navigation_button_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.


class NavigationButton extends react.PureComponent {
  constructor() {
    super(...arguments);

    navigation_button_defineProperty(this, "onClick", event => {
      event.preventDefault();
      this.props.onClick(event);
    });
  }

  render() {
    const {
      onClick,
      messageId,
      defaultMessage
    } = this.props;
    return /*#__PURE__*/react.createElement("button", {
      className: "btn btn-link",
      onClick: onClick
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: messageId,
      defaultMessage: defaultMessage
    }));
  }

}

navigation_button_defineProperty(NavigationButton, "propTypes", {
  onClick: (prop_types_default()).func.isRequired,
  messageId: (prop_types_default()).string.isRequired,
  defaultMessage: (prop_types_default()).string.isRequired
});
;// CONCATENATED MODULE: ./components/plugin_marketplace/marketplace_list/navigation_row/navigation_row.tsx



function navigation_row_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.




class NavigationRow extends react.PureComponent {
  constructor() {
    super(...arguments);

    navigation_row_defineProperty(this, "canShowNextButton", () => {
      const {
        page,
        maximumPerPage,
        total
      } = this.props;
      const totalPages = Math.trunc((total - 1) / maximumPerPage);
      return totalPages > page;
    });

    navigation_row_defineProperty(this, "renderCount", () => {
      const {
        page,
        total,
        maximumPerPage
      } = this.props;
      const startCount = page * maximumPerPage;
      const endCount = Math.min(startCount + maximumPerPage, total);
      return /*#__PURE__*/react.createElement(message/* default */.Z, {
        id: "marketplace_list.count_total_page",
        defaultMessage: "{startCount, number} - {endCount, number} {total, plural, one {plugin} other {plugins}} of {total, number} total",
        values: {
          startCount: startCount + 1,
          endCount,
          total
        }
      });
    });
  }

  render() {
    const style = getStyle(this.props.theme);
    return /*#__PURE__*/react.createElement("div", {
      className: "navigation-row"
    }, /*#__PURE__*/react.createElement("div", {
      className: "col-xs-2"
    }, this.props.page > 0 && /*#__PURE__*/react.createElement(NavigationButton, {
      onClick: this.props.onPreviousPageButtonClick,
      messageId: 'more_channels.prev',
      defaultMessage: 'Previous'
    })), /*#__PURE__*/react.createElement("div", {
      className: "col-xs-8 count",
      style: style.count
    }, this.renderCount()), /*#__PURE__*/react.createElement("div", {
      className: "col-xs-2"
    }, this.canShowNextButton() && /*#__PURE__*/react.createElement(NavigationButton, {
      onClick: this.props.onNextPageButtonClick,
      messageId: 'more_channels.next',
      defaultMessage: 'Next'
    })));
  }

}

navigation_row_defineProperty(NavigationRow, "propTypes", {
  page: (prop_types_default()).number.isRequired,
  total: (prop_types_default()).number.isRequired,
  maximumPerPage: (prop_types_default()).number.isRequired,
  onNextPageButtonClick: (prop_types_default()).func.isRequired,
  onPreviousPageButtonClick: (prop_types_default()).func.isRequired
});

const getStyle = (0,theme_utils/* makeStyleFromTheme */.$Y)(theme => {
  return {
    count: {
      color: (0,theme_utils/* changeOpacity */.v5)(theme.centerChannelColor, 0.6)
    }
  };
});
;// CONCATENATED MODULE: ./components/plugin_marketplace/marketplace_list/navigation_row/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.




function navigation_row_mapStateToProps(state) {
  return {
    theme: (0,preferences/* getTheme */.gh)(state)
  };
}

/* harmony default export */ const navigation_row = ((0,es.connect)(navigation_row_mapStateToProps)(NavigationRow));
;// CONCATENATED MODULE: ./components/plugin_marketplace/marketplace_list/marketplace_list.tsx




function marketplace_list_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





const ITEMS_PER_PAGE = 15;
class MarketplaceList extends react.PureComponent {
  static getDerivedStateFromProps(props, state) {
    if (state.page > 0 && props.listing.length < ITEMS_PER_PAGE) {
      return {
        page: 0
      };
    }

    return null;
  }

  constructor(props) {
    super(props);

    marketplace_list_defineProperty(this, "nextPage", () => {
      this.setState(state => ({
        page: state.page + 1
      }));
    });

    marketplace_list_defineProperty(this, "previousPage", () => {
      this.setState(state => ({
        page: state.page - 1
      }));
    });

    this.state = {
      page: 0
    };
  }

  render() {
    const pageStart = this.state.page * ITEMS_PER_PAGE;
    const pageEnd = pageStart + ITEMS_PER_PAGE;
    this.props.listing.sort((a, b) => {
      return (0,marketplace/* getName */.o)(a).localeCompare((0,marketplace/* getName */.o)(b));
    });
    const itemsToDisplay = this.props.listing.slice(pageStart, pageEnd);
    return /*#__PURE__*/react.createElement("div", {
      className: "more-modal__list"
    }, itemsToDisplay.map(i => {
      if ((0,marketplace/* isPlugin */.v)(i)) {
        return /*#__PURE__*/react.createElement(marketplace_item_plugin, {
          key: i.manifest.id,
          id: i.manifest.id,
          name: i.manifest.name,
          description: i.manifest.description,
          version: i.manifest.version,
          homepageUrl: i.homepage_url,
          releaseNotesUrl: i.release_notes_url,
          labels: i.labels,
          iconData: i.icon_data,
          installedVersion: i.installed_version
        });
      }

      return /*#__PURE__*/react.createElement(marketplace_item_app, {
        key: i.manifest.app_id,
        id: i.manifest.app_id,
        name: i.manifest.display_name,
        description: i.manifest.description,
        homepageUrl: i.manifest.homepage_url,
        iconURL: i.icon_url,
        installed: i.installed,
        labels: i.labels
      });
    }), /*#__PURE__*/react.createElement(navigation_row, {
      page: this.state.page,
      total: this.props.listing.length,
      maximumPerPage: ITEMS_PER_PAGE,
      onNextPageButtonClick: this.nextPage,
      onPreviousPageButtonClick: this.previousPage
    }));
  }

}
;// CONCATENATED MODULE: ./components/plugin_marketplace/marketplace_modal.tsx



function marketplace_modal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
















const MarketplaceTabs = {
  ALL_LISTING: 'allListing',
  INSTALLED_LISTING: 'installed'
};
const SEARCH_TIMEOUT_MILLISECONDS = 200;
// AllListing renders the contents of the all listing tab.
const AllListing = _ref => {
  let {
    listing
  } = _ref;

  if (listing.length === 0) {
    return /*#__PURE__*/react.createElement("div", {
      className: "no_plugins_div"
    }, /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(plugin_icon/* default */.Z, {
      className: "icon__plugin"
    }), /*#__PURE__*/react.createElement("div", {
      className: "mt-3 light"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "marketplace_modal.no_plugins",
      defaultMessage: "There are no plugins available at this time."
    })));
  }

  return /*#__PURE__*/react.createElement(MarketplaceList, {
    listing: listing
  });
};
// InstalledListing renders the contents of the installed listing tab.
const InstalledListing = _ref2 => {
  let {
    installedItems,
    changeTab
  } = _ref2;

  if (installedItems.length === 0) {
    return /*#__PURE__*/react.createElement("div", {
      className: "no_plugins_div"
    }, /*#__PURE__*/react.createElement("br", null), /*#__PURE__*/react.createElement(plugin_icon/* default */.Z, {
      className: "icon__plugin"
    }), /*#__PURE__*/react.createElement("div", {
      className: "mt-3 light"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "marketplace_modal.no_plugins_installed",
      defaultMessage: "You do not have any plugins installed."
    })), /*#__PURE__*/react.createElement("button", {
      className: "mt-5 style--none color--link",
      onClick: () => changeTab(MarketplaceTabs.ALL_LISTING),
      "data-testid": "Install-Plugins-button"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "marketplace_modal.install_plugins",
      defaultMessage: "Install Plugins"
    })));
  }

  return /*#__PURE__*/react.createElement(MarketplaceList, {
    listing: installedItems
  });
};
// MarketplaceModal is the marketplace modal.
class MarketplaceModal extends react.PureComponent {
  constructor(props) {
    super(props);

    marketplace_modal_defineProperty(this, "filterRef", void 0);

    marketplace_modal_defineProperty(this, "fetchListing", async () => {
      const {
        error
      } = await this.props.actions.fetchListing();
      this.setState({
        loading: false,
        serverError: error
      });
    });

    marketplace_modal_defineProperty(this, "close", () => {
      (0,telemetry_actions/* trackEvent */.L9)('plugins', 'ui_marketplace_closed');
      this.props.actions.closeModal();
    });

    marketplace_modal_defineProperty(this, "changeTab", tabKey => {
      this.setState({
        tabKey
      });
    });

    marketplace_modal_defineProperty(this, "onInput", () => {
      if (this.filterRef.current) {
        this.setState({
          filter: this.filterRef.current.value
        });
        this.debouncedSearch();
      }
    });

    marketplace_modal_defineProperty(this, "handleClearSearch", () => {
      if (this.filterRef.current) {
        this.filterRef.current.value = '';
        this.setState({
          filter: this.filterRef.current.value
        }, this.doSearch);
      }
    });

    marketplace_modal_defineProperty(this, "doSearch", async () => {
      (0,telemetry_actions/* trackEvent */.L9)('plugins', 'ui_marketplace_search', {
        filter: this.state.filter
      });
      const {
        error
      } = await this.props.actions.filterListing(this.state.filter);
      this.setState({
        serverError: error
      });
    });

    marketplace_modal_defineProperty(this, "debouncedSearch", debounce_default()(this.doSearch, SEARCH_TIMEOUT_MILLISECONDS));

    this.state = {
      tabKey: MarketplaceTabs.ALL_LISTING,
      loading: true,
      serverError: undefined,
      filter: ''
    };
    this.filterRef = /*#__PURE__*/react.createRef();
  }

  componentDidMount() {
    var _this$filterRef$curre;

    (0,telemetry_actions/* trackEvent */.L9)('plugins', 'ui_marketplace_opened');
    this.fetchListing();

    if (!this.props.firstAdminVisitMarketplaceStatus) {
      (0,telemetry_actions/* trackEvent */.L9)('plugins', 'ui_first_admin_visit_marketplace_status');
      this.props.actions.setFirstAdminVisitMarketplaceStatus();
    }

    (_this$filterRef$curre = this.filterRef.current) === null || _this$filterRef$curre === void 0 ? void 0 : _this$filterRef$curre.focus();
  }

  componentDidUpdate(prevProps) {
    // Automatically refresh the component when a plugin is installed or uninstalled.
    if (this.props.pluginStatuses !== prevProps.pluginStatuses) {
      this.fetchListing();
    }
  }

  render() {
    const input = /*#__PURE__*/react.createElement("div", {
      className: "filter-row filter-row--full"
    }, /*#__PURE__*/react.createElement("div", {
      className: "col-sm-12"
    }, /*#__PURE__*/react.createElement(quick_input/* default */.Z, {
      id: "searchMarketplaceTextbox",
      ref: this.filterRef,
      className: "form-control filter-textbox search_input",
      placeholder: {
        id: (0,i18n.t)('marketplace_modal.search'),
        defaultMessage: 'Search Marketplace'
      },
      inputComponent: localized_input/* default */.Z,
      onInput: this.onInput,
      value: this.state.filter,
      clearable: true,
      onClear: this.handleClearSearch
    })));
    let errorBanner = null;

    if (this.state.serverError) {
      errorBanner = /*#__PURE__*/react.createElement("div", {
        className: "error-bar",
        id: "error_bar"
      }, /*#__PURE__*/react.createElement("div", {
        className: "error-bar__content"
      }, /*#__PURE__*/react.createElement(formatted_markdown_message/* default */.Z, {
        id: "app.plugin.marketplace_plugins.app_error",
        defaultMessage: "Error connecting to the marketplace server. Please check your settings in the [System Console]({siteURL}/admin_console/plugins/plugin_management).",
        values: {
          siteURL: this.props.siteURL
        }
      })));
    }

    return /*#__PURE__*/react.createElement(root_portal/* default */.Z, null, /*#__PURE__*/react.createElement(full_screen_modal/* default */.Z, {
      show: this.props.show,
      onClose: this.close,
      ariaLabel: (0,utils/* localizeMessage */._u)('marketplace_modal.title', 'Marketplace')
    }, errorBanner, /*#__PURE__*/react.createElement("div", {
      className: "modal-marketplace",
      id: "modal_marketplace"
    }, /*#__PURE__*/react.createElement("h1", null, /*#__PURE__*/react.createElement("strong", null, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "marketplace_modal.title",
      defaultMessage: "Marketplace"
    }))), input, /*#__PURE__*/react.createElement(Tabs/* default */.Z, {
      id: "marketplaceTabs",
      className: "tabs",
      defaultActiveKey: MarketplaceTabs.ALL_LISTING,
      activeKey: this.state.tabKey,
      onSelect: this.changeTab,
      unmountOnExit: true
    }, /*#__PURE__*/react.createElement(Tab/* default */.Z, {
      eventKey: MarketplaceTabs.ALL_LISTING,
      title: (0,utils/* localizeMessage */._u)('marketplace_modal.tabs.all_listing', 'All')
    }, this.state.loading ? /*#__PURE__*/react.createElement(loading_screen/* default */.Z, null) : /*#__PURE__*/react.createElement(AllListing, {
      listing: this.props.listing
    })), /*#__PURE__*/react.createElement(Tab/* default */.Z, {
      eventKey: MarketplaceTabs.INSTALLED_LISTING,
      title: (0,utils/* localizeMessage */._u)('marketplace_modal.tabs.installed_listing', 'Installed') + " (".concat(this.props.installedListing.length, ")")
    }, /*#__PURE__*/react.createElement(InstalledListing, {
      installedItems: this.props.installedListing,
      changeTab: this.changeTab
    }))))));
  }

}

marketplace_modal_defineProperty(MarketplaceModal, "propTypes", {
  show: (prop_types_default()).bool.isRequired,
  siteURL: (prop_types_default()).string.isRequired,
  firstAdminVisitMarketplaceStatus: (prop_types_default()).bool.isRequired,
  actions: prop_types_default().shape({
    closeModal: (prop_types_default()).func.isRequired,
    setFirstAdminVisitMarketplaceStatus: (prop_types_default()).func.isRequired
  }).isRequired
});

/***/ })

}]);
//# sourceMappingURL=404.b4a0a2eaa02aec20c4a5.js.map