webpackHotUpdate(0,{

/***/ "./resources/reducer.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__("./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__action_jsx__ = __webpack_require__("./resources/action.jsx");






const initialState = {
  test: 0
};

const handlers = {
  [__WEBPACK_IMPORTED_MODULE_2__action_jsx__["ACTION_TYPE"].TEST](state, action) {
    let res = state.test;
    if (state.test) res = false;else res = true;

    return Object.assign({}, state, {
      test: res
    });
  }
};

/* harmony default export */ __webpack_exports__["a"] = ((state = initialState, action) => {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
});

/***/ })

})