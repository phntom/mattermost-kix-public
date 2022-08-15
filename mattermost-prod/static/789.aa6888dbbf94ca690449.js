(self["webpackChunk_mattermost_webapp"] = self["webpackChunk_mattermost_webapp"] || []).push([[789],{

/***/ 53066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ InfiniteScroll)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33948);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(67294);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
const _excluded = ["children", "element", "hasMore", "initialLoad", "loader", "loadMore", "pageStart", "threshold", "useWindow", "isReverse", "scrollPosition", "containerHeight"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.


class InfiniteScroll extends react__WEBPACK_IMPORTED_MODULE_1__.PureComponent {
  constructor() {
    super(...arguments);

    _defineProperty(this, "scrollListener", () => {
      const el = this.scrollComponent;
      const scrollEl = window;
      let offset;

      if (this.props.useWindow) {
        var scrollTop = 'pageYOffset' in scrollEl ? scrollEl.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

        if (this.props.isReverse) {
          offset = scrollTop;
        } else {
          offset = this.calculateTopPosition(el) + (el.offsetHeight - scrollTop - window.innerHeight);
        }
      } else if (this.props.isReverse) {
        offset = el.parentNode.scrollTop;
      } else {
        offset = el.scrollHeight - el.parentNode.scrollTop - el.parentNode.clientHeight;
      }

      if (offset < Number(this.props.threshold)) {
        this.detachScrollListener(); // Call loadMore after detachScrollListener to allow for non-async loadMore functions

        if (typeof this.props.loadMore === 'function') {
          this.props.loadMore(this.pageLoaded += 1);
        }
      }
    });
  }

  componentDidMount() {
    this.pageLoaded = this.props.pageStart;
    this.attachScrollListener();
    this.setScrollPosition();
  }

  componentDidUpdate() {
    this.attachScrollListener();
  }

  render() {
    const _this$props = this.props,
          {
      children,
      element,
      hasMore,
      initialLoad,
      // eslint-disable-line no-unused-vars
      loader,
      loadMore,
      // eslint-disable-line no-unused-vars
      pageStart,
      // eslint-disable-line no-unused-vars
      threshold,
      // eslint-disable-line no-unused-vars
      useWindow,
      // eslint-disable-line no-unused-vars
      isReverse,
      // eslint-disable-line no-unused-vars
      scrollPosition,
      // eslint-disable-line no-unused-vars
      containerHeight
    } = _this$props,
          props = _objectWithoutProperties(_this$props, _excluded);

    props.ref = node => {
      this.scrollComponent = node;
    };

    const elementProps = containerHeight ? _objectSpread(_objectSpread({}, props), {}, {
      style: {
        height: containerHeight
      }
    }) : props;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(element, elementProps, children, hasMore && (loader || this.defaultLoader));
  }

  calculateTopPosition(el) {
    if (!el) {
      return 0;
    }

    return el.offsetTop + this.calculateTopPosition(el.offsetParent);
  }

  setScrollPosition() {
    const {
      scrollPosition
    } = this.props;

    if (scrollPosition !== null) {
      window.scrollTo(0, scrollPosition);
    }
  }

  attachScrollListener() {
    if (!this.props.hasMore) {
      return;
    }

    let scrollEl = window;

    if (this.props.useWindow === false) {
      scrollEl = this.scrollComponent.parentNode;
    }

    scrollEl.addEventListener('scroll', this.scrollListener);
    scrollEl.addEventListener('resize', this.scrollListener);

    if (this.props.initialLoad) {
      this.scrollListener();
    }
  }

  detachScrollListener() {
    var scrollEl = window;

    if (this.props.useWindow === false) {
      scrollEl = this.scrollComponent.parentNode;
    }

    scrollEl.removeEventListener('scroll', this.scrollListener);
    scrollEl.removeEventListener('resize', this.scrollListener);
  }

  componentWillUnmount() {
    this.detachScrollListener();
  } // Set a defaut loader for all your `InfiniteScroll` components


  setDefaultLoader(loader) {
    this.defaultLoader = loader;
  }

}

_defineProperty(InfiniteScroll, "propTypes", {
  children: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array),
  element: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),
  hasMore: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  initialLoad: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  loader: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object),
  loadMore: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func.isRequired),
  pageStart: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  threshold: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  useWindow: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  isReverse: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool),
  containerHeight: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),
  scrollPosition: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number)
});

_defineProperty(InfiniteScroll, "defaultProps", {
  element: 'div',
  hasMore: false,
  initialLoad: true,
  pageStart: 0,
  threshold: 250,
  useWindow: true,
  isReverse: false,
  containerHeight: null,
  scrollPosition: null
});

/***/ }),

