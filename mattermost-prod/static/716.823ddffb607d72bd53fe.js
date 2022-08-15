"use strict";
(self["webpackChunk_mattermost_webapp"] = self["webpackChunk_mattermost_webapp"] || []).push([[716],{

/***/ 80463:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ file_info_preview)
});

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 19 modules
var es = __webpack_require__(14494);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/general.ts
var general = __webpack_require__(22742);
// EXTERNAL MODULE: ./utils/file_utils.tsx
var file_utils = __webpack_require__(81540);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./utils/utils.tsx + 25 modules
var utils = __webpack_require__(15883);
;// CONCATENATED MODULE: ./components/file_info_preview/file_info_preview.tsx


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.


class FileInfoPreview extends react.PureComponent {
  render() {
    const fileInfo = this.props.fileInfo;
    const fileUrl = this.props.fileUrl; // non-image files include a section providing details about the file

    const infoParts = [];

    if (fileInfo.extension !== '') {
      infoParts.push(utils/* localizeMessage */._u('file_info_preview.type', 'File type ') + fileInfo.extension.toUpperCase());
    }

    if (fileInfo.size) {
      infoParts.push(utils/* localizeMessage */._u('file_info_preview.size', 'Size ') + utils/* fileSizeToString */.eA(fileInfo.size));
    }

    const infoString = infoParts.join(', ');
    let preview = null;

    if (this.props.canDownloadFiles) {
      preview = /*#__PURE__*/react.createElement("a", {
        className: "file-details__preview",
        href: fileUrl,
        target: "_blank",
        rel: "noopener noreferrer"
      }, /*#__PURE__*/react.createElement("span", {
        className: "file-details__preview-helper"
      }), /*#__PURE__*/react.createElement("img", {
        alt: 'file preview',
        src: utils/* getFileIconPath */.c2(fileInfo)
      }));
    } else {
      preview = /*#__PURE__*/react.createElement("span", {
        className: "file-details__preview"
      }, /*#__PURE__*/react.createElement("span", {
        className: "file-details__preview-helper"
      }), /*#__PURE__*/react.createElement("img", {
        alt: 'file preview',
        src: utils/* getFileIconPath */.c2(fileInfo)
      }));
    }

    return /*#__PURE__*/react.createElement("div", {
      className: "file-details__container"
    }, preview, /*#__PURE__*/react.createElement("div", {
      className: "file-details"
    }, /*#__PURE__*/react.createElement("div", {
      className: "file-details__name"
    }, fileInfo.name), /*#__PURE__*/react.createElement("div", {
      className: "file-details__info"
    }, infoString)));
  }

}

_defineProperty(FileInfoPreview, "propTypes", {
  fileUrl: (prop_types_default()).string.isRequired,
  canDownloadFiles: (prop_types_default()).bool.isRequired
});
;// CONCATENATED MODULE: ./components/file_info_preview/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





function mapStateToProps(state) {
  const config = (0,general/* getConfig */.iE)(state);
  return {
    canDownloadFiles: (0,file_utils/* canDownloadFiles */.qL)(config)
  };
}

/* harmony default export */ const file_info_preview = ((0,es.connect)(mapStateToProps)(FileInfoPreview));

/***/ }),

/***/ 3716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ FilePreviewModal)
});

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(88674);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(33948);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/react-bootstrap/es/Modal.js
var Modal = __webpack_require__(43253);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/utils/file_utils.ts
var file_utils = __webpack_require__(76960);
// EXTERNAL MODULE: ./components/loading_image_preview.tsx
var loading_image_preview = __webpack_require__(54920);
// EXTERNAL MODULE: ./utils/constants.tsx + 19 modules
var constants = __webpack_require__(66788);
// EXTERNAL MODULE: ./utils/utils.tsx + 25 modules
var utils = __webpack_require__(15883);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 19 modules
var es = __webpack_require__(14494);
// EXTERNAL MODULE: ./selectors/views/browser.ts
var browser = __webpack_require__(61958);
// EXTERNAL MODULE: ./components/file_info_preview/index.ts + 1 modules
var file_info_preview = __webpack_require__(80463);
;// CONCATENATED MODULE: ./components/audio_video_preview/audio_video_preview.tsx


function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.



