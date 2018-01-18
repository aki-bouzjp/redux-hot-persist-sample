webpackHotUpdate(0,{

/***/ "./resources/store.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_logger__ = __webpack_require__("./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_devtools_extension__ = __webpack_require__("./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_devtools_extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_redux_devtools_extension__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_persist__ = __webpack_require__("./node_modules/redux-persist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_thunk__ = __webpack_require__("./node_modules/redux-thunk/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducer_jsx__ = __webpack_require__("./resources/reducer.jsx");









const config = {
  key: 'root',
  storage: storage
};

const reducers = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  Reducer: __WEBPACK_IMPORTED_MODULE_5__reducer_jsx__["a" /* default */]
}), undefined, Object(__WEBPACK_IMPORTED_MODULE_2_redux_devtools_extension__["composeWithDevTools"])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_4_redux_thunk___default.a)
//autoRehydrate()
));

const persistedReducer = persistReducer(config, reducers);

/* harmony default export */ __webpack_exports__["a"] = (() => {
  let store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(persistReducer);
  let persistor = persistStore(store);
  return { store, persistor };
});

/***/ })

})