webpackHotUpdate(0,{

/***/ "./resources/container.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_radium__ = __webpack_require__("./node_modules/radium/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_radium___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_radium__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_dom__ = __webpack_require__("./node_modules/react-router-dom/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_i18next__ = __webpack_require__("./node_modules/react-i18next/dist/commonjs/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_i18next___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_i18next__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux__ = __webpack_require__("./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__action_jsx__ = __webpack_require__("./resources/action.jsx");










let Container = class Container extends __WEBPACK_IMPORTED_MODULE_0_react__["Component"] {

  onClick() {
    this.props.actions.test();
  }

  render() {
    const a = this.props.actions;
    const r = this.props.reducers;
    const s = this.state;

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        r.test
      )
    );
  }
};


function mapStateToProps(state, ownProps) {
  return {
    reducers: Object.assign(state.Reducer)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: Object.assign(Object(__WEBPACK_IMPORTED_MODULE_4_redux__["bindActionCreators"])(__WEBPACK_IMPORTED_MODULE_6__action_jsx__, dispatch))
  };
}

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_5_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(Container));

/***/ })

})