class AudioVideoPreview extends react.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "sourceRef", /*#__PURE__*/react.createRef());

    _defineProperty(this, "videoRef", /*#__PURE__*/react.createRef());

    _defineProperty(this, "handleFileInfoChanged", fileInfo => {
      let video = this.videoRef.current;

      if (!video) {
        video = document.createElement('video');
      }

      const canPlayType = video.canPlayType(fileInfo.mime_type);
      this.setState({
        canPlay: canPlayType === 'probably' || canPlayType === 'maybe'
      });
    });

    _defineProperty(this, "handleLoadError", () => {
      this.setState({
        canPlay: false
      });
    });

    _defineProperty(this, "stop", () => {
      if (this.videoRef.current) {
        const video = this.videoRef.current;
        video.pause();
        video.currentTime = 0;
      }
    });

    this.state = {
      canPlay: true
    };
  }

  componentDidMount() {
    this.handleFileInfoChanged(this.props.fileInfo);

    if (this.sourceRef.current) {
      this.sourceRef.current.addEventListener('error', this.handleLoadError, {
        once: true
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.fileUrl !== prevProps.fileUrl) {
      this.handleFileInfoChanged(this.props.fileInfo);
    }

    if (this.sourceRef.current) {
      this.sourceRef.current.addEventListener('error', this.handleLoadError, {
        once: true
      });
    }
  }

  render() {
    if (!this.state.canPlay) {
      return /*#__PURE__*/react.createElement(file_info_preview/* default */.Z, {
        fileInfo: this.props.fileInfo,
        fileUrl: this.props.fileUrl
      });
    }

    let width = constants/* default.WEB_VIDEO_WIDTH */.ZP.WEB_VIDEO_WIDTH;
    let height = constants/* default.WEB_VIDEO_HEIGHT */.ZP.WEB_VIDEO_HEIGHT;

    if (this.props.isMobileView) {
      width = constants/* default.MOBILE_VIDEO_WIDTH */.ZP.MOBILE_VIDEO_WIDTH;
      height = constants/* default.MOBILE_VIDEO_HEIGHT */.ZP.MOBILE_VIDEO_HEIGHT;
    } // add a key to the video to prevent React from using an old video source while a new one is loading


    return /*#__PURE__*/react.createElement("video", {
      key: this.props.fileInfo.id,
      ref: this.videoRef,
      "data-setup": "{}",
      controls: true,
      width: width,
      height: height
    }, /*#__PURE__*/react.createElement("source", {
      ref: this.sourceRef,
      src: this.props.fileUrl
    }));
  }

}

_defineProperty(AudioVideoPreview, "propTypes", {
  fileUrl: (prop_types_default()).string.isRequired,
  isMobileView: (prop_types_default()).bool.isRequired
});
;// CONCATENATED MODULE: ./components/audio_video_preview/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.




function mapStateToProps(state) {
  return {
    isMobileView: (0,browser/* getIsMobileView */.E7)(state)
  };
}

/* harmony default export */ const audio_video_preview = ((0,es.connect)(mapStateToProps)(AudioVideoPreview));
// EXTERNAL MODULE: ./utils/syntax_highlighting.tsx
var syntax_highlighting = __webpack_require__(91986);
// EXTERNAL MODULE: ./components/widgets/loading/loading_spinner.tsx
var loading_spinner = __webpack_require__(56640);
;// CONCATENATED MODULE: ./components/code_preview.jsx


function code_preview_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






class CodePreview extends react.PureComponent {
  constructor(props) {
    super(props);

    code_preview_defineProperty(this, "getCode", async () => {
      if (!this.state.lang || this.props.fileInfo.size > constants/* default.CODE_PREVIEW_MAX_FILE_SIZE */.ZP.CODE_PREVIEW_MAX_FILE_SIZE) {
        return;
      }

      try {
        const data = await fetch(this.props.fileUrl);
        const text = await data.text();
        this.handleReceivedCode(text);
      } catch (e) {
        this.handleReceivedError();
      }
    });

    code_preview_defineProperty(this, "handleReceivedCode", data => {
      let code = data;

      if (data.nodeName === '#document') {
        code = new XMLSerializer().serializeToString(data);
      }

      this.setState({
        code,
        loading: false,
        success: true
      });
    });

    code_preview_defineProperty(this, "handleReceivedError", () => {
      this.setState({
        loading: false,
        success: false
      });
    });

    this.state = {
      code: '',
      lang: '',
      loading: true,
      success: true
    };
  }

  componentDidMount() {
    this.getCode();
  }

  static getDerivedStateFromProps(props, state) {
    if (props.fileUrl !== state.prevFileUrl) {
      const usedLanguage = syntax_highlighting/* getLanguageFromFileExtension */.iP(props.fileInfo.extension);

      if (!usedLanguage || props.fileInfo.size > constants/* default.CODE_PREVIEW_MAX_FILE_SIZE */.ZP.CODE_PREVIEW_MAX_FILE_SIZE) {
        return {
          code: '',
          lang: '',
          loading: false,
          success: false,
          prevFileUrl: props.fileUrl
        };
      }

      return {
        code: '',
        lang: usedLanguage,
        loading: true,
        prevFileUrl: props.fileUrl
      };
    }

    return null;
  }

  componentDidUpdate(prevProps) {
    if (this.props.fileUrl !== prevProps.fileUrl) {
      this.getCode();
    }
  }

  static supports(fileInfo) {
    return Boolean(syntax_highlighting/* getLanguageFromFileExtension */.iP(fileInfo.extension));
  }

  render() {
    if (this.state.loading) {
      return /*#__PURE__*/react.createElement("div", {
        className: "view-image__loading"
      }, /*#__PURE__*/react.createElement(loading_spinner/* default */.Z, null));
    }

    if (!this.state.success) {
      return /*#__PURE__*/react.createElement(file_info_preview/* default */.Z, {
        fileInfo: this.props.fileInfo,
        fileUrl: this.props.fileUrl
      });
    }

    const language = syntax_highlighting/* getLanguageName */.vY(this.state.lang);
    const highlighted = syntax_highlighting/* highlight */.CH(this.state.lang, this.state.code);
    return /*#__PURE__*/react.createElement("div", {
      className: "post-code code-preview"
    }, /*#__PURE__*/react.createElement("span", {
      className: "post-code__language"
    }, "".concat(this.props.fileInfo.name, " - ").concat(language)), /*#__PURE__*/react.createElement("div", {
      className: "hljs"
    }, /*#__PURE__*/react.createElement("div", {
      className: "post-code__line-numbers"
    }, syntax_highlighting/* renderLineNumbers */.wj(this.state.code)), /*#__PURE__*/react.createElement("code", {
      dangerouslySetInnerHTML: {
        __html: highlighted
      }
    })));
  }

}
CodePreview.propTypes = {
  fileInfo: (prop_types_default()).object.isRequired,
  fileUrl: (prop_types_default()).string.isRequired
};
;// CONCATENATED MODULE: ./components/file_preview_modal/image_preview.jsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.




function ImagePreview(_ref) {
  let {
    fileInfo,
    canDownloadFiles
  } = _ref;
  const isExternalFile = !fileInfo.id;
  let fileUrl;
  let previewUrl;

  if (isExternalFile) {
    fileUrl = fileInfo.link;
    previewUrl = fileInfo.link;
  } else {
    fileUrl = (0,file_utils/* getFileDownloadUrl */.gN)(fileInfo.id);
    previewUrl = fileInfo.has_preview_image ? (0,file_utils/* getFilePreviewUrl */.iY)(fileInfo.id) : fileUrl;
  }

  if (!canDownloadFiles) {
    return /*#__PURE__*/react.createElement("img", {
      src: previewUrl
    });
  }

  return /*#__PURE__*/react.createElement("a", {
    className: "image_preview",
    href: "#"
  }, /*#__PURE__*/react.createElement("img", {
    className: "image_preview__image",
    "data-testid": "imagePreview",
    alt: 'preview url image',
    src: previewUrl
  }));
}
ImagePreview.propTypes = {
  fileInfo: (prop_types_default()).object.isRequired,
  canDownloadFiles: (prop_types_default()).bool.isRequired
};
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.object.assign.js
var es_object_assign = __webpack_require__(19601);
// EXTERNAL MODULE: ./node_modules/react-intl/lib/src/components/message.js
var message = __webpack_require__(44012);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/channels.ts
var channels = __webpack_require__(9276);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/users.ts
var users = __webpack_require__(12707);
// EXTERNAL MODULE: ./components/widgets/users/avatar/avatar.tsx
var avatar = __webpack_require__(67515);
;// CONCATENATED MODULE: ./components/file_preview_modal/file_preview_modal_info/file_preview_modal_info.tsx

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.








const displayNameGetter = (0,users/* makeGetDisplayName */.RX)();

const FilePreviewModalInfo = props => {
  const user = (0,es.useSelector)(state => {
    var _props$post$user_id, _props$post;

    return (0,users/* getUser */.PR)(state, (_props$post$user_id = (_props$post = props.post) === null || _props$post === void 0 ? void 0 : _props$post.user_id) !== null && _props$post$user_id !== void 0 ? _props$post$user_id : '');
  });
  const channel = (0,es.useSelector)(state => {
    var _props$post$channel_i, _props$post2;

    const getChannel = (0,channels/* makeGetChannel */.kL)();
    return getChannel(state, {
      id: (_props$post$channel_i = (_props$post2 = props.post) === null || _props$post2 === void 0 ? void 0 : _props$post2.channel_id) !== null && _props$post$channel_i !== void 0 ? _props$post$channel_i : ''
    });
  });
  const name = (0,es.useSelector)(state => {
    var _props$post$user_id2, _props$post3;

    return displayNameGetter(state, (_props$post$user_id2 = (_props$post3 = props.post) === null || _props$post3 === void 0 ? void 0 : _props$post3.user_id) !== null && _props$post$user_id2 !== void 0 ? _props$post$user_id2 : '', true);
  });
  let info;
  const channelName = channel ? /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "file_preview_modal_info.shared_in",
    defaultMessage: "Shared in ~{name}",
    values: {
      name: channel.display_name || channel.name
    }
  }) : null;

  if (props.showFileName) {
    info = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h5", {
      className: "file-preview-modal__file-name"
    }, props.filename), /*#__PURE__*/react.createElement("span", {
      className: "file-preview-modal__file-details"
    }, /*#__PURE__*/react.createElement("span", {
      className: "file-preview-modal__file-details-user-name"
    }, name), /*#__PURE__*/react.createElement("span", {
      className: "file-preview-modal__channel"
    }, channelName)));
  } else {
    info = /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement("h5", {
      className: "file-preview-modal__user-name"
    }, name), /*#__PURE__*/react.createElement("span", {
      className: "file-preview-modal__channel"
    }, channelName));
  }

  return /*#__PURE__*/react.createElement("div", {
    className: "file-preview-modal__info"
  }, props.post && Object.keys(props.post).length > 0 && /*#__PURE__*/react.createElement(avatar/* default */.Z, {
    size: "lg",
    url: (0,utils/* imageURLForUser */.bb)(props.post.user_id, user === null || user === void 0 ? void 0 : user.last_picture_update),
    className: "file-preview-modal__avatar"
  }), /*#__PURE__*/react.createElement("div", {
    className: "file-preview-modal__info-details"
  }, info));
};

