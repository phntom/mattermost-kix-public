"use strict";
(self["webpackChunk_mattermost_webapp"] = self["webpackChunk_mattermost_webapp"] || []).push([[271],{

/***/ 78271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PDFPreview)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88674);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33948);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19601);
/* harmony import */ var core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(67294);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(23279);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mattermost_redux_utils_file_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(76960);
/* harmony import */ var components_widgets_loading_loading_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56640);
/* harmony import */ var components_file_info_preview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(80463);




function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






const INITIAL_RENDERED_PAGES = 3;
class PDFPreview extends react__WEBPACK_IMPORTED_MODULE_3__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "downloadFile", e => {
      const fileDownloadUrl = this.props.fileInfo.link || (0,mattermost_redux_utils_file_utils__WEBPACK_IMPORTED_MODULE_5__/* .getFileDownloadUrl */ .gN)(this.props.fileInfo.id);
      e.preventDefault();
      window.location.href = fileDownloadUrl;
    });

    _defineProperty(this, "isInViewport", page => {
      const bounding = page.getBoundingClientRect();
      const viewportTop = this.container.current.scrollTop;
      const viewportBottom = viewportTop + this.container.current.parentElement.clientHeight;
      return bounding.top >= viewportTop && bounding.top <= viewportBottom || bounding.bottom >= viewportTop && bounding.bottom <= viewportBottom || bounding.top <= viewportTop && bounding.bottom >= viewportBottom;
    });

    _defineProperty(this, "renderPDFPage", async pageIndex => {
      const canvas = this["pdfCanvasRef-".concat(pageIndex)].current;

      if (!canvas) {
        // Refs are undefined when testing
        return;
      } // Always render the first INITIAL_RENDERED_PAGES pages to avoid
      // problems detecting isInViewport during the open animation


      if (pageIndex >= INITIAL_RENDERED_PAGES && !this.isInViewport(canvas)) {
        return;
      }

      if (this.pdfPagesRendered[pageIndex]) {
        return;
      }

      await this.loadPage(this.state.pdf, pageIndex);
      const page = this.state.pdfPages[pageIndex];
      const context = canvas.getContext('2d');
      const viewport = page.getViewport(this.props.scale);
      this["pdfCanvasRef-".concat(pageIndex)].current.height = viewport.height;
      this["pdfCanvasRef-".concat(pageIndex)].current.width = viewport.width;
      const renderContext = {
        canvasContext: context,
        viewport
      };
      page.render(renderContext);
      this.pdfPagesRendered[pageIndex] = true;
    });

    _defineProperty(this, "getPdfDocument", () => {
      Promise.all(/* import() */[__webpack_require__.e(299), __webpack_require__.e(143)]).then(__webpack_require__.t.bind(__webpack_require__, 99299, 23)).then(PDFJS => {
        PDFJS.disableWorker = true;
        PDFJS.getDocument(this.props.fileUrl).then(this.onDocumentLoad).catch(this.onDocumentLoadError);
      });
    });

    _defineProperty(this, "onDocumentLoad", pdf => {
      this.setState({
        pdf,
        numPages: pdf.numPages
      });

      for (let i = 0; i < pdf.numPages; i++) {
        this["pdfCanvasRef-".concat(i)] = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createRef();
      }

      this.setState({
        loading: false,
        success: true
      });
    });

    _defineProperty(this, "onDocumentLoadError", reason => {
      console.log('Unable to load PDF preview: ' + reason); //eslint-disable-line no-console

      this.setState({
        loading: false,
        success: false
      });
    });

    _defineProperty(this, "loadPage", async (pdf, pageIndex) => {
      if (this.state.pdfPagesLoaded[pageIndex]) {
        return this.state.pdfPages[pageIndex];
      }

      const page = await pdf.getPage(pageIndex + 1);
      const pdfPages = Object.assign({}, this.state.pdfPages);
      pdfPages[page.pageIndex] = page;
      const pdfPagesLoaded = Object.assign({}, this.state.pdfPagesLoaded);
      pdfPagesLoaded[page.pageIndex] = true;
      this.setState({
        pdfPages,
        pdfPagesLoaded
      });
      return page;
    });

    _defineProperty(this, "handleScroll", lodash_debounce__WEBPACK_IMPORTED_MODULE_4___default()(() => {
      if (this.state.success) {
        for (let i = 0; i < this.state.numPages; i++) {
          this.renderPDFPage(i);
        }
      }
    }, 100));

    this.pdfPagesRendered = {};
    this.container = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createRef();
    this.state = {
      pdf: null,
      pdfPages: {},
      pdfPagesLoaded: {},
      numPages: 0,
      loading: true,
      success: false
    };
  }

  componentDidMount() {
    this.getPdfDocument();

    if (this.container.current) {
      this.parentNode = this.container.current.parentElement.parentElement;
      this.parentNode.addEventListener('scroll', this.handleScroll);
    }
  }

  componentWillUnmount() {
    if (this.parentNode) {
      this.parentNode.removeEventListener('scroll', this.handleScroll);
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.fileUrl !== state.prevFileUrl) {
      return {
        pdf: null,
        pdfPages: {},
        pdfPagesLoaded: {},
        numPages: 0,
        loading: true,
        success: false,
        prevFileUrl: props.fileUrl
      };
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.fileUrl !== prevProps.fileUrl) {
      this.getPdfDocument();
      this.pdfPagesRendered = {};
    }

    if (this.props.scale !== prevProps.scale) {
      this.pdfPagesRendered = {};

      if (this.state.success) {
        for (let i = 0; i < this.state.numPages; i++) {
          this.renderPDFPage(i);
        }
      }
    }

    if (!prevState.success && this.state.success) {
      for (let i = 0; i < this.state.numPages; i++) {
        this.renderPDFPage(i);
      }
    }
  }

  render() {
    if (this.state.loading) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
        ref: this.container,
        className: "view-image__loading"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(components_widgets_loading_loading_spinner__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, null));
    }

    if (!this.state.success) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(components_file_info_preview__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
        fileInfo: this.props.fileInfo,
        fileUrl: this.props.fileUrl
      });
    }

    const pdfCanvases = [];

    for (let i = 0; i < this.state.numPages; i++) {
      pdfCanvases.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("canvas", {
        ref: this["pdfCanvasRef-".concat(i)],
        key: 'previewpdfcanvas' + i
      }));

      if (i < this.state.numPages - 1 && this.state.numPages > 1) {
        pdfCanvases.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
          key: 'previewpdfspacer' + i,
          className: "pdf-preview-spacer"
        }));
      }
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement("div", {
      ref: this.container,
      className: "post-code",
      onClick: this.props.handleBgClose
    }, pdfCanvases);
  }

}

_defineProperty(PDFPreview, "propTypes", {
  /**
  * Compare file types
  */
  fileInfo: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().object.isRequired),

  /**
  *  URL of pdf file to output and compare to update props url
  */
  fileUrl: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().string.isRequired),
  scale: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().number.isRequired),
  handleBgClose: (prop_types__WEBPACK_IMPORTED_MODULE_8___default().func.isRequired)
});

/***/ })

}]);
//# sourceMappingURL=271.8d90ab39474554f1299f.js.map