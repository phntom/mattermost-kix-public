"use strict";
(self["webpackChunk_mattermost_webapp"] = self["webpackChunk_mattermost_webapp"] || []).push([[269],{

/***/ 78269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14494);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(97779);
/* harmony import */ var mattermost_redux_actions_teams__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92743);
/* harmony import */ var mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33383);
/* harmony import */ var _preparing_workspace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1191);
// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.






function mapDispatchToProps(dispatch) {
  return {
    actions: (0,redux__WEBPACK_IMPORTED_MODULE_4__.bindActionCreators)({
      createTeam: mattermost_redux_actions_teams__WEBPACK_IMPORTED_MODULE_1__/* .createTeam */ .Cm,
      getProfiles: mattermost_redux_actions_users__WEBPACK_IMPORTED_MODULE_2__/* .getProfiles */ .cp,
      checkIfTeamExists: mattermost_redux_actions_teams__WEBPACK_IMPORTED_MODULE_1__/* .checkIfTeamExists */ .iw
    }, dispatch)
  };
}

const mapStateToProps = () => ({});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(mapStateToProps, mapDispatchToProps)(_preparing_workspace__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z));

/***/ })

}]);
//# sourceMappingURL=269.52bb452a3fae7a90d420.js.map