FilePreviewModalInfo.propTypes = {
  showFileName: (prop_types_default()).bool.isRequired,
  filename: (prop_types_default()).string.isRequired
};
/* harmony default export */ const file_preview_modal_info = (/*#__PURE__*/(0,react.memo)(FilePreviewModalInfo));
// EXTERNAL MODULE: ./packages/mattermost-redux/src/actions/files.ts
var files = __webpack_require__(3930);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/files.ts
var entities_files = __webpack_require__(51502);
// EXTERNAL MODULE: ./components/overlay_trigger.tsx
var overlay_trigger = __webpack_require__(15558);
// EXTERNAL MODULE: ./components/tooltip.tsx
var tooltip = __webpack_require__(89959);
;// CONCATENATED MODULE: ./components/file_preview_modal/types.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
function isFileInfo(info) {
  return Boolean(info.id);
}
;// CONCATENATED MODULE: ./components/file_preview_modal/file_preview_modal_main_actions/file_preview_modal_main_actions.tsx


// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.












const FilePreviewModalMainActions = props => {
  const tooltipPlacement = props.usedInside === 'Header' ? 'bottom' : 'top';
  const selectedFilePublicLink = (0,es.useSelector)(state => {
    var _selectFilePublicLink;

    return (_selectFilePublicLink = (0,entities_files/* getFilePublicLink */.c9)(state)) === null || _selectFilePublicLink === void 0 ? void 0 : _selectFilePublicLink.link;
  });
  const dispatch = (0,es.useDispatch)();
  const [publicLinkCopied, setPublicLinkCopied] = (0,react.useState)(false);
  (0,react.useEffect)(() => {
    if (isFileInfo(props.fileInfo) && props.enablePublicLink) {
      dispatch((0,files/* getFilePublicLink */.c9)(props.fileInfo.id));
    }
  }, [props.fileInfo, props.enablePublicLink]);

  const copyPublicLink = () => {
    (0,utils/* copyToClipboard */.vQ)(selectedFilePublicLink !== null && selectedFilePublicLink !== void 0 ? selectedFilePublicLink : '');
    setPublicLinkCopied(true);
  };

  const closeButton = /*#__PURE__*/react.createElement(overlay_trigger/* default */.Z, {
    delayShow: constants/* default.OVERLAY_TIME_DELAY */.ZP.OVERLAY_TIME_DELAY,
    key: "publicLink",
    placement: tooltipPlacement,
    overlay: /*#__PURE__*/react.createElement(tooltip/* default */.Z, {
      id: "close-icon-tooltip"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "full_screen_modal.close",
      defaultMessage: "Close"
    }))
  }, /*#__PURE__*/react.createElement("button", {
    className: "file-preview-modal-main-actions__action-item",
    onClick: props.handleModalClose
  }, /*#__PURE__*/react.createElement("i", {
    className: "icon icon-close"
  })));
  let publicTooltipMessage = /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "view_image_popover.publicLink",
    defaultMessage: "Get a public link"
  });

  if (publicLinkCopied) {
    publicTooltipMessage = /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "file_preview_modal_main_actions.public_link-copied",
      defaultMessage: "Public link copied"
    });
  }

  const publicLink = /*#__PURE__*/react.createElement(overlay_trigger/* default */.Z, {
    delayShow: constants/* default.OVERLAY_TIME_DELAY */.ZP.OVERLAY_TIME_DELAY,
    key: "filePreviewPublicLink",
    placement: tooltipPlacement,
    shouldUpdatePosition: true,
    onExit: () => setPublicLinkCopied(false),
    overlay: /*#__PURE__*/react.createElement(tooltip/* default */.Z, {
      id: "link-variant-icon-tooltip"
    }, publicTooltipMessage)
  }, /*#__PURE__*/react.createElement("a", {
    href: "#",
    className: "file-preview-modal-main-actions__action-item",
    onClick: copyPublicLink
  }, /*#__PURE__*/react.createElement("i", {
    className: "icon icon-link-variant"
  })));
  const downloadLinkProps = {};
  downloadLinkProps.download = props.filename;
  const download = /*#__PURE__*/react.createElement(overlay_trigger/* default */.Z, {
    delayShow: constants/* default.OVERLAY_TIME_DELAY */.ZP.OVERLAY_TIME_DELAY,
    key: "download",
    placement: tooltipPlacement,
    overlay: /*#__PURE__*/react.createElement(tooltip/* default */.Z, {
      id: "download-icon-tooltip"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "view_image_popover.download",
      defaultMessage: "Download"
    }))
  }, /*#__PURE__*/react.createElement("a", {
    href: props.fileURL,
    className: "file-preview-modal-main-actions__action-item",
    target: "_blank",
    rel: "noopener noreferrer",
    download: props.filename
  }, /*#__PURE__*/react.createElement("i", {
    className: "icon icon-download-outline"
  })));
  return /*#__PURE__*/react.createElement("div", {
    className: "file-preview-modal-main-actions__actions"
  }, !props.showOnlyClose && props.enablePublicLink && props.showPublicLink && publicLink, !props.showOnlyClose && props.canDownloadFiles && download, props.showClose && closeButton);
};