/***/ 11789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "appProps": () => (/* binding */ appProps),
  "default": () => (/* binding */ GifPicker)
});

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.regexp.exec.js
var es_regexp_exec = __webpack_require__(74916);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__(15306);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(45697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 19 modules
var es = __webpack_require__(14494);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.search.js
var es_string_search = __webpack_require__(64765);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__(88674);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.reduce.js
var es_array_reduce = __webpack_require__(85827);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__(33948);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/action_types/index.ts + 24 modules
var action_types = __webpack_require__(7039);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/client/index.ts + 4 modules
var client = __webpack_require__(53473);
// EXTERNAL MODULE: ./node_modules/gfycat-sdk/dist/gfycat-sdk.umd.bundle.min.js
var gfycat_sdk_umd_bundle_min = __webpack_require__(62540);
var gfycat_sdk_umd_bundle_min_default = /*#__PURE__*/__webpack_require__.n(gfycat_sdk_umd_bundle_min);
;// CONCATENATED MODULE: ./packages/mattermost-redux/src/utils/gfycat_sdk.ts
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

const defaultKey = '2_KtH_W5';
const defaultSecret = '3wLVZPiswc3DnaiaFoLkDvB4X0IV6CpMkj4tf2inJRsBY6-FnkT08zGmppWFgeof';
let activeKey = null;
let activeSecret = null;
let instance = null;
function gfycat_sdk_gfycatSdk(key, secret) {
  if (instance && activeKey === key && activeSecret === secret) {
    return instance;
  }

  if (!key || !secret) {
    instance = new (gfycat_sdk_umd_bundle_min_default())({
      client_id: defaultKey,
      client_secret: defaultSecret
    });
    return instance;
  }

  activeKey = key;
  activeSecret = secret;
  instance = new (gfycat_sdk_umd_bundle_min_default())({
    client_id: key,
    client_secret: secret
  });
  return instance;
}
;// CONCATENATED MODULE: ./packages/mattermost-redux/src/actions/gifs.ts






function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.



// APP PROPS
function saveAppPropsRequest(props) {
  return {
    type: action_types/* GifTypes.SAVE_APP_PROPS */.rf.SAVE_APP_PROPS,
    props
  };
}
function saveAppProps(appProps) {
  return (dispatch, getState) => {
    const {
      GfycatAPIKey,
      GfycatAPISecret
    } = getState().entities.general.config;
    gfycat_sdk_gfycatSdk(GfycatAPIKey, GfycatAPISecret).authenticate();
    dispatch(saveAppPropsRequest(appProps));
  };
} // SEARCH

function selectSearchText(searchText) {
  return {
    type: GifTypes.SELECT_SEARCH_TEXT,
    searchText
  };
}
function updateSearchText(searchText) {
  return {
    type: action_types/* GifTypes.UPDATE_SEARCH_TEXT */.rf.UPDATE_SEARCH_TEXT,
    searchText
  };
}
function searchBarTextSave(searchBarText) {
  return {
    type: action_types/* GifTypes.SAVE_SEARCH_BAR_TEXT */.rf.SAVE_SEARCH_BAR_TEXT,
    searchBarText
  };
}
function invalidateSearchText(searchText) {
  return {
    type: GifTypes.INVALIDATE_SEARCH_TEXT,
    searchText
  };
}
function requestSearch(searchText) {
  return {
    type: action_types/* GifTypes.REQUEST_SEARCH */.rf.REQUEST_SEARCH,
    searchText
  };
}
function receiveSearch(_ref) {
  let {
    searchText,
    count,
    start,
    json
  } = _ref;
  return _objectSpread(_objectSpread({
    type: action_types/* GifTypes.RECEIVE_SEARCH */.rf.RECEIVE_SEARCH,
    searchText
  }, json), {}, {
    count,
    start,
    currentPage: start / count,
    receivedAt: Date.now()
  });
}
function receiveSearchEnd(searchText) {
  return {
    type: action_types/* GifTypes.RECEIVE_SEARCH_END */.rf.RECEIVE_SEARCH_END,
    searchText
  };
}
function errorSearching(err, searchText) {
  return {
    type: action_types/* GifTypes.SEARCH_FAILURE */.rf.SEARCH_FAILURE,
    searchText,
    err
  };
}
function receiveCategorySearch(_ref2) {
  let {
    tagName,
    json
  } = _ref2;
  return _objectSpread(_objectSpread({
    type: action_types/* GifTypes.RECEIVE_CATEGORY_SEARCH */.rf.RECEIVE_CATEGORY_SEARCH,
    searchText: tagName
  }, json), {}, {
    receiveAt: Date.now()
  });
}
function clearSearchResults() {
  return {
    type: GifTypes.CLEAR_SEARCH_RESULTS
  };
}
function requestSearchById(gfyId) {
  return {
    type: GifTypes.SEARCH_BY_ID_REQUEST,
    payload: {
      gfyId
    }
  };
}
function receiveSearchById(gfyId, gfyItem) {
  return {
    type: GifTypes.SEARCH_BY_ID_SUCCESS,
    payload: {
      gfyId,
      gfyItem
    }
  };
}
function errorSearchById(err, gfyId) {
  return {
    type: GifTypes.SEARCH_BY_ID_FAILURE,
    err,
    gfyId
  };
}
function searchScrollPosition(scrollPosition) {
  return {
    type: action_types/* GifTypes.SAVE_SEARCH_SCROLL_POSITION */.rf.SAVE_SEARCH_SCROLL_POSITION,
    scrollPosition
  };
}
function searchPriorLocation(priorLocation) {
  return {
    type: GifTypes.SAVE_SEARCH_PRIOR_LOCATION,
    priorLocation
  };
}
function searchGfycat(_ref3) {
  let {
    searchText,
    count = 30,
    startIndex = 0
  } = _ref3;
  let start = startIndex;
  return (dispatch, getState) => {
    const {
      GfycatAPIKey,
      GfycatAPISecret
    } = getState().entities.general.config;
    const {
      resultsByTerm
    } = getState().entities.gifs.search;

    if (resultsByTerm[searchText]) {
      start = resultsByTerm[searchText].start + count;
    }

    dispatch(requestSearch(searchText));
    const sdk = gfycat_sdk_gfycatSdk(GfycatAPIKey, GfycatAPISecret);
    sdk.authenticate();
    return sdk.search({
      search_text: searchText,
      count,
      start
    }).then(json => {
      if (json.errorMessage) {
        // There was no results before
        if (resultsByTerm[searchText].items) {
          dispatch(receiveSearchEnd(searchText));
        } else {
          dispatch(errorSearching(json, searchText));
        }
      } else {
        dispatch(updateSearchText(searchText));
        dispatch(cacheGifsRequest(json.gfycats));
        dispatch(receiveSearch({
          searchText,
          count,
          start,
          json
        }));
        const context = getState().entities.gifs.categories.tagsDict[searchText] ? 'category' : 'search';
        client/* Client4.trackEvent */.je.trackEvent('gfycat', 'views', {
          context,
          count: json.gfycats.length,
          keyword: searchText
        });
      }
    }).catch(err => dispatch(errorSearching(err, searchText)));
  };
}
function searchCategory(_ref4) {
  let {
    tagName = '',
    gfyCount = 30,
    cursorPos = undefined
  } = _ref4;
  let cursor = cursorPos;
  return async (dispatch, getState) => {
    const {
      GfycatAPIKey,
      GfycatAPISecret
    } = getState().entities.general.config;
    const {
      resultsByTerm
    } = getState().entities.gifs.search;

    if (resultsByTerm[tagName]) {
      cursor = resultsByTerm[tagName].cursor;
    }

    dispatch(requestSearch(tagName));
    return gfycat_sdk_gfycatSdk(GfycatAPIKey, GfycatAPISecret).getTrendingCategories({
      tagName,
      gfyCount,
      cursor
    }).then(json => {
      if (json.errorMessage) {
        if (resultsByTerm[tagName].gfycats) {
          dispatch(receiveSearchEnd(tagName));
        } else {
          dispatch(errorSearching(json, tagName));
        }
      } else {
        dispatch(updateSearchText(tagName));
        dispatch(cacheGifsRequest(json.gfycats));
        dispatch(receiveCategorySearch({
          tagName,
          json
        }));
        client/* Client4.trackEvent */.je.trackEvent('gfycat', 'views', {
          context: 'category',
          count: json.gfycats.length,
          keyword: tagName
        }); // preload categories list

        if (tagName === 'trending') {
          dispatch(requestCategoriesListIfNeeded());
        }
      }
    }).catch(err => dispatch(errorSearching(err, tagName)));
  };
}
function shouldSearch(state, searchText) {
  const resultsByTerm = state.entities.gifs.search.resultsByTerm[searchText];

  if (!resultsByTerm) {
    return true;
  } else if (resultsByTerm.isFetching) {
    return false;
  } else if (resultsByTerm.moreRemaining) {
    return true;
  }

  return resultsByTerm.didInvalidate;
}
function searchIfNeeded(searchText) {
  return (dispatch, getState) => {
    if (shouldSearch(getState(), searchText)) {
      if (searchText.toLowerCase() === 'trending') {
        return dispatch(searchCategory({
          tagName: searchText
        }));
      }

      return dispatch(searchGfycat({
        searchText
      }));
    }

    return Promise.resolve();
  };
}
function searchIfNeededInitial(searchText) {
  return (dispatch, getState) => {
    dispatch(updateSearchText(searchText));

    if (shouldSearchInitial(getState(), searchText)) {
      if (searchText.toLowerCase() === 'trending') {
        return dispatch(searchCategory({
          tagName: searchText
        }));
      }

      return dispatch(searchGfycat({
        searchText
      }));
    }

    return Promise.resolve();
  };
}
function shouldSearchInitial(state, searchText) {
  const resultsByTerm = state.entities.gifs.search.resultsByTerm[searchText];

  if (!resultsByTerm) {
    return true;
  } else if (resultsByTerm.isFetching) {
    return false;
  }

  return false;
}
function searchById(gfyId) {
  return (dispatch, getState) => {
    const {
      GfycatAPIKey,
      GfycatAPISecret
    } = getState().entities.general.config;
    dispatch(requestSearchById(gfyId));
    return gfycatSdk(GfycatAPIKey, GfycatAPISecret).searchById({
      id: gfyId
    }).then(response => {
      dispatch(receiveSearchById(gfyId, response.gfyItem));
      dispatch(cacheGifsRequest([response.gfyItem]));
    }).catch(err => dispatch(errorSearchById(err, gfyId)));
  };
}
function shouldSearchById(state, gfyId) {
  return !state.entities.gifs.cache.gifs[gfyId]; //TODO investigate, used to be !state.cache.gifs[gfyId];
}
function searchByIdIfNeeded(gfyId) {
  return (dispatch, getState) => {
    if (shouldSearchById(getState(), gfyId)) {
      return dispatch(searchById(gfyId));
    }

    return Promise.resolve(getState().entities.gifs.cache.gifs[gfyId]); //TODO: investigate, used to be getState().cache.gifs[gfyId]
  };
}
function saveSearchScrollPosition(scrollPosition) {
  return dispatch => {
    dispatch(searchScrollPosition(scrollPosition));
  };
}
function saveSearchPriorLocation(priorLocation) {
  return dispatch => {
    dispatch(searchPriorLocation(priorLocation));
  };
}
function searchTextUpdate(searchText) {
  return dispatch => {
    dispatch(updateSearchText(searchText));
  };
}
function saveSearchBarText(searchBarText) {
  return dispatch => {
    dispatch(searchBarTextSave(searchBarText));
  };
} // CATEGORIES

function categoriesListRequest() {
  return {
    type: action_types/* GifTypes.REQUEST_CATEGORIES_LIST */.rf.REQUEST_CATEGORIES_LIST
  };
}
function categoriesListReceived(json) {
  return _objectSpread({
    type: action_types/* GifTypes.CATEGORIES_LIST_RECEIVED */.rf.CATEGORIES_LIST_RECEIVED
  }, json);
}
function categoriesListFailure(err) {
  return {
    type: action_types/* GifTypes.CATEGORIES_LIST_FAILURE */.rf.CATEGORIES_LIST_FAILURE,
    err
  };
}
function requestCategoriesList() {
  let {
    count = 60
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (dispatch, getState) => {
    const {
      GfycatAPIKey,
      GfycatAPISecret
    } = getState().entities.general.config;
    const state = getState().entities.gifs.categories;

    if (!shouldRequestCategoriesList(state)) {
      return Promise.resolve();
    }

    dispatch(categoriesListRequest());
    const {
      cursor
    } = state;

    const options = _objectSpread(_objectSpread({}, count && {
      count
    }), cursor && {
      cursor
    });

    return gfycat_sdk_gfycatSdk(GfycatAPIKey, GfycatAPISecret).getCategories(options).then(json => {
      const newGfycats = json.tags.reduce((gfycats, tag) => {
        if (tag.gfycats[0] && tag.gfycats[0].width) {
          return [...gfycats, ...tag.gfycats];
        }

        return gfycats;
      }, []);
      dispatch(cacheGifsRequest(newGfycats));
      dispatch(categoriesListReceived(json));
    }).catch(err => {
      dispatch(categoriesListFailure(err));
    });
  };
}
function requestCategoriesListIfNeeded() {
  let {
    count
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    count: undefined
  };
  return (dispatch, getState) => {
    const state = getState().entities.gifs.categories;

    if (state.tagsList && state.tagsList.length) {
      return Promise.resolve();
    }

    return dispatch(requestCategoriesList({
      count
    }));
  };
}
function shouldRequestCategoriesList(state) {
  const {
    hasMore,
    isFetching,
    tagsList
  } = state;

  if (!tagsList || !tagsList.length) {
    return true;
  } else if (isFetching) {
    return false;
  } else if (hasMore) {
    return true;
  }

  return false;
} // CACHE

function cacheRequest() {
  return {
    type: action_types/* GifTypes.CACHE_REQUEST */.rf.CACHE_REQUEST,
    payload: {
      updating: true
    }
  };
}
function cacheGifs(gifs) {
  return {
    type: action_types/* GifTypes.CACHE_GIFS */.rf.CACHE_GIFS,
    gifs
  };
}
function cacheGifsRequest(gifs) {
  return async dispatch => {
    dispatch(cacheRequest());
    dispatch(cacheGifs(gifs));
    return {
      data: true
    };
  };
}
// EXTERNAL MODULE: ./packages/mattermost-redux/src/selectors/entities/preferences.ts
var preferences = __webpack_require__(89754);
// EXTERNAL MODULE: ./packages/mattermost-redux/src/utils/theme_utils.ts
var theme_utils = __webpack_require__(71170);
;// CONCATENATED MODULE: ./components/gif_picker/utils/constants.js
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.
/* harmony default export */ const constants = ({
  ItemTapAction: {
    OPEN_EMBED_PAGE: 1,
    SHARE: 2
  },
  Tab: {
    TRENDING: 0,
    REACTIONS: 1
  },
  appName: {
    mattermost: 'mattermost'
  }
});
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.split.js
var es_string_split = __webpack_require__(23123);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.trim.js
var es_string_trim = __webpack_require__(73210);
;// CONCATENATED MODULE: ./components/widgets/icons/gif_search_icon.tsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

class GifSearchIcon extends react.PureComponent {
  render() {
    return /*#__PURE__*/react.createElement("span", this.props, /*#__PURE__*/react.createElement("svg", {
      width: "100%",
      height: "100%",
      viewBox: "-10 -10 40 40",
      version: "1.1"
    }, /*#__PURE__*/react.createElement("g", {
      id: "ic_search",
      transform: "matrix(0.959095,-9.6091e-18,-1.00189e-17,0.959095,-0.0633002,-0.777826)"
    }, /*#__PURE__*/react.createElement("path", {
      d: "M2.648,15.872C3.433,16.658 4.376,17.287 5.454,17.758C6.553,18.229 7.698,18.454 8.888,18.454C10.728,18.454 12.389,17.938 13.893,16.905L18.18,21.192C18.494,21.506 18.854,21.664 19.302,21.664C19.751,21.664 20.111,21.506 20.447,21.192C20.761,20.855 20.919,20.496 20.919,20.047C20.919,19.621 20.761,19.239 20.447,18.925L16.16,14.638C17.193,13.134 17.709,11.473 17.709,9.633C17.709,8.443 17.484,7.298 17.013,6.198C16.542,5.121 15.913,4.178 15.128,3.393C14.342,2.607 13.399,1.979 12.322,1.507C11.222,1.036 10.077,0.811 8.888,0.811C7.698,0.811 6.553,1.036 5.454,1.507C4.376,1.979 3.433,2.607 2.648,3.393C1.862,4.178 1.234,5.121 0.762,6.198C0.291,7.298 0.066,8.443 0.066,9.633C0.066,10.822 0.291,11.967 0.762,13.067C1.234,14.144 1.862,15.087 2.648,15.872ZM8.888,4.021C10.436,4.021 11.761,4.56 12.861,5.66C13.96,6.76 14.499,8.084 14.499,9.633C14.499,11.181 13.96,12.506 12.861,13.606C11.761,14.705 10.436,15.244 8.888,15.244C7.339,15.244 6.015,14.705 4.915,13.606C3.815,12.506 3.276,11.181 3.276,9.633C3.276,8.084 3.815,6.76 4.915,5.66C6.015,4.56 7.339,4.021 8.888,4.021Z",
      style: {
        fill: 'inherit'
      }
    }))));
  }

}
;// CONCATENATED MODULE: ./components/widgets/icons/gif_search_clear_icon.tsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

class GifSearchClearIcon extends react.PureComponent {
  render() {
    return /*#__PURE__*/react.createElement("span", this.props, /*#__PURE__*/react.createElement("svg", {
      width: "100%",
      height: "100%",
      viewBox: "-10 -10 40 40",
      enableBackground: "new 0 0 20 20",
      version: "1.1"
    }, /*#__PURE__*/react.createElement("g", {
      transform: "matrix(0.952381,0,0,1,0,0)"
    }, /*#__PURE__*/react.createElement("path", {
      fill: "inherit",
      d: "M10.5 11.7L2.2 19.8C2 19.9 1.9 20 1.7 20 1.6 20 1.4 19.9 1.3 19.8L0.2 18.8C0.1 18.7 0 18.5 0 18.3 0 18.2 0.1 18 0.2 17.9L8.3 10 0.2 2.1C0.1 2 0 1.8 0 1.7 0 1.5 0.1 1.3 0.2 1.2L1.3 0.2C1.4 0.1 1.6 0 1.7 0 1.9 0 2 0.1 2.2 0.2L10.5 8.3 18.8 0.2C19 0.1 19.1 0 19.3 0 19.4 0 19.6 0.1 19.7 0.2L20.8 1.2C20.9 1.3 21 1.5 21 1.7 21 1.8 20.9 2 20.8 2.1L12.7 10 20.8 17.9C20.9 18 21 18.2 21 18.3 21 18.5 20.9 18.7 20.8 18.8L19.7 19.8C19.6 19.9 19.4 20 19.3 20 19.1 20 19 19.9 18.8 19.8L10.5 11.7Z"
    }))));
  }

}
// EXTERNAL MODULE: ./components/localized_input/localized_input.tsx
var localized_input = __webpack_require__(927);
// EXTERNAL MODULE: ./utils/i18n.tsx
var i18n = __webpack_require__(87993);
;// CONCATENATED MODULE: ./components/gif_picker/components/SearchBar/index.jsx





function SearchBar_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function SearchBar_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SearchBar_ownKeys(Object(source), true).forEach(function (key) { SearchBar_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SearchBar_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SearchBar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.












function mapStateToProps(state) {
  return SearchBar_objectSpread(SearchBar_objectSpread(SearchBar_objectSpread({}, state.entities.gifs.categories), state.entities.gifs.search), {}, {
    theme: (0,preferences/* getTheme */.gh)(state),
    appProps: state.entities.gifs.app
  });
}

const mapDispatchToProps = {
  saveSearchBarText: saveSearchBarText,
  saveSearchScrollPosition: saveSearchScrollPosition,
  searchTextUpdate: searchTextUpdate
};
const getStyle = (0,theme_utils/* makeStyleFromTheme */.$Y)(theme => {
  return {
    background: {
      backgroundColor: theme.centerChannelBg
    },
    icon: {
      fill: (0,theme_utils/* changeOpacity */.v5)(theme.centerChannelColor, 0.4)
    },
    inputBackground: {
      backgroundColor: theme.centerChannelBg
    },
    input: {
      borderColor: (0,theme_utils/* changeOpacity */.v5)(theme.centerChannelColor, 0.12)
    }
  };
});
class SearchBar extends react.Component {
  constructor(props) {
    super(props);

    SearchBar_defineProperty(this, "parseSearchText", searchText => {
      return searchText.trim().split(/ +/).join('-');
    });

    SearchBar_defineProperty(this, "removeExtraSpaces", searchText => {
      return searchText.trim().split(/ +/).join(' ');
    });

    SearchBar_defineProperty(this, "updateSearchInputValue", searchText => {
      this.searchInput.value = searchText;
      this.props.saveSearchBarText(searchText);
      this.props.handleSearchTextChange(searchText);
    });

    SearchBar_defineProperty(this, "handleSubmit", event => {
      event.preventDefault();
      this.triggerSearch(this.searchInput.value);
      this.searchInput.blur();
    });

    SearchBar_defineProperty(this, "triggerSearch", searchText => {
      const {
        onSearch
      } = this.props;
      this.props.searchTextUpdate(this.parseSearchText(searchText));
      onSearch();
      this.props.saveSearchScrollPosition(0);
    });

    SearchBar_defineProperty(this, "handleChange", event => {
      clearTimeout(this.searchTimeout);
      const searchText = event.target.value;
      const {
        onCategories,
        action
      } = this.props;
      this.props.saveSearchBarText(searchText);
      this.props.handleSearchTextChange(searchText);

      if (searchText === '') {
        onCategories();
      } else if (action !== 'reactions' || !this.isFilteredTags(searchText)) {
        // not reactions page or there's no reactions for this search request
        this.searchTimeout = setTimeout(() => {
          this.triggerSearch(searchText);
        }, 500);
      }
    });

    SearchBar_defineProperty(this, "focusInput", () => {
      this.setState({
        inputFocused: true
      });
    });

    SearchBar_defineProperty(this, "blurInput", () => {
      this.setState({
        inputFocused: false
      });
    });

    SearchBar_defineProperty(this, "isFilteredTags", searchText => {
      var text = this.removeExtraSpaces(searchText);
      const {
        tagsList
      } = this.props;
      const substr = text.toLowerCase();
      const filteredTags = tagsList && tagsList.length ? tagsList.filter(tag => {
        if (!text || tag.tagName.indexOf(substr) !== -1) {
          return tag;
        }

        return '';
      }) : [];
      return Boolean(filteredTags.length);
    });

    SearchBar_defineProperty(this, "clearSearchHandle", () => {
      const {
        action,
        onTrending,
        onCategories
      } = this.props;
      this.updateSearchInputValue('');

      if (action === 'reactions') {
        onCategories();
      } else {
        onTrending();
      }
    });

    this.state = {
      inputFocused: false
    };
    this.searchTimeout = null;
    const defaultSearchText = this.props.defaultSearchText || '';
    this.props.saveSearchBarText(defaultSearchText);
    this.props.searchTextUpdate(defaultSearchText);
  }

  componentDidUpdate(prevProps) {
    const {
      searchBarText
    } = this.props;

    if (searchBarText !== prevProps.searchBarText) {
      if (searchBarText === 'trending') {
        this.updateSearchInputValue('');
      } else {
        this.updateSearchInputValue(searchBarText);
      }
    }
  }
  /**
   * Returns text request with hyphens
   */


  shouldComponentUpdate(nextProps, nextState) {
    return !nextProps.searchBarText && this.props.searchBarText || nextProps.searchBarText && !this.props.searchBarText || nextState.inputFocused !== this.state.inputFocused || nextProps.searchBarText !== this.props.searchBarText;
  }

  render() {
    const style = getStyle(this.props.theme);
    const {
      searchBarText
    } = this.props;
    const clearSearchButton = searchBarText ? /*#__PURE__*/react.createElement(GifSearchClearIcon, {
      className: "ic-clear-search",
      style: style.icon,
      onClick: this.clearSearchHandle
    }) : null;
    return /*#__PURE__*/react.createElement("form", {
      className: "gfycat-search",
      method: "get",
      target: "_top",
      noValidate: "",
      onSubmit: this.handleSubmit
    }, /*#__PURE__*/react.createElement("div", {
      className: "search-bar",
      style: style.background
    }, /*#__PURE__*/react.createElement("div", {
      className: "search-input-bg",
      style: style.inputBackground
    }), /*#__PURE__*/react.createElement(localized_input/* default */.Z, {
      className: "search-input",
      name: "searchText",
      autoFocus: true,
      placeholder: {
        id: (0,i18n.t)('gif_picker.gfycat'),
        defaultMessage: 'Search Gfycat'
      },
      onChange: this.handleChange,
      autoComplete: "off",
      autoCapitalize: "off",
      onFocus: this.focusInput,
      onBlur: this.blurInput,
      ref: input => {
        this.searchInput = input;
        return input;
      },
      style: style.input,
      value: searchBarText
    }), /*#__PURE__*/react.createElement(GifSearchIcon, {
      className: "ic ic-search",
      style: style.icon
    }), clearSearchButton), /*#__PURE__*/react.createElement("button", {
      type: "submit",
      className: "submit-button"
    }));
  }

}

SearchBar_defineProperty(SearchBar, "propTypes", {
  searchBarText: (prop_types_default()).string,
  tagsList: (prop_types_default()).array,
  theme: (prop_types_default()).object.isRequired,
  onTrending: (prop_types_default()).func,
  onSearch: (prop_types_default()).func,
  onCategories: (prop_types_default()).func,
  action: (prop_types_default()).string,
  saveSearchScrollPosition: (prop_types_default()).func,
  saveSearchBarText: (prop_types_default()).func,
  searchTextUpdate: (prop_types_default()).func,
  defaultSearchText: (prop_types_default()).string,
  handleSearchTextChange: (prop_types_default()).func.isRequired
});

/* harmony default export */ const components_SearchBar = ((0,es.connect)(mapStateToProps, mapDispatchToProps)(SearchBar));
;// CONCATENATED MODULE: ./components/widgets/icons/gif_trending_icon.tsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

class GifTrendingIcon extends react.PureComponent {
  render() {
    return /*#__PURE__*/react.createElement("span", this.props, /*#__PURE__*/react.createElement("svg", {
      className: "ic-svg ic-trending-svg",
      width: "11px",
      height: "15px",
      viewBox: "0 0 11 15",
      version: "1.1"
    }, /*#__PURE__*/react.createElement("g", {
      id: "Finalized-Design",
      stroke: "none",
      fill: "inherit"
    }, /*#__PURE__*/react.createElement("g", {
      id: "GfyCat---Gycat-Tab",
      transform: "translate(-1212.000000, -619.000000)",
      fill: "inherit"
    }, /*#__PURE__*/react.createElement("g", {
      id: "modal---emojis",
      transform: "translate(1147.000000, 542.000000)"
    }, /*#__PURE__*/react.createElement("g", {
      id: "tabs---gfycat",
      transform: "translate(1.000000, 68.000000)"
    }, /*#__PURE__*/react.createElement("g", {
      id: "tab---trending---selected"
    }, /*#__PURE__*/react.createElement("path", {
      d: "M69.90625,10.4062776 C69.90625,10.9531513 70.0976562,11.4909106 70.4804688,12.019555 C70.6992188,12.32945 71.1276043,12.7760638 71.765625,13.3593956 C72.3489582,13.9062693 72.7773438,14.3346538 73.0507812,14.6445488 C73.5065106,15.1731932 73.8528644,15.7109525 74.0898438,16.2578262 C74.3632812,16.9505327 74.5,17.6979271 74.5,18.5000083 C74.5,19.4479229 74.2630207,20.3229208 73.7890625,21.1250021 C73.3151043,21.9270834 72.6770832,22.565103 71.875,23.03906 C71.0729168,23.5130171 70.1979168,23.7499958 69.25,23.7499958 C68.3020832,23.7499958 67.4270832,23.5130171 66.625,23.03906 C65.8229168,22.565103 65.1848957,21.9270834 64.7109375,21.1250021 C64.2369793,20.3229208 64,19.4479229 64,18.5000083 C64,17.6432397 64.2005207,16.8320436 64.6015625,16.0664204 C65.0026043,15.3007972 65.5494793,14.6718925 66.2421875,14.1797061 C66.4609375,14.0338733 66.6888019,14.0247585 66.9257812,14.1523625 C67.1627606,14.2799665 67.28125,14.4713723 67.28125,14.7265798 L67.28125,17.6250104 C67.28125,17.9349054 67.3860676,18.1946704 67.5957031,18.4043054 C67.8053387,18.6139405 68.0651043,18.7187578 68.375,18.7187578 C68.6848957,18.7187578 68.9446613,18.6139405 69.1542969,18.4043054 C69.3639324,18.1946704 69.46875,17.9349054 69.46875,17.6250104 C69.46875,17.4427191 69.4049481,17.2330844 69.2773438,16.9961057 C69.2044269,16.8320436 69.0677082,16.576836 68.8671875,16.2304825 C68.4661457,15.5742341 68.1835938,15.0547041 68.0195312,14.6718925 C67.7643231,13.9791859 67.6640625,13.2955938 67.71875,12.6211161 C67.8098957,11.7825763 68.1380207,10.9258077 68.703125,10.0508097 C68.8125,9.86851837 68.9628906,9.76825847 69.1542969,9.75002921 C69.3457031,9.73179994 69.5188801,9.78648731 69.6738281,9.91409132 C69.8287762,10.0416953 69.90625,10.2057574 69.90625,10.4062776 Z M69.2499875,22.437499 C69.9609233,22.437499 70.6171717,22.259765 71.2187328,21.9042971 C71.8202939,21.5488292 72.2988083,21.0703147 72.6542762,20.4687537 C73.0097441,19.8671926 73.1874781,19.2109441 73.1874781,18.5000083 C73.1874781,17.880218 73.0781034,17.3060006 72.8593539,16.7773562 C72.6588337,16.3398572 72.376282,15.9023583 72.0116996,15.4648593 C71.7929502,15.1914225 71.4329248,14.8131683 70.9316241,14.3300964 C70.4303233,13.8470245 70.070298,13.4687703 69.8515485,13.1953335 C69.4869662,12.7760638 69.2135294,12.3567937 69.031238,11.937524 C68.8671759,12.5573143 68.8945196,13.1953335 69.1132691,13.8515819 C69.2408731,14.2343935 69.5143099,14.7812672 69.9335796,15.492203 C70.2252457,15.9661601 70.4166515,16.321628 70.507797,16.5586067 C70.6900884,16.9414183 70.7812338,17.2968862 70.7812338,17.6250104 C70.7812338,18.2812589 70.5442551,18.8463618 70.070298,19.3203189 C69.596341,19.794276 69.031238,20.0312547 68.3749896,20.0312547 C67.7187411,20.0312547 67.1536382,19.794276 66.6796811,19.3203189 C66.205724,18.8463618 65.9687453,18.2812589 65.9687453,17.6250104 L65.9687453,16.0937641 C65.7682251,16.403659 65.60872,16.7819136 65.4902308,17.228527 C65.3717417,17.6751404 65.3124969,18.0989675 65.3124969,18.5000083 C65.3124969,19.2109441 65.4902308,19.8671926 65.8456987,20.4687537 C66.2011666,21.0703147 66.6796811,21.5488292 67.2812422,21.9042971 C67.8828032,22.259765 68.5390517,22.437499 69.2499875,22.437499 Z",
      id: "icon---trending"
    }))))))));
  }

}
;// CONCATENATED MODULE: ./components/widgets/icons/gif_reactions_icon.tsx
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

class GifReactionsIcon extends react.PureComponent {
  render() {
    return /*#__PURE__*/react.createElement("span", this.props, /*#__PURE__*/react.createElement("svg", {
      className: "ic-svg ic-reactions-svg",
      width: "14px",
      height: "14px",
      viewBox: "0 0 14 14",
      version: "1.1"
    }, /*#__PURE__*/react.createElement("g", {
      id: "Finalized-Design",
      stroke: "none",
      fill: "inherit"
    }, /*#__PURE__*/react.createElement("g", {
      id: "GfyCat---Gycat-Tab",
      transform: "translate(-1348.000000, -620.000000)",
      fill: "inherit"
    }, /*#__PURE__*/react.createElement("g", {
      id: "modal---emojis",
      transform: "translate(1147.000000, 542.000000)"
    }, /*#__PURE__*/react.createElement("g", {
      id: "tabs---gfycat",
      transform: "translate(1.000000, 68.000000)"
    }, /*#__PURE__*/react.createElement("g", {
      id: "tab---category---deselected",
      transform: "translate(138.000000, 0.000000)"
    }, /*#__PURE__*/react.createElement("path", {
      d: "M62,16 L62,10 L68,10 L68,16 L62,16 Z M64,12 L64,14 L66,14 L66,12 L64,12 Z M70,24 L70,18 L76,18 L76,24 L70,24 Z M72,20 L72,22 L74,22 L74,20 L72,20 Z M70,10 L76,10 L76,16 L70,16 L70,10 Z M74,14 L74,12 L72,12 L72,14 L74,14 Z M62,24 L62,18 L68,18 L68,24 L62,24 Z M64,20 L64,22 L66,22 L66,20 L64,20 Z",
      id: "icon---categories"
    }))))))));
  }

}
;// CONCATENATED MODULE: ./components/gif_picker/components/Header/index.jsx
function Header_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.












function Header_mapStateToProps(state) {
  return {
    theme: (0,preferences/* getTheme */.gh)(state)
  };
}

const Header_mapDispatchToProps = {
  saveSearchBarText: saveSearchBarText,
  searchTextUpdate: searchTextUpdate
};
const Header_getStyle = (0,theme_utils/* makeStyleFromTheme */.$Y)(theme => {
  return {
    background: {
      backgroundColor: theme.centerChannelBg
    },
    header: {
      borderBottomColor: (0,theme_utils/* changeOpacity */.v5)(theme.centerChannelColor, 0.2)
    },
    icon: {
      fill: (0,theme_utils/* changeOpacity */.v5)(theme.centerChannelColor, 0.3)
    },
    iconActive: {
      fill: theme.centerChannelColor
    },
    iconHover: {
      fill: (0,theme_utils/* changeOpacity */.v5)(theme.centerChannelColor, 0.8)
    }
  };
});
class Header extends react.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hovering: ''
    };
  }

  render() {
    const style = Header_getStyle(this.props.theme);
    return /*#__PURE__*/react.createElement("header", {
      className: "header-container",
      style: style.background
    }, /*#__PURE__*/react.createElement(components_SearchBar, this.props), /*#__PURE__*/react.createElement("nav", {
      className: "nav-bar",
      style: style.header
    }, this.renderTabs(this.props, style)));
  }

  renderTabs(props, style) {
    const {
      appProps,
      onTrending,
      onCategories
    } = props;
    const {
      header
    } = appProps;
    return header.tabs.map((tab, index) => {
      let link;

      if (tab === constants.Tab.TRENDING) {
        link = this.renderTab('trending', onTrending, GifTrendingIcon, index, style);
      } else if (tab === constants.Tab.REACTIONS) {
        link = this.renderTab('reactions', onCategories, GifReactionsIcon, index, style);
      }

      return link;
    });
  }

  renderTab(name, callback, Icon, index, style) {
    var props = this.props;
    const {
      action
    } = props;

    function callbackWrapper() {
      props.searchTextUpdate('');
      props.saveSearchBarText('');
      callback();
    }

    return /*#__PURE__*/react.createElement("a", {
      onClick: callbackWrapper,
      onMouseOver: () => {
        this.setState({
          hovering: name
        });
      },
      onMouseOut: () => {
        this.setState({
          hovering: ''
        });
      },
      style: {
        cursor: 'pointer'
      },
      key: index
    }, /*#__PURE__*/react.createElement("div", {
      style: {
        paddingTop: '2px'
      }
    }, /*#__PURE__*/react.createElement(Icon, {
      style: (() => {
        if (this.state.hovering === name) {
          return style.iconHover;
        }

        return action === name ? style.iconActive : style.icon;
      })()
    })));
  }

}

Header_defineProperty(Header, "propTypes", {
  action: (prop_types_default()).string,
  appProps: (prop_types_default()).object,
  saveSearchBarText: (prop_types_default()).func,
  searchTextUpdate: (prop_types_default()).func,
  theme: (prop_types_default()).object.isRequired,
  defaultSearchText: (prop_types_default()).string,
  handleSearchTextChange: (prop_types_default()).func.isRequired
});

/* harmony default export */ const components_Header = ((0,es.connect)(Header_mapStateToProps, Header_mapDispatchToProps)(Header));
;// CONCATENATED MODULE: ./components/gif_picker/components/App/index.jsx
function App_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





const App_mapDispatchToProps = {
  saveAppProps: saveAppProps
};
class App extends react.PureComponent {
  constructor(props) {
    super(props);
    const {
      appProps
    } = this.props;
    this.props.saveAppProps(appProps);
  }

  render() {
    const {
      appProps,
      action,
      onCategories,
      onSearch,
      onTrending,
      children,
      defaultSearchText,
      handleSearchTextChange
    } = this.props;
    const appClassName = 'main-container ' + (appProps.appClassName || '');
    return /*#__PURE__*/react.createElement("div", {
      className: appClassName
    }, /*#__PURE__*/react.createElement(components_Header, {
      appProps: appProps,
      action: action,
      onCategories: onCategories,
      onSearch: onSearch,
      onTrending: onTrending,
      defaultSearchText: defaultSearchText,
      handleSearchTextChange: handleSearchTextChange
    }), /*#__PURE__*/react.createElement("div", {
      className: "component-container"
    }, children));
  }

}

App_defineProperty(App, "propTypes", {
  appProps: (prop_types_default()).object,
  action: (prop_types_default()).string,
  onCategories: (prop_types_default()).func,
  onSearch: (prop_types_default()).func,
  onTrending: (prop_types_default()).func,
  children: (prop_types_default()).object,
  saveAppProps: (prop_types_default()).func,
  authenticateSdk: (prop_types_default()).func,
  defaultSearchText: (prop_types_default()).string,
  handleSearchTextChange: (prop_types_default()).func.isRequired
});

/* harmony default export */ const components_App = ((0,es.connect)(null, App_mapDispatchToProps)(App));
// EXTERNAL MODULE: ./actions/telemetry_actions.jsx
var telemetry_actions = __webpack_require__(59925);
// EXTERNAL MODULE: ./utils/post_utils.ts
var post_utils = __webpack_require__(81735);
// EXTERNAL MODULE: ./components/gif_picker/components/InfiniteScroll/index.js
var InfiniteScroll = __webpack_require__(53066);
;// CONCATENATED MODULE: ./components/gif_picker/components/Categories/index.jsx







function Categories_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Categories_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Categories_ownKeys(Object(source), true).forEach(function (key) { Categories_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Categories_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Categories_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.









function Categories_mapStateToProps(state) {
  return Categories_objectSpread(Categories_objectSpread(Categories_objectSpread({}, state.entities.gifs.categories), state.entities.gifs.cache), {}, {
    appProps: state.entities.gifs.app,
    searchText: state.entities.gifs.search.searchText,
    searchBarText: state.entities.gifs.search.searchBarText,
    hasImageProxy: state.entities.general.config.HasImageProxy
  });
}

const Categories_mapDispatchToProps = {
  saveSearchBarText: saveSearchBarText,
  saveSearchScrollPosition: saveSearchScrollPosition,
  searchTextUpdate: searchTextUpdate,
  requestCategoriesList: requestCategoriesList,
  requestCategoriesListIfNeeded: requestCategoriesListIfNeeded
};
class Categories extends react.PureComponent {
  constructor() {
    super(...arguments);

    Categories_defineProperty(this, "sendImpressions", () => {
      const {
        tagsList
      } = this.props;
      const gfycats = tagsList.map(tag => {
        return {
          gfyId: tag.gfyId
        };
      });

      if (gfycats.length) {
        (0,telemetry_actions/* trackEvent */.L9)('gfycat', 'views', {
          context: 'category_list',
          count: gfycats.length
        });
      }
    });

    Categories_defineProperty(this, "filterTagsList", () => {
      const {
        searchBarText,
        tagsList
      } = this.props;
      const substr = searchBarText.toLowerCase().trim().split(/ +/).join(' ');
      return tagsList && tagsList.length ? tagsList.filter(tag => {
        if (!searchBarText || tag.tagName.indexOf(substr) !== -1) {
          return tag;
        }

        return '';
      }) : [];
    });

    Categories_defineProperty(this, "loadMore", () => {
      this.props.requestCategoriesList();
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.requestCategoriesListIfNeeded();
    this.sendImpressions();
  }

  componentWillUnmount() {
    this.props.saveSearchScrollPosition(0);
  }

  render() {
    const {
      hasMore,
      tagsList,
      gifs,
      onSearch,
      onTrending,
      hasImageProxy
    } = this.props;
    const content = tagsList && tagsList.length ? this.filterTagsList(tagsList).map((item, index) => {
      const {
        tagName,
        gfyId
      } = item;

      if (!gifs[gfyId]) {
        return null;
      }

      const gfyItem = gifs[gfyId];
      const {
        max1mbGif,
        avgColor
      } = gfyItem;
      const url = post_utils/* getImageSrc */.Q4(max1mbGif, hasImageProxy === 'true');
      const searchText = tagName.replace(/\s/g, '-');
      const backgroundImage = {
        backgroundImage: "url(".concat(url)
      };
      const backgroundColor = {
        backgroundColor: avgColor
      };
      const props = this.props;

      function callback() {
        props.searchTextUpdate(tagName);
        props.saveSearchBarText(tagName);

        if (searchText === 'trending') {
          onTrending();
        } else {
          onSearch();
        }
      }

      return /*#__PURE__*/react.createElement("a", {
        onClick: callback,
        key: index
      }, /*#__PURE__*/react.createElement("div", {
        className: "category-container"
      }, /*#__PURE__*/react.createElement("div", {
        className: "category",
        style: Categories_objectSpread(Categories_objectSpread({}, backgroundImage), backgroundColor)
      }, /*#__PURE__*/react.createElement("div", {
        className: "category-name"
      }, tagName))));
    }) : [];
    return content && content.length ? /*#__PURE__*/react.createElement("div", {
      className: "categories-container"
    }, /*#__PURE__*/react.createElement(InfiniteScroll/* default */.Z, {
      hasMore: hasMore,
      loadMore: this.loadMore,
      threshold: 1
    }, content)) : /*#__PURE__*/react.createElement("div", {
      className: "categories-container"
    });
  }

}

Categories_defineProperty(Categories, "propTypes", {
  appProps: (prop_types_default()).object,
  gifs: (prop_types_default()).object,
  hasMore: (prop_types_default()).bool,
  onSearch: (prop_types_default()).func,
  onTrending: (prop_types_default()).func,
  requestCategoriesList: (prop_types_default()).func,
  requestCategoriesListIfNeeded: (prop_types_default()).func,
  saveSearchBarText: (prop_types_default()).func,
  saveSearchScrollPosition: (prop_types_default()).func,
  searchTextUpdate: (prop_types_default()).func,
  searchBarText: (prop_types_default()).string,
  tagsList: (prop_types_default()).array,
  hasImageProxy: (prop_types_default()).string
});

/* harmony default export */ const components_Categories = ((0,es.connect)(Categories_mapStateToProps, Categories_mapDispatchToProps)(Categories));
// EXTERNAL MODULE: ./node_modules/lodash/throttle.js
var throttle = __webpack_require__(23493);
var throttle_default = /*#__PURE__*/__webpack_require__.n(throttle);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.parse-int.js
var es_parse_int = __webpack_require__(91058);
// EXTERNAL MODULE: ./components/no_results_indicator/no_results_indicator.tsx + 1 modules
var no_results_indicator = __webpack_require__(28292);
// EXTERNAL MODULE: ./components/no_results_indicator/types.ts
var types = __webpack_require__(13516);
;// CONCATENATED MODULE: ./components/gif_picker/components/SearchItem/index.jsx
function SearchItem_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function SearchItem_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SearchItem_ownKeys(Object(source), true).forEach(function (key) { SearchItem_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SearchItem_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SearchItem_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






function SearchItem_mapStateToProps(state) {
  return {
    hasImageProxy: state.entities.general.config.HasImageProxy
  };
}

class SearchItem extends react.PureComponent {
  render() {
    const {
      gfyItem,
      top,
      left,
      itemWidth,
      itemClickHandler
    } = this.props;
    const {
      width,
      height,
      max1mbGif,
      avgColor
    } = gfyItem;
    const {
      hasImageProxy
    } = this.props;
    const url = post_utils/* getImageSrc */.Q4(max1mbGif, hasImageProxy === 'true');
    const backgroundImage = {
      backgroundImage: "url(".concat(url, ")")
    };
    const backgroundColor = {
      backgroundColor: avgColor
    };
    const paddingBottom = {
      paddingBottom: itemWidth / width * height + 'px'
    };
    return /*#__PURE__*/react.createElement("div", {
      className: "search-item-wrapper",
      style: {
        top,
        left,
        width: itemWidth ? "".concat(itemWidth, "px") : ''
      }
    }, /*#__PURE__*/react.createElement("div", {
      className: "search-item",
      style: SearchItem_objectSpread(SearchItem_objectSpread(SearchItem_objectSpread({}, backgroundImage), backgroundColor), paddingBottom),
      onClick: () => itemClickHandler(gfyItem)
    }));
  }

}

SearchItem_defineProperty(SearchItem, "propTypes", {
  gfyItem: (prop_types_default()).object,
  top: (prop_types_default()).string,
  left: (prop_types_default()).string,
  itemWidth: (prop_types_default()).number,
  itemClickHandler: (prop_types_default()).func,
  hasImageProxy: (prop_types_default()).string
});

/* harmony default export */ const components_SearchItem = ((0,es.connect)(SearchItem_mapStateToProps)(SearchItem));
;// CONCATENATED MODULE: ./components/gif_picker/components/SearchGrid/SearchGrid.jsx





function SearchGrid_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function SearchGrid_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { SearchGrid_ownKeys(Object(source), true).forEach(function (key) { SearchGrid_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { SearchGrid_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SearchGrid_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.










const ITEMS_PADDING = 8;
const NUMBER_OF_COLUMNS_PORTRAIT = 2;
const NUMBER_OF_COLUMNS_LANDSCAPE = 2;
const WEBKIT_SCROLLBAR_WIDTH = 8;

function SearchGrid_mapStateToProps(state) {
  return SearchGrid_objectSpread(SearchGrid_objectSpread(SearchGrid_objectSpread({}, state.entities.gifs.cache), state.entities.gifs.search), {}, {
    appProps: state.entities.gifs.app
  });
}

const SearchGrid_mapDispatchToProps = {
  saveSearchScrollPosition: saveSearchScrollPosition
};
class SearchGrid extends react.PureComponent {
  constructor(props) {
    super(props);

    SearchGrid_defineProperty(this, "setNumberOfColumns", () => {
      if (window.matchMedia('(orientation: portrait)').matches) {
        this.numberOfColumns = NUMBER_OF_COLUMNS_PORTRAIT;
      } else {
        this.numberOfColumns = NUMBER_OF_COLUMNS_LANDSCAPE;
      }
    });

    SearchGrid_defineProperty(this, "itemClickHandler", gfyItem => {
      const {
        keyword,
        handleItemClick
      } = this.props;
      this.props.saveSearchScrollPosition(this.scrollPosition);
      (0,telemetry_actions/* trackEvent */.L9)('gfycat', 'shares', {
        gfyid: gfyItem.gfyId,
        keyword
      });
      handleItemClick(gfyItem);
    });

    SearchGrid_defineProperty(this, "minHeightColumnIndex", () => {
      return this.columnsHeights.indexOf(Math.min(...this.columnsHeights));
    });

    SearchGrid_defineProperty(this, "maxHeightColumnIndex", () => {
      return this.columnsHeights.indexOf(Math.max(...this.columnsHeights));
    });

    SearchGrid_defineProperty(this, "maxColumnHeight", () => {
      return Math.max(...this.columnsHeights);
    });

    SearchGrid_defineProperty(this, "resizeHandler", () => {
      if (this.state.containerWidth !== this.container.offsetWidth - WEBKIT_SCROLLBAR_WIDTH) {
        this.setNumberOfColumns();
        this.setState(SearchGrid_objectSpread(SearchGrid_objectSpread({}, this.state), {}, {
          containerWidth: this.container.offsetWidth - WEBKIT_SCROLLBAR_WIDTH
        }));
        this.columnsHeights = Array(this.numberOfColumns).fill(0);
      }
    });

    SearchGrid_defineProperty(this, "scrollHandler", () => {
      this.scrollPosition = window.scrollY;
    });

    this.state = {
      containerWidth: null
    };
    this.scrollPosition = this.props.scrollPosition;
    this.setNumberOfColumns();
    /**
     * Inital values for columns heights
     */

    this.columnsHeights = Array(this.numberOfColumns).fill(0);
    /**
     * Items padding value
     */

    this.padding = ITEMS_PADDING;
  }

  componentDidMount() {
    this.container = document.getElementById('search-grid-container'); // eslint-disable-next-line react/no-did-mount-set-state

    this.setState(SearchGrid_objectSpread(SearchGrid_objectSpread({}, this.state), {}, {
      containerWidth: this.container.offsetWidth - WEBKIT_SCROLLBAR_WIDTH
    }));
    window.addEventListener('resize', this.resizeHandler);
    window.addEventListener('scroll', this.scrollHandler);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.keyword !== this.props.keyword) {
      window.scrollTo(0, 0);
    }
  }

  componentWillUnmount() {
    const {
      keyword
    } = this.props;

    if (keyword !== 'trending') {
      this.props.saveSearchScrollPosition(this.scrollPosition);
    }

    window.removeEventListener('resize', this.resizeHandler);
    window.removeEventListener('scroll', this.scrollHandler);
  }

  render() {
    const {
      containerClassName,
      gifs,
      keyword,
      resultsByTerm,
      scrollPosition,
      loadMore
    } = this.props;
    const {
      containerWidth
    } = this.state;
    const {
      moreRemaining,
      items = [],
      isEmpty = items.length === 0,
      isFetching
    } = resultsByTerm[keyword] ? resultsByTerm[keyword] : {};
    /**
     * Columns 'left' values
     */

    const columnWidth = parseInt(containerWidth / this.numberOfColumns, 10);
    const leftPosition = Array(this.numberOfColumns).fill(0).map((item, index) => this.padding + (index * columnWidth - index * (this.padding / 2)));
    this.columnsHeights = Array(this.numberOfColumns).fill(this.padding); // Item width in %
    //const itemWidth = this.numberOfColumns === NUMBER_OF_COLUMNS_PORTRAIT ? 100 / NUMBER_OF_COLUMNS_PORTRAIT : 100 / this.numberOfColumns;

    const itemWidth = 140;
    const searchItems = containerWidth && items.length ? items.map((item, index) => {
      const gfyItem = gifs[item];
      const {
        gfyId
      } = gfyItem; // Position calculation

      const colIndex = this.minHeightColumnIndex();
      const top = this.columnsHeights[colIndex] + 'px';
      const left = leftPosition[colIndex] + 'px';
      const itemHeight = itemWidth / gfyItem.width * gfyItem.height + this.padding;
      this.columnsHeights[colIndex] += itemHeight;
      return /*#__PURE__*/react.createElement(components_SearchItem, {
        gfyItem: gfyItem,
        top: top,
        left: left,
        itemWidth: itemWidth,
        itemClickHandler: this.itemClickHandler,
        key: "".concat(index, "-").concat(gfyId)
      });
    }) : null;
    this.containerHeight = this.maxColumnHeight();
    const content = searchItems ? /*#__PURE__*/react.createElement(InfiniteScroll/* default */.Z, {
      className: "search-grid-infinite-scroll",
      pageStart: 0,
      loadMore: loadMore,
      initialLoad: false,
      hasMore: moreRemaining,
      threshold: 1,
      containerHeight: this.containerHeight,
      scrollPosition: scrollPosition,
      useWindow: false
    }, searchItems) : null;
    const emptySearch = !isFetching && isEmpty ? /*#__PURE__*/react.createElement(no_results_indicator/* default */.Z, {
      variant: types/* NoResultsVariant.ChannelSearch */.U.ChannelSearch,
      titleValues: {
        channelName: "\"".concat(keyword, "\"")
      }
    }) : null;
    return /*#__PURE__*/react.createElement("div", {
      id: "search-grid-container",
      className: "search-grid-container ".concat(containerClassName)
    }, content, emptySearch);
  }

}

SearchGrid_defineProperty(SearchGrid, "propTypes", {
  appProps: (prop_types_default()).object,
  gifs: (prop_types_default()).object,
  resultsByTerm: (prop_types_default()).object,
  containerClassName: (prop_types_default()).string,
  keyword: (prop_types_default()).string,
  // searchText, tagName
  handleItemClick: (prop_types_default()).func,
  loadMore: (prop_types_default()).func,
  numberOfColumns: (prop_types_default()).number,
  scrollPosition: (prop_types_default()).number,
  saveSearchScrollPosition: (prop_types_default()).func
});

/* harmony default export */ const SearchGrid_SearchGrid = ((0,es.connect)(SearchGrid_mapStateToProps, SearchGrid_mapDispatchToProps)(SearchGrid));
;// CONCATENATED MODULE: ./components/gif_picker/components/SearchGrid/index.js



function components_SearchGrid_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function components_SearchGrid_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { components_SearchGrid_ownKeys(Object(source), true).forEach(function (key) { components_SearchGrid_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { components_SearchGrid_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function components_SearchGrid_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.




function components_SearchGrid_mapStateToProps(state) {
  return components_SearchGrid_objectSpread(components_SearchGrid_objectSpread(components_SearchGrid_objectSpread({}, state.entities.gifs.cache), state.entities.gifs.search), {}, {
    appProps: state.entities.gifs.app
  });
}

function components_SearchGrid_mapDispatchToProps() {
  return {
    saveSearchScrollPosition: saveSearchScrollPosition
  };
}

/* harmony default export */ const components_SearchGrid = ((0,es.connect)(components_SearchGrid_mapStateToProps, components_SearchGrid_mapDispatchToProps)(SearchGrid_SearchGrid));
;// CONCATENATED MODULE: ./components/gif_picker/components/Search/index.jsx






function Search_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function Search_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Search_ownKeys(Object(source), true).forEach(function (key) { Search_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Search_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Search_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





const GIF_SEARCH_THROTTLE_TIME_MS = 1000;

function Search_mapStateToProps(state) {
  return Search_objectSpread({}, state.entities.gifs.search);
}

const Search_mapDispatchToProps = {
  searchGfycat: searchGfycat,
  searchIfNeededInitial: searchIfNeededInitial
};
class Search extends react.PureComponent {
  constructor() {
    super(...arguments);

    Search_defineProperty(this, "throttledSearchGif", throttle_default()(searchText => this.props.searchIfNeededInitial(searchText.split('-').join(' ')), GIF_SEARCH_THROTTLE_TIME_MS));

    Search_defineProperty(this, "loadMore", () => {
      const {
        searchText
      } = this.props;
      this.props.searchGfycat({
        searchText
      });
    });
  }

  componentDidMount() {
    const {
      searchText
    } = this.props;
    this.props.searchIfNeededInitial(searchText.split('-').join(' '));
  }

  componentDidUpdate(prevProps) {
    const {
      searchText
    } = this.props;

    if (prevProps.searchText !== searchText) {
      this.throttledSearchGif(searchText);
    }
  }

  render() {
    const {
      handleItemClick,
      searchText,
      onCategories
    } = this.props;
    return /*#__PURE__*/react.createElement(components_SearchGrid, {
      keyword: searchText,
      handleItemClick: handleItemClick,
      onCategories: onCategories,
      loadMore: this.loadMore
    });
  }

}

Search_defineProperty(Search, "propTypes", {
  handleItemClick: (prop_types_default()).func,
  onCategories: (prop_types_default()).func,
  searchText: (prop_types_default()).string,
  searchIfNeededInitial: (prop_types_default()).func,
  searchGfycat: (prop_types_default()).func
});

/* harmony default export */ const components_Search = ((0,es.connect)(Search_mapStateToProps, Search_mapDispatchToProps)(Search));
;// CONCATENATED MODULE: ./components/gif_picker/components/Trending/index.jsx


function Trending_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.





const Trending_mapDispatchToProps = {
  searchCategory: searchCategory,
  searchIfNeededInitial: searchIfNeededInitial,
  saveSearchScrollPosition: saveSearchScrollPosition
};
class Trending extends react.PureComponent {
  constructor() {
    super(...arguments);

    Trending_defineProperty(this, "loadMore", () => {
      this.props.searchCategory({
        tagName: 'trending'
      });
    });
  }

  componentDidMount() {
    this.props.searchIfNeededInitial('trending');
  }

  componentWillUnmount() {
    this.props.saveSearchScrollPosition(0);
  }

  render() {
    const {
      handleItemClick,
      onCategories
    } = this.props;
    return /*#__PURE__*/react.createElement(components_SearchGrid, {
      keyword: "trending",
      handleItemClick: handleItemClick,
      onCategories: onCategories,
      loadMore: this.loadMore
    });
  }

}

Trending_defineProperty(Trending, "propTypes", {
  handleItemClick: (prop_types_default()).func,
  onCategories: (prop_types_default()).func,
  searchCategory: (prop_types_default()).func,
  searchIfNeededInitial: (prop_types_default()).func,
  saveSearchScrollPosition: (prop_types_default()).func
});

/* harmony default export */ const components_Trending = ((0,es.connect)(null, Trending_mapDispatchToProps)(Trending));
;// CONCATENATED MODULE: ./components/gif_picker/gif_picker.jsx



function gif_picker_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.







const appProps = {
  appName: constants.appName.mattermost,
  basePath: '/mattermost',
  itemTapType: constants.ItemTapAction.SHARE,
  appClassName: 'gfycat',
  shareEvent: 'shareMattermost',
  appId: 'mattermostwebviews',
  enableHistory: true,
  header: {
    tabs: [constants.Tab.TRENDING, constants.Tab.REACTIONS],
    displayText: false
  }
};
class GifPicker extends react.PureComponent {
  constructor(props) {
    super(props);

    gif_picker_defineProperty(this, "handleTrending", () => {
      this.setState({
        action: 'trending'
      });
    });

    gif_picker_defineProperty(this, "handleCategories", () => {
      this.setState({
        action: 'reactions'
      });
    });

    gif_picker_defineProperty(this, "handleSearch", () => {
      this.setState({
        action: 'search'
      });
    });

    gif_picker_defineProperty(this, "handleItemClick", gif => {
      this.props.onGifClick('![' + gif.title.replace(/]|\[/g, '\\$&') + '](' + gif.max5mbGif + ')');
    });

    const action = props.defaultSearchText ? 'search' : 'trending';
    this.state = {
      action
    };
  }

  render() {
    const {
      action
    } = this.state;
    let component;

    switch (action) {
      case 'reactions':
        component = /*#__PURE__*/react.createElement(components_Categories, {
          appProps: appProps,
          onTrending: this.handleTrending,
          onSearch: this.handleSearch
        });
        break;

      case 'search':
        component = /*#__PURE__*/react.createElement(components_Search, {
          appProps: appProps,
          onCategories: this.handleCategories,
          handleItemClick: this.handleItemClick
        });
        break;

      case 'trending':
        component = /*#__PURE__*/react.createElement(components_Trending, {
          appProps: appProps,
          onCategories: this.handleCategories,
          handleItemClick: this.handleItemClick
        });
        break;
    }

    return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement(components_App, {
      appProps: appProps,
      action: action,
      onTrending: this.handleTrending,
      onCategories: this.handleCategories,
      onSearch: this.handleSearch,
      defaultSearchText: this.props.defaultSearchText,
      handleSearchTextChange: this.props.handleSearchTextChange
    }, component));
  }

}

gif_picker_defineProperty(GifPicker, "propTypes", {
  onGifClick: (prop_types_default()).func.isRequired,
  defaultSearchText: (prop_types_default()).string,
  handleSearchTextChange: (prop_types_default()).func.isRequired
});

/***/ }),

/***/ 62540:
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/assets/",t(t.s=6)}([function(e,t,r){"use strict";var n=String.prototype.replace,o=/%20/g;e.exports={default:"RFC3986",formatters:{RFC1738:function(e){return n.call(e,o,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"}},function(e,t,r){"use strict";var n=Object.prototype.hasOwnProperty,o=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),i=function(e){for(var t;e.length;){var r=e.pop();if(t=r.obj[r.prop],Array.isArray(t)){for(var n=[],o=0;o<t.length;++o)void 0!==t[o]&&n.push(t[o]);r.obj[r.prop]=n}}return t};t.arrayToObject=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(r[n]=e[n]);return r},t.merge=function(e,r,o){if(!r)return e;if("object"!=typeof r){if(Array.isArray(e))e.push(r);else{if("object"!=typeof e)return[e,r];(o.plainObjects||o.allowPrototypes||!n.call(Object.prototype,r))&&(e[r]=!0)}return e}if("object"!=typeof e)return[e].concat(r);var i=e;return Array.isArray(e)&&!Array.isArray(r)&&(i=t.arrayToObject(e,o)),Array.isArray(e)&&Array.isArray(r)?(r.forEach(function(r,i){n.call(e,i)?e[i]&&"object"==typeof e[i]?e[i]=t.merge(e[i],r,o):e.push(r):e[i]=r}),e):Object.keys(r).reduce(function(e,i){var a=r[i];return n.call(e,i)?e[i]=t.merge(e[i],a,o):e[i]=a,e},i)},t.assign=function(e,t){return Object.keys(t).reduce(function(e,r){return e[r]=t[r],e},e)},t.decode=function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},t.encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),r="",n=0;n<t.length;++n){var i=t.charCodeAt(n);45===i||46===i||95===i||126===i||i>=48&&i<=57||i>=65&&i<=90||i>=97&&i<=122?r+=t.charAt(n):i<128?r+=o[i]:i<2048?r+=o[192|i>>6]+o[128|63&i]:i<55296||i>=57344?r+=o[224|i>>12]+o[128|i>>6&63]+o[128|63&i]:(n+=1,i=65536+((1023&i)<<10|1023&t.charCodeAt(n)),r+=o[240|i>>18]+o[128|i>>12&63]+o[128|i>>6&63]+o[128|63&i])}return r},t.compact=function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],n=0;n<t.length;++n)for(var o=t[n],a=o.obj[o.prop],c=Object.keys(a),s=0;s<c.length;++s){var u=c[s],l=a[u];"object"==typeof l&&null!==l&&-1===r.indexOf(l)&&(t.push({obj:a,prop:u}),r.push(l))}return i(t)},t.isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},t.isBuffer=function(e){return null!==e&&void 0!==e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))}},function(e,t,r){"use strict";var n=r(5),o=r(4),i=r(0);e.exports={formats:i,parse:o,stringify:n}},function(e,t){t.request=function(e,t,r){function n(e){clearTimeout(a),e=e||new Error("API request failed"),r(e)}function o(e){if(clearTimeout(a),c.status>=400)return r(c.status);var n=c.response;try{n=JSON.parse(n),t(n)}catch(e){r(e)}}var i=e.timeout||3e4,a=setTimeout(function(){c.abort(),r(new Error("API request exceeded timeout of",i))},i),c=new XMLHttpRequest;c.addEventListener("error",n),c.addEventListener("abort",n),c.addEventListener("load",o),c.open(e.request.method,e.request.url,!0);var s=e.request.headers||null;s&&Object.keys(s).forEach(function(e){c.setRequestHeader(e,s[e])});var u=JSON.stringify(e.request.payload)||null;u?(c.setRequestHeader("Content-Type","application/json"),c.send(u)):c.send()}},function(e,t,r){"use strict";var n=r(1),o=Object.prototype.hasOwnProperty,i={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:n.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},a=function(e,t){for(var r={},n=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,a=t.parameterLimit===1/0?void 0:t.parameterLimit,c=n.split(t.delimiter,a),s=0;s<c.length;++s){var u,l,f=c[s],d=f.indexOf("]="),p=-1===d?f.indexOf("="):d+1;-1===p?(u=t.decoder(f,i.decoder),l=t.strictNullHandling?null:""):(u=t.decoder(f.slice(0,p),i.decoder),l=t.decoder(f.slice(p+1),i.decoder)),o.call(r,u)?r[u]=[].concat(r[u]).concat(l):r[u]=l}return r},c=function(e,t,r){for(var n=t,o=e.length-1;o>=0;--o){var i,a=e[o];if("[]"===a)i=[],i=i.concat(n);else{i=r.plainObjects?Object.create(null):{};var c="["===a.charAt(0)&&"]"===a.charAt(a.length-1)?a.slice(1,-1):a,s=parseInt(c,10);!isNaN(s)&&a!==c&&String(s)===c&&s>=0&&r.parseArrays&&s<=r.arrayLimit?(i=[],i[s]=n):i[c]=n}n=i}return n},s=function(e,t,r){if(e){var n=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,i=/(\[[^[\]]*])/,a=/(\[[^[\]]*])/g,s=i.exec(n),u=s?n.slice(0,s.index):n,l=[];if(u){if(!r.plainObjects&&o.call(Object.prototype,u)&&!r.allowPrototypes)return;l.push(u)}for(var f=0;null!==(s=a.exec(n))&&f<r.depth;){if(f+=1,!r.plainObjects&&o.call(Object.prototype,s[1].slice(1,-1))&&!r.allowPrototypes)return;l.push(s[1])}return s&&l.push("["+n.slice(s.index)+"]"),c(l,t,r)}};e.exports=function(e,t){var r=t?n.assign({},t):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"==typeof r.delimiter||n.isRegExp(r.delimiter)?r.delimiter:i.delimiter,r.depth="number"==typeof r.depth?r.depth:i.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:i.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"==typeof r.decoder?r.decoder:i.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:i.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:i.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:i.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:i.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:i.strictNullHandling,""===e||null===e||void 0===e)return r.plainObjects?Object.create(null):{};for(var o="string"==typeof e?a(e,r):e,c=r.plainObjects?Object.create(null):{},u=Object.keys(o),l=0;l<u.length;++l){var f=u[l],d=s(f,o[f],r);c=n.merge(c,d,r)}return n.compact(c)}},function(e,t,r){"use strict";var n=r(1),o=r(0),i={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},a=Date.prototype.toISOString,c={delimiter:"&",encode:!0,encoder:n.encode,encodeValuesOnly:!1,serializeDate:function(e){return a.call(e)},skipNulls:!1,strictNullHandling:!1},s=function e(t,r,o,i,a,s,u,l,f,d,p,y){var h=t;if("function"==typeof u)h=u(r,h);else if(h instanceof Date)h=d(h);else if(null===h){if(i)return s&&!y?s(r,c.encoder):r;h=""}if("string"==typeof h||"number"==typeof h||"boolean"==typeof h||n.isBuffer(h)){if(s){return[p(y?r:s(r,c.encoder))+"="+p(s(h,c.encoder))]}return[p(r)+"="+p(String(h))]}var m=[];if(void 0===h)return m;var g;if(Array.isArray(u))g=u;else{var v=Object.keys(h);g=l?v.sort(l):v}for(var b=0;b<g.length;++b){var j=g[b];a&&null===h[j]||(m=Array.isArray(h)?m.concat(e(h[j],o(r,j),o,i,a,s,u,l,f,d,p,y)):m.concat(e(h[j],r+(f?"."+j:"["+j+"]"),o,i,a,s,u,l,f,d,p,y)))}return m};e.exports=function(e,t){var r=e,a=t?n.assign({},t):{};if(null!==a.encoder&&void 0!==a.encoder&&"function"!=typeof a.encoder)throw new TypeError("Encoder has to be a function.");var u=void 0===a.delimiter?c.delimiter:a.delimiter,l="boolean"==typeof a.strictNullHandling?a.strictNullHandling:c.strictNullHandling,f="boolean"==typeof a.skipNulls?a.skipNulls:c.skipNulls,d="boolean"==typeof a.encode?a.encode:c.encode,p="function"==typeof a.encoder?a.encoder:c.encoder,y="function"==typeof a.sort?a.sort:null,h=void 0!==a.allowDots&&a.allowDots,m="function"==typeof a.serializeDate?a.serializeDate:c.serializeDate,g="boolean"==typeof a.encodeValuesOnly?a.encodeValuesOnly:c.encodeValuesOnly;if(void 0===a.format)a.format=o.default;else if(!Object.prototype.hasOwnProperty.call(o.formatters,a.format))throw new TypeError("Unknown format option provided.");var v,b,j=o.formatters[a.format];"function"==typeof a.filter?(b=a.filter,r=b("",r)):Array.isArray(a.filter)&&(b=a.filter,v=b);var _=[];if("object"!=typeof r||null===r)return"";var O;O=a.arrayFormat in i?a.arrayFormat:"indices"in a?a.indices?"indices":"repeat":"indices";var w=i[O];v||(v=Object.keys(r)),y&&v.sort(y);for(var q=0;q<v.length;++q){var P=v[q];f&&null===r[P]||(_=_.concat(s(r[P],P,w,l,f,d?p:null,b,y,h,m,j,g)))}var x=_.join(u),A=!0===a.addQueryPrefix?"?":"";return x.length>0?A+x:""}},function(e,t,r){function n(e,t){if(t)return t(e);if(c)return Promise.reject(e);throw new Error(e)}var o=r(2),i=r(3),a="/v1",c="undefined"!=typeof Promise,s=function(e){if("object"==typeof e&&e.hasOwnProperty("client_id")&&e.hasOwnProperty("client_secret"))this.client_id=e.client_id,this.client_secret=e.client_secret,this.timeout=e.timeout||3e4;else{if(void 0!==e&&e)throw new Error("Please provide a valid options object with client_id and client_secret.");console.error("Although some of our API endpoints can be used without an API key, in order to get the best experience, we strongly recommend that you obtain an API key and initialize this SDK with the provided client_id and client_secret. Get your API key today by visiting https://developers.gfycat.com/signup"),a="/v1test"}this.apiUrl="https://api.gfycat.com"+a,this.retryLimit=2};s.prototype={authenticate:function(e,t){if(e||(e={}),!(this.client_id||this.client_secret||e.client_id||e.client_secret))return n("Please provide client_id and client_secret in options",t);var e={api:"/oauth",endpoint:"/token",method:"POST",payload:{client_id:e.client_id||this.client_id,client_secret:e.client_secret||this.client_secret,grant_type:e.grant_type||"client_credentials"}},r=this;return t?this._request(e,function(e,n){e?t(e):(r._setToken(n),t(null,n))}):this._request(e).then(function(e){r._setToken(e),Promise.resolve(e)}).catch(function(e){Promise.reject(e)})},getCategories:function(e,t){return e||(e={}),this._request({api:"/reactions",endpoint:"/populated",method:"GET",query:{gfyCount:e.gfyCount||1,count:e.count||null,cursor:e.cursor||null,locale:e.locale||null}},t)},getTrendingCategories:function(e,t){return e||(e={}),this._request({api:"/reactions",endpoint:"/populated",method:"GET",query:{gfyCount:e.gfyCount||1,cursor:e.cursor||null,tagName:e.tagName||"trending"}},t)},getTrending:function(e,t){return e||(e={}),this._request({api:"/gfycats",endpoint:"/trending",method:"GET",query:{count:e.count||100,cursor:e.cursor||null,tagName:e.tagName||null}},t)},getTrendingTags:function(e,t){return e||(e={}),this._request({api:"/tags",endpoint:"/trending",method:"GET"},t)},getTrendingTagsPopulated:function(e,t){return e||(e={}),this._request({api:"/tags",endpoint:"/trending/populated",method:"GET",query:{count:e.count||100,cursor:e.cursor||null,gfyCount:e.gfyCount||1}},t)},search:function(e,t){return this._request({api:"/gfycats",endpoint:"/search",method:"GET",query:{search_text:e.search_text,count:e.count||100,start:e.start||null,cursor:e.cursor||null}},t)},searchById:function(e,t){return this._request({api:"/gfycats",endpoint:"/"+e.id,method:"GET"},t)},getRelatedContent:function(e,t){return this._request({api:"/gfycats",endpoint:"/"+e.id+"/related",method:"GET",query:{cursor:e.cursor,count:e.count,from:e.from}},t)},artifacts:function(e,t){return this._request({api:"/gifartifacts",endpoint:"",headers:{"Content-Type":"application/x-www-form-urlencoded"},method:"POST",payload:{uploadKey:e.uploadKey,tags:e.tags}},t)},stickers:function(e,t){return this._request({api:"/stickers",endpoint:e.search_text?"/search":"",method:"GET",query:{cursor:e.cursor,count:e.count,search_text:e.search_text}})},_request:function(e,t){if(!t&&!c)throw new Error("Callback must be provided if promises are unavailable");if(void 0===e||!e)return n("Please provide valid options object",t);var r=e.counter||0;if(r>=this.retryLimit){if(!t)return Promise.reject("Retry limit reached");n("Retry limit reached",t)}(this.access_token?"Bearer "+this.access_token:null)&&(void 0===e.headers&&(e.headers={}),e.headers.Authorization=this.access_token);var a="";if("object"==typeof e.query&&Object.keys(e.query).length){for(var s in e.query)null==e.query[s]&&delete e.query[s];a="?"+o.stringify(e.query)}var u={request:{headers:e.headers||null,method:e.method,payload:e.payload||null,url:this.apiUrl+e.api+e.endpoint+a},timeout:e.timeout||this.timeout},l=this;if(!t)return new Promise(function(e,t){i.request(u,e,t)}).then(function(e){return Promise.resolve(e)}).catch(function(t){return 401===t&&"/oauth"!==e.api?l.authenticate({}).then(function(t){return e.counter=r+1,l._request(e)}).catch(function(e){return Promise.reject(e)}):Promise.reject(t)});var f=function(e){t(null,e)},d=function(n){401===n&&"/oauth"!==e.api?l.authenticate({},function(n,o){if(!n)return e.counter=r+1,l._request(e,t);t(n)}):t(n)};i.request(u,f,d)},_setToken:function(e){this.access_token=e.access_token,this.token_type=e.token_type}},e.exports=s}])});

/***/ })

}]);
//# sourceMappingURL=789.aa6888dbbf94ca690449.js.map