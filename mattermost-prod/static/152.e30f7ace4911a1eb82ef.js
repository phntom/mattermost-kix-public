"use strict";
(self["webpackChunk_mattermost_webapp"] = self["webpackChunk_mattermost_webapp"] || []).push([[152],{

/***/ 78152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DndCustomTimePicker)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(45697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39714);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(91058);
/* harmony import */ var core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_parse_int_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74916);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(23123);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(67294);
/* harmony import */ var react_intl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(44012);
/* harmony import */ var react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86733);
/* harmony import */ var components_generic_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11381);
/* harmony import */ var utils_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(66788);
/* harmony import */ var components_widgets_menu_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(87760);
/* harmony import */ var components_widgets_menu_menu_wrapper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38122);
/* harmony import */ var utils_datetime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(85175);
/* harmony import */ var utils_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(15883);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.










class DndCustomTimePicker extends react__WEBPACK_IMPORTED_MODULE_4__.PureComponent {
  constructor(props) {
    super(props);

    _defineProperty(this, "formatDate", date => {
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const day = date.getDate().toString().padStart(2, '0');
      const year = date.getFullYear().toString();
      return [year, month, day].join('-');
    });

    _defineProperty(this, "getText", () => {
      const modalHeaderText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        id: "dnd_custom_time_picker_modal.defaultMsg",
        defaultMessage: "Disable notifications until"
      });
      const confirmButtonText = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
        id: "dnd_custom_time_picker_modal.submitButton",
        defaultMessage: "Disable Notifications"
      });
      return {
        modalHeaderText,
        confirmButtonText
      };
    });

    _defineProperty(this, "handleConfirm", () => {
      const hours = parseInt(this.state.selectedTime.split(':')[0], 10);
      const minutes = parseInt(this.state.selectedTime.split(':')[1], 10);
      const endTime = new Date(this.state.selectedDate);
      endTime.setHours(hours, minutes);

      if (endTime < new Date()) {
        return;
      }

      this.props.actions.setStatus({
        user_id: this.props.userId,
        status: utils_constants__WEBPACK_IMPORTED_MODULE_7__/* .UserStatuses.DND */ .gg.DND,
        dnd_end_time: (0,utils_datetime__WEBPACK_IMPORTED_MODULE_10__/* .toUTCUnix */ .J5)(endTime),
        manual: true,
        last_activity_at: (0,utils_datetime__WEBPACK_IMPORTED_MODULE_10__/* .toUTCUnix */ .J5)(this.props.currentDate)
      });
    });

    _defineProperty(this, "handleDaySelection", day => {
      this.setState(_objectSpread({
        selectedDate: day
      }, this.makeTimeMenuList(day)));
    });

    _defineProperty(this, "makeTimeMenuList", date => {
      const timeMenuItems = [];
      let h = 0;
      let m = 0;
      const curr = this.props.currentDate;

      if (this.formatDate(curr) === this.formatDate(date)) {
        h = curr.getHours();
        m = curr.getMinutes();

        if (m > 20) {
          h++;
          m = 0;
        } else {
          m = 30;
        }
      }

      for (let i = h; i < 24; i++) {
        for (let j = m / 30; j < 2; j++) {
          const t = i.toString().padStart(2, '0') + ':' + (j * 30).toString().padStart(2, '0');
          timeMenuItems.push(t);
        }
      }

      return {
        timeMenuList: timeMenuItems,
        selectedTime: timeMenuItems[0]
      };
    });

    const {
      currentDate
    } = this.props;
    const selectedDate = new Date(currentDate); // if current time is > 23:20 then we will set date to tomorrow and show all times

    if (currentDate.getHours() === 23 && currentDate.getMinutes() > 20) {
      selectedDate.setDate(currentDate.getDate() + 1);
    }

    this.state = _objectSpread({
      selectedDate,
      dayPickerStartDate: selectedDate
    }, this.makeTimeMenuList(selectedDate));
  }

  render() {
    const {
      modalHeaderText,
      confirmButtonText
    } = this.getText();
    const {
      timeMenuList,
      selectedTime,
      selectedDate,
      dayPickerStartDate
    } = this.state;
    const timeMenuItems = timeMenuList.map(time => {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(components_widgets_menu_menu__WEBPACK_IMPORTED_MODULE_8__/* ["default"].ItemAction */ .Z.ItemAction, {
        id: "dndTime_dropdown_".concat(time),
        key: time,
        text: time,
        ariaLabel: "".concat(time, " hours"),
        onClick: () => {
          this.setState({
            selectedTime: time
          });
        }
      }, time);
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(components_generic_modal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
      ariaLabel: (0,utils_utils__WEBPACK_IMPORTED_MODULE_11__/* .localizeMessage */ ._u)('dnd_custom_time_picker_modal.defaultMsg', 'Disable notifications until'),
      onExited: this.props.onExited,
      modalHeaderText: modalHeaderText,
      confirmButtonText: confirmButtonText,
      handleConfirm: this.handleConfirm,
      handleEnterKeyPress: this.handleConfirm,
      id: "dndCustomTimePickerModal",
      className: 'DndModal modal-overflow'
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "DndModal__content"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "DndModal__input DndModal__input--no-border"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "DndModal__input__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
      id: "dnd_custom_time_picker_modal.date",
      defaultMessage: "Date"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("i", {
      className: "icon icon--no-spacing icon-calendar-outline icon--xs icon-14"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_day_picker_DayPickerInput__WEBPACK_IMPORTED_MODULE_5__["default"], {
      value: this.formatDate(selectedDate),
      onDayChange: this.handleDaySelection,
      dayPickerProps: {
        selectedDays: selectedDate,
        disabledDays: {
          before: dayPickerStartDate
        }
      }
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(components_widgets_menu_menu_wrapper__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
      id: "dropdown-no-caret",
      stopPropagationOnToggle: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("button", {
      className: "DndModal__input",
      type: "button"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("div", {
      className: "DndModal__input__label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_intl__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
      id: "dnd_custom_time_picker_modal.time",
      defaultMessage: "Time"
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("i", {
      className: "icon icon--no-spacing icon-clock-outline icon--xs icon-14"
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement("span", null, selectedTime)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4__.createElement(components_widgets_menu_menu__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
      openLeft: false,
      ariaLabel: 'Clear custom status after'
    }, timeMenuItems))));
  }

}

_defineProperty(DndCustomTimePicker, "propTypes", {
  onExited: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().func.isRequired),
  userId: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().string.isRequired),
  currentDate: prop_types__WEBPACK_IMPORTED_MODULE_13___default().instanceOf(Date).isRequired,
  actions: prop_types__WEBPACK_IMPORTED_MODULE_13___default().shape({
    setStatus: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().func.isRequired)
  }).isRequired
});

/***/ })

}]);
//# sourceMappingURL=152.e30f7ace4911a1eb82ef.js.map