FilePreviewModalMainActions.propTypes = {
  usedInside: prop_types_default().oneOf(['Header', 'Footer']),
  showOnlyClose: (prop_types_default()).bool,
  showClose: (prop_types_default()).bool,
  showPublicLink: (prop_types_default()).bool,
  filename: (prop_types_default()).string.isRequired,
  fileURL: (prop_types_default()).string.isRequired,
  enablePublicLink: (prop_types_default()).bool.isRequired,
  canDownloadFiles: (prop_types_default()).bool.isRequired,
  handleModalClose: (prop_types_default()).func.isRequired
};
FilePreviewModalMainActions.defaultProps = {
  showOnlyClose: false,
  usedInside: 'Header',
  showClose: true,
  showPublicLink: true
};
/* harmony default export */ const file_preview_modal_main_actions = (/*#__PURE__*/(0,react.memo)(FilePreviewModalMainActions));
;// CONCATENATED MODULE: ./components/file_preview_modal/file_preview_modal_footer/file_preview_modal_footer.tsx

const _excluded = ["post"];


function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





const FilePreviewModalFooter = _ref => {
  let {
    post
  } = _ref,
      actionProps = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react.createElement("div", {
    className: "file-preview-modal-footer"
  }, /*#__PURE__*/react.createElement(file_preview_modal_info, {
    showFileName: false,
    post: post,
    filename: actionProps.filename
  }), /*#__PURE__*/react.createElement(file_preview_modal_main_actions, Object.assign({}, actionProps, {
    showClose: false,
    usedInside: "Footer",
    showOnlyClose: false
  })));
};

FilePreviewModalFooter.propTypes = {
  filename: (prop_types_default()).string.isRequired,
  fileURL: (prop_types_default()).string.isRequired,
  showPublicLink: (prop_types_default()).bool,
  enablePublicLink: (prop_types_default()).bool.isRequired,
  canDownloadFiles: (prop_types_default()).bool.isRequired,
  isExternalFile: (prop_types_default()).bool.isRequired,
  handleModalClose: (prop_types_default()).func.isRequired
};
/* harmony default export */ const file_preview_modal_footer = (/*#__PURE__*/(0,react.memo)(FilePreviewModalFooter));
;// CONCATENATED MODULE: ./components/file_preview_modal/file_preview_modal_main_nav/file_preview_modal_main_nav.tsx

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







