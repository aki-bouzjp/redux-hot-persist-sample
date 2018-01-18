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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_persist_lib_storage__ = __webpack_require__("./node_modules/redux-persist/lib/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_persist_lib_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_redux_persist_lib_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_redux_persist_lib_storage_session__ = __webpack_require__("./node_modules/redux-persist/lib/storage/session.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_redux_persist_lib_storage_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_redux_persist_lib_storage_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reducer_jsx__ = __webpack_require__("./resources/reducer.jsx");













/*const reducers = createStore(
  persistedReducer,
  undefined,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware
    ),
    //autoRehydrate()
  ),
);*/

/* harmony default export */ __webpack_exports__["a"] = (() => {
  const config = {
    key: 'root',
    storage: __WEBPACK_IMPORTED_MODULE_5_redux_persist_lib_storage___default.a
  };

  const reducers = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
    Reducer: __WEBPACK_IMPORTED_MODULE_7__reducer_jsx__["a" /* default */]
  });

  const persistedReducer = Object(__WEBPACK_IMPORTED_MODULE_3_redux_persist__["a" /* persistReducer */])(config, reducers);

  console.log(123);

  let store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_3_redux_persist__["a" /* persistReducer */]);
  let persistor = Object(__WEBPACK_IMPORTED_MODULE_3_redux_persist__["b" /* persistStore */])(store);
  return { store, persistor };
});

/***/ })

})