const FilePreviewModalMainNav = props => {
  const leftArrow = /*#__PURE__*/react.createElement(overlay_trigger/* default */.Z, {
    delayShow: constants/* default.OVERLAY_TIME_DELAY */.ZP.OVERLAY_TIME_DELAY,
    key: "previewArrowLeft",
    placement: "bottom",
    overlay: /*#__PURE__*/react.createElement(tooltip/* default */.Z, {
      id: "close-icon-tooltip"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "generic.previous",
      defaultMessage: "Close"
    }))
  }, /*#__PURE__*/react.createElement("button", {
    id: "previewArrowLeft",
    className: "file_preview_modal_main_nav__prev",
    onClick: props.handlePrev
  }, /*#__PURE__*/react.createElement("i", {
    className: "icon icon-chevron-left"
  })));
  const rightArrow = /*#__PURE__*/react.createElement(overlay_trigger/* default */.Z, {
    delayShow: constants/* default.OVERLAY_TIME_DELAY */.ZP.OVERLAY_TIME_DELAY,
    key: "publicLink",
    placement: "bottom",
    overlay: /*#__PURE__*/react.createElement(tooltip/* default */.Z, {
      id: "close-icon-tooltip"
    }, /*#__PURE__*/react.createElement(message/* default */.Z, {
      id: "generic.next",
      defaultMessage: "Next"
    }))
  }, /*#__PURE__*/react.createElement("button", {
    id: "previewArrowRight",
    className: "file_preview_modal_main_nav__next",
    onClick: props.handleNext
  }, /*#__PURE__*/react.createElement("i", {
    className: "icon icon-chevron-right"
  })));
  return /*#__PURE__*/react.createElement("div", {
    className: "file_preview_modal_main_nav"
  }, leftArrow, /*#__PURE__*/react.createElement("span", {
    className: "modal-bar-file-count"
  }, /*#__PURE__*/react.createElement(message/* default */.Z, {
    id: "file_preview_modal_main_nav.file",
    defaultMessage: "{count, number} of {total, number}",
    values: {
      count: props.fileIndex + 1,
      total: props.totalFiles
    }
  })), rightArrow);
};

FilePreviewModalMainNav.propTypes = {
  fileIndex: (prop_types_default()).number.isRequired,
  totalFiles: (prop_types_default()).number.isRequired,
  handlePrev: (prop_types_default()).func.isRequired,
  handleNext: (prop_types_default()).func.isRequired
};
/* harmony default export */ const file_preview_modal_main_nav = (/*#__PURE__*/(0,react.memo)(FilePreviewModalMainNav));
;// CONCATENATED MODULE: ./components/file_preview_modal/file_preview_modal_header/file_preview_modal_header.tsx

const file_preview_modal_header_excluded = ["post", "totalFiles", "fileIndex"];


function file_preview_modal_header_objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = file_preview_modal_header_objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function file_preview_modal_header_objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






const FilePreviewModalHeader = _ref => {
  let {
    post,
    totalFiles,
    fileIndex
  } = _ref,
      actionProps = file_preview_modal_header_objectWithoutProperties(_ref, file_preview_modal_header_excluded);

  let mainActions = /*#__PURE__*/react.createElement("div", null);

  if (totalFiles > 1) {
    mainActions = /*#__PURE__*/react.createElement(file_preview_modal_main_nav, {
      totalFiles: totalFiles,
      fileIndex: fileIndex,
      handlePrev: actionProps.handlePrev,
      handleNext: actionProps.handleNext
    });
  }

  const actions = /*#__PURE__*/react.createElement(file_preview_modal_main_actions, Object.assign({}, actionProps, {
    showOnlyClose: actionProps.isMobileView,
    usedInside: "Header"
  }));
  return /*#__PURE__*/react.createElement("div", {
    className: "file-preview-modal-header"
  }, actionProps.isMobileView && actions, !actionProps.isMobileView && /*#__PURE__*/react.createElement(file_preview_modal_info, {
    showFileName: true,
    post: post,
    filename: actionProps.filename
  }), mainActions, !actionProps.isMobileView && actions);
};

FilePreviewModalHeader.propTypes = {
  isMobileView: (prop_types_default()).bool.isRequired,
  fileIndex: (prop_types_default()).number.isRequired,
  totalFiles: (prop_types_default()).number.isRequired,
  filename: (prop_types_default()).string.isRequired,
  fileURL: (prop_types_default()).string.isRequired,
  showPublicLink: (prop_types_default()).bool,
  enablePublicLink: (prop_types_default()).bool.isRequired,
  canDownloadFiles: (prop_types_default()).bool.isRequired,
  isExternalFile: (prop_types_default()).bool.isRequired,
  handlePrev: (prop_types_default()).func.isRequired,
  handleNext: (prop_types_default()).func.isRequired,
  handleModalClose: (prop_types_default()).func.isRequired
};
/* harmony default export */ const file_preview_modal_header = (/*#__PURE__*/(0,react.memo)(FilePreviewModalHeader));
// EXTERNAL MODULE: ./node_modules/lodash/debounce.js
var debounce = __webpack_require__(23279);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce);
;// CONCATENATED MODULE: ./components/file_preview_modal/popover_bar/popover_bar.tsx


function popover_bar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

/* eslint-disable react/no-string-refs */






class PopoverBar extends react.PureComponent {
  render() {
    const zoomControls = [];
    let wrappedZoomControls = null;

    if (this.props.showZoomControls) {
      let zoomResetButton;
      let zoomOutButton;
      let zoomInButton;

      if (this.props.scale && this.props.scale > constants/* ZoomSettings.MIN_SCALE */.v0.MIN_SCALE) {
        zoomOutButton = /*#__PURE__*/react.createElement("span", {
          className: "modal-zoom-btn"
        }, /*#__PURE__*/react.createElement("a", {
          onClick: this.props.handleZoomOut && debounce_default()(this.props.handleZoomOut, 300, {
            maxWait: 300
          })
        }, /*#__PURE__*/react.createElement("i", {
          className: "icon icon-minus"
        })));
      } else {
        zoomOutButton = /*#__PURE__*/react.createElement("span", {
          className: "btn-inactive"
        }, /*#__PURE__*/react.createElement("i", {
          className: "icon icon-minus"
        }));
      }

      zoomControls.push( /*#__PURE__*/react.createElement(overlay_trigger/* default */.Z, {
        delayShow: constants/* Constants.OVERLAY_TIME_DELAY */.gT.OVERLAY_TIME_DELAY,
        key: "zoomOut",
        placement: "top",
        overlay: /*#__PURE__*/react.createElement(tooltip/* default */.Z, {
          id: "zoom-out-icon-tooltip"
        }, /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: "view_image.zoom_out",
          defaultMessage: "Zoom Out"
        }))
      }, zoomOutButton));

      if (this.props.scale && this.props.scale > constants/* ZoomSettings.DEFAULT_SCALE */.v0.DEFAULT_SCALE) {
        zoomResetButton = /*#__PURE__*/react.createElement("span", {
          className: "modal-zoom-btn"
        }, /*#__PURE__*/react.createElement("a", {
          onClick: this.props.handleZoomReset
        }, /*#__PURE__*/react.createElement("i", {
          className: "icon icon-magnify-minus"
        })));
      } else if (this.props.scale && this.props.scale < constants/* ZoomSettings.DEFAULT_SCALE */.v0.DEFAULT_SCALE) {
        zoomResetButton = /*#__PURE__*/react.createElement("span", {
          className: "modal-zoom-btn"
        }, /*#__PURE__*/react.createElement("a", {
          onClick: this.props.handleZoomReset
        }, /*#__PURE__*/react.createElement("i", {
          className: "icon icon-magnify-plus"
        })));
      } else {
        zoomResetButton = /*#__PURE__*/react.createElement("span", {
          className: "btn-inactive"
        }, /*#__PURE__*/react.createElement("i", {
          className: "icon icon-magnify-minus"
        }));
      }

      zoomControls.push( /*#__PURE__*/react.createElement(overlay_trigger/* default */.Z, {
        delayShow: constants/* Constants.OVERLAY_TIME_DELAY */.gT.OVERLAY_TIME_DELAY,
        key: "zoomReset",
        placement: "top",
        overlay: /*#__PURE__*/react.createElement(tooltip/* default */.Z, {
          id: "zoom-reset-icon-tooltip"
        }, /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: "view_image.zoom_reset",
          defaultMessage: "Reset Zoom"
        }))
      }, zoomResetButton));

      if (this.props.scale && this.props.scale < constants/* ZoomSettings.MAX_SCALE */.v0.MAX_SCALE) {
        zoomInButton = /*#__PURE__*/react.createElement("span", {
          className: "modal-zoom-btn"
        }, /*#__PURE__*/react.createElement("a", {
          onClick: this.props.handleZoomIn && debounce_default()(this.props.handleZoomIn, 300, {
            maxWait: 300
          })
        }, /*#__PURE__*/react.createElement("i", {
          className: "icon icon-plus"
        })));
      } else {
        zoomInButton = /*#__PURE__*/react.createElement("span", {
          className: "btn-inactive"
        }, /*#__PURE__*/react.createElement("i", {
          className: "icon icon-plus"
        }));
      }

      zoomControls.push( /*#__PURE__*/react.createElement(overlay_trigger/* default */.Z, {
        delayShow: constants/* Constants.OVERLAY_TIME_DELAY */.gT.OVERLAY_TIME_DELAY,
        key: "zoomIn",
        placement: "top",
        overlay: /*#__PURE__*/react.createElement(tooltip/* default */.Z, {
          id: "zoom-in-icon-tooltip"
        }, /*#__PURE__*/react.createElement(message/* default */.Z, {
          id: "view_image.zoom_in",
          defaultMessage: "Zoom In"
        }))
      }, zoomInButton));
      wrappedZoomControls = /*#__PURE__*/react.createElement("div", {
        className: "modal-column"
      }, zoomControls);
    }

    return /*#__PURE__*/react.createElement("div", {
      "data-testid": "fileCountFooter",
      ref: "imageFooter",
      className: "modal-button-bar file-preview-modal__zoom-bar"
    }, wrappedZoomControls);
  }

}
/* eslint-enable react/no-string-refs */

popover_bar_defineProperty(PopoverBar, "propTypes", {
  scale: (prop_types_default()).number,
  showZoomControls: (prop_types_default()).bool,
  handleZoomIn: (prop_types_default()).func,
  handleZoomOut: (prop_types_default()).func,
  handleZoomReset: (prop_types_default()).func
});
;// CONCATENATED MODULE: ./components/file_preview_modal/popover_bar/index.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

/* harmony default export */ const popover_bar = (PopoverBar);
;// CONCATENATED MODULE: ./components/file_preview_modal/file_preview_modal.tsx


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { file_preview_modal_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function file_preview_modal_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.















const PDFPreview = /*#__PURE__*/react.lazy(() => __webpack_require__.e(/* import() */ 271).then(__webpack_require__.bind(__webpack_require__, 78271)));
const KeyCodes = constants/* default.KeyCodes */.ZP.KeyCodes;
class FilePreviewModal extends react.PureComponent {
  constructor(props) {
    super(props);

    file_preview_modal_defineProperty(this, "handleNext", () => {
      let id = this.state.imageIndex + 1;

      if (id > this.props.fileInfos.length - 1) {
        id = 0;
      }

      this.showImage(id);
    });

    file_preview_modal_defineProperty(this, "handlePrev", () => {
      let id = this.state.imageIndex - 1;

      if (id < 0) {
        id = this.props.fileInfos.length - 1;
      }

      this.showImage(id);
    });

    file_preview_modal_defineProperty(this, "handleKeyPress", e => {
      if (utils/* isKeyPressed */.pD(e, KeyCodes.RIGHT)) {
        this.handleNext();
      } else if (utils/* isKeyPressed */.pD(e, KeyCodes.LEFT)) {
        this.handlePrev();
      }
    });

    file_preview_modal_defineProperty(this, "showImage", id => {
      this.setState({
        imageIndex: id
      });
      const imageHeight = window.innerHeight - 100;
      this.setState({
        imageHeight
      });

      if (!this.state.loaded[id]) {
        this.loadImage(id);
      }
    });

    file_preview_modal_defineProperty(this, "loadImage", index => {
      const fileInfo = this.props.fileInfos[index];
      const fileType = utils/* getFileType */.JB(fileInfo.extension);

      if (fileType === constants/* FileTypes.IMAGE */.ml.IMAGE && isFileInfo(fileInfo)) {
        let previewUrl;

        if (fileInfo.has_preview_image) {
          previewUrl = (0,file_utils/* getFilePreviewUrl */.iY)(fileInfo.id);
        } else {
          // some images (eg animated gifs) just show the file itself and not a preview
          previewUrl = (0,file_utils/* getFileUrl */.qm)(fileInfo.id);
        }

        utils/* loadImage */.po(previewUrl, () => this.handleImageLoaded(index), completedPercentage => this.handleImageProgress(index, completedPercentage));
      } else {
        // there's nothing to load for non-image files
        this.handleImageLoaded(index);
      }
    });

    file_preview_modal_defineProperty(this, "handleImageLoaded", index => {
      this.setState(prevState => {
        return {
          loaded: _objectSpread(_objectSpread({}, prevState.loaded), {}, {
            [index]: true
          })
        };
      });
    });

    file_preview_modal_defineProperty(this, "handleImageProgress", (index, completedPercentage) => {
      this.setState(prevState => {
        return {
          progress: _objectSpread(_objectSpread({}, prevState.progress), {}, {
            [index]: completedPercentage
          })
        };
      });
    });

    file_preview_modal_defineProperty(this, "onMouseEnterImage", () => {
      this.setState({
        showCloseBtn: true
      });
    });

    file_preview_modal_defineProperty(this, "onMouseLeaveImage", () => {
      this.setState({
        showCloseBtn: false
      });
    });

    file_preview_modal_defineProperty(this, "setScale", (index, scale) => {
      this.setState(prevState => {
        return {
          scale: _objectSpread(_objectSpread({}, prevState.scale), {}, {
            [index]: scale
          })
        };
      });
    });

    file_preview_modal_defineProperty(this, "handleZoomIn", () => {
      let newScale = this.state.scale[this.state.imageIndex];
      newScale = Math.min(newScale + constants/* ZoomSettings.SCALE_DELTA */.v0.SCALE_DELTA, constants/* ZoomSettings.MAX_SCALE */.v0.MAX_SCALE);
      this.setScale(this.state.imageIndex, newScale);
    });

    file_preview_modal_defineProperty(this, "handleZoomOut", () => {
      let newScale = this.state.scale[this.state.imageIndex];
      newScale = Math.max(newScale - constants/* ZoomSettings.SCALE_DELTA */.v0.SCALE_DELTA, constants/* ZoomSettings.MIN_SCALE */.v0.MIN_SCALE);
      this.setScale(this.state.imageIndex, newScale);
    });

    file_preview_modal_defineProperty(this, "handleZoomReset", () => {
      this.setScale(this.state.imageIndex, constants/* ZoomSettings.DEFAULT_SCALE */.v0.DEFAULT_SCALE);
    });

    file_preview_modal_defineProperty(this, "handleModalClose", () => {
      this.setState({
        show: false
      });
    });

    file_preview_modal_defineProperty(this, "handleBgClose", e => {
      if (e.currentTarget === e.target) {
        this.handleModalClose();
      }
    });

    this.state = {
      show: true,
      imageIndex: this.props.startIndex,
      imageHeight: '100%',
      loaded: utils/* fillArray */.kg(false, this.props.fileInfos.length),
      prevFileInfosCount: 0,
      progress: utils/* fillArray */.kg(0, this.props.fileInfos.length),
      showCloseBtn: false,
      showZoomControls: false,
      scale: utils/* fillArray */.kg(constants/* ZoomSettings.DEFAULT_SCALE */.v0.DEFAULT_SCALE, this.props.fileInfos.length)
    };
  }

  componentDidMount() {
    document.addEventListener('keyup', this.handleKeyPress);
    this.showImage(this.props.startIndex);
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.handleKeyPress);
  }

  static getDerivedStateFromProps(props, state) {
    const updatedState = {};

    if (props.fileInfos[state.imageIndex] && props.fileInfos[state.imageIndex].extension === constants/* FileTypes.PDF */.ml.PDF) {
      updatedState.showZoomControls = true;
    } else {
      updatedState.showZoomControls = false;
    }

    if (props.fileInfos.length !== state.prevFileInfosCount) {
      updatedState.loaded = utils/* fillArray */.kg(false, props.fileInfos.length);
      updatedState.progress = utils/* fillArray */.kg(0, props.fileInfos.length);
      updatedState.prevFileInfosCount = props.fileInfos.length;
    }

    return Object.keys(updatedState).length ? updatedState : null;
  }

  render() {
    var _this$props$fileInfos;

    if (this.props.fileInfos.length < 1 || this.props.fileInfos.length - 1 < this.state.imageIndex) {
      return null;
    }

    const fileInfo = this.props.fileInfos[this.state.imageIndex];
    const fileType = utils/* getFileType */.JB(fileInfo.extension);
    let showPublicLink;
    let fileName;
    let fileUrl;
    let fileDownloadUrl;
    let isExternalFile;

    if (isFileInfo(fileInfo)) {
      showPublicLink = true;
      fileName = fileInfo.name;
      fileUrl = (0,file_utils/* getFileUrl */.qm)(fileInfo.id);
      fileDownloadUrl = (0,file_utils/* getFileDownloadUrl */.gN)(fileInfo.id);
      isExternalFile = false;
    } else {
      showPublicLink = false;
      fileName = fileInfo.name || fileInfo.link;
      fileUrl = fileInfo.link;
      fileDownloadUrl = fileInfo.link;
      isExternalFile = true;
    }

    let dialogClassName = 'a11y__modal modal-image file-preview-modal';
    let content;
    let modalImageClass = '';
    let zoomBar;

    if (this.state.loaded[this.state.imageIndex]) {
      if (fileType === constants/* FileTypes.IMAGE */.ml.IMAGE || fileType === constants/* FileTypes.SVG */.ml.SVG) {
        content = /*#__PURE__*/react.createElement(ImagePreview, {
          fileInfo: fileInfo,
          canDownloadFiles: this.props.canDownloadFiles
        });
      } else if (fileType === constants/* FileTypes.VIDEO */.ml.VIDEO || fileType === constants/* FileTypes.AUDIO */.ml.AUDIO) {
        content = /*#__PURE__*/react.createElement(audio_video_preview, {
          fileInfo: fileInfo,
          fileUrl: fileUrl
        });
      } else if (fileType === constants/* FileTypes.PDF */.ml.PDF) {
        modalImageClass = ' file-preview-modal__content-scrollable';
        content = /*#__PURE__*/react.createElement("div", {
          className: "file-preview-modal__scrollable",
          onClick: this.handleBgClose
        }, /*#__PURE__*/react.createElement(react.Suspense, {
          fallback: null
        }, /*#__PURE__*/react.createElement(PDFPreview, {
          fileInfo: fileInfo,
          fileUrl: fileUrl,
          scale: this.state.scale[this.state.imageIndex],
          handleBgClose: this.handleBgClose
        })));
        zoomBar = /*#__PURE__*/react.createElement(popover_bar, {
          scale: this.state.scale[this.state.imageIndex],
          showZoomControls: this.state.showZoomControls,
          handleZoomIn: this.handleZoomIn,
          handleZoomOut: this.handleZoomOut,
          handleZoomReset: this.handleZoomReset
        });
      } else if (CodePreview.supports(fileInfo)) {
        dialogClassName += ' modal-code';
        content = /*#__PURE__*/react.createElement(CodePreview, {
          fileInfo: fileInfo,
          fileUrl: fileUrl,
          className: "file-preview-modal__code-preview"
        });
      } else {
        content = /*#__PURE__*/react.createElement(file_info_preview/* default */.Z, {
          fileInfo: fileInfo,
          fileUrl: fileUrl
        });
      }
    } else {
      // display a progress indicator when the preview for an image is still loading
      const loading = utils/* localizeMessage */._u('view_image.loading', 'Loading');
      const progress = Math.floor(this.state.progress[this.state.imageIndex]);
      content = /*#__PURE__*/react.createElement(loading_image_preview/* default */.Z, {
        loading: loading,
        progress: progress
      });
    }

    if (isFileInfo(fileInfo)) {
      for (const preview of this.props.pluginFilePreviewComponents) {
        if (preview.override(fileInfo, this.props.post)) {
          content = /*#__PURE__*/react.createElement(preview.component, {
            fileInfo: fileInfo,
            post: this.props.post
          });
          break;
        }
      }
    }

    return /*#__PURE__*/react.createElement(Modal/* default */.Z, {
      show: this.state.show,
      onHide: this.handleModalClose,
      onExited: this.props.onExited,
      className: "modal-image file-preview-modal",
      dialogClassName: dialogClassName,
      animation: true,
      backdrop: false,
      role: "dialog",
      style: {
        paddingLeft: 0
      },
      "aria-labelledby": "viewImageModalLabel"
    }, /*#__PURE__*/react.createElement(Modal/* default.Body */.Z.Body, {
      className: "file-preview-modal__body"
    }, /*#__PURE__*/react.createElement("div", {
      className: 'modal-image__wrapper',
      onClick: this.handleModalClose
    }, /*#__PURE__*/react.createElement("div", {
      className: "file-preview-modal__main-ctr",
      onMouseEnter: this.onMouseEnterImage,
      onMouseLeave: this.onMouseLeaveImage,
      onClick: e => e.stopPropagation()
    }, /*#__PURE__*/react.createElement(Modal/* default.Title */.Z.Title, {
      componentClass: "div",
      id: "viewImageModalLabel",
      className: "file-preview-modal__title"
    }, /*#__PURE__*/react.createElement(file_preview_modal_header, {
      isMobileView: this.props.isMobileView,
      post: this.props.post,
      showPublicLink: showPublicLink,
      fileIndex: this.state.imageIndex,
      totalFiles: (_this$props$fileInfos = this.props.fileInfos) === null || _this$props$fileInfos === void 0 ? void 0 : _this$props$fileInfos.length,
      filename: fileName,
      fileURL: fileDownloadUrl,
      fileInfo: fileInfo,
      enablePublicLink: this.props.enablePublicLink,
      canDownloadFiles: this.props.canDownloadFiles,
      isExternalFile: isExternalFile,
      handlePrev: this.handlePrev,
      handleNext: this.handleNext,
      handleModalClose: this.handleModalClose
    }), zoomBar), /*#__PURE__*/react.createElement("div", {
      className: 'file-preview-modal__content' + modalImageClass,
      onClick: this.handleBgClose
    }, content), this.props.isMobileView && /*#__PURE__*/react.createElement(file_preview_modal_footer, {
      post: this.props.post,
      showPublicLink: showPublicLink,
      filename: fileName,
      fileURL: fileDownloadUrl,
      fileInfo: fileInfo,
      enablePublicLink: this.props.enablePublicLink,
      canDownloadFiles: this.props.canDownloadFiles,
      isExternalFile: isExternalFile,
      handleModalClose: this.handleModalClose
    })))));
  }

}

file_preview_modal_defineProperty(FilePreviewModal, "propTypes", {
  canDownloadFiles: (prop_types_default()).bool.isRequired,
  enablePublicLink: (prop_types_default()).bool.isRequired,
  isMobileView: (prop_types_default()).bool.isRequired,
  pluginFilePreviewComponents: (prop_types_default()).array,
  onExited: (prop_types_default()).func.isRequired,
  postId: (prop_types_default()).string,
  startIndex: (prop_types_default()).number
});

file_preview_modal_defineProperty(FilePreviewModal, "defaultProps", {
  fileInfos: [],
  startIndex: 0,
  pluginFilePreviewComponents: []
});

/***/ })

}]);
//# sourceMappingURL=716.823ddffb607d72bd53fe.js.map