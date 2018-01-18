webpackHotUpdate(0,{

/***/ "./node_modules/redux-persist/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__persistReducer__ = __webpack_require__("./node_modules/redux-persist/es/persistReducer.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__persistReducer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__persistCombineReducers__ = __webpack_require__("./node_modules/redux-persist/es/persistCombineReducers.js");
/* unused harmony reexport persistCombineReducers */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__persistStore__ = __webpack_require__("./node_modules/redux-persist/es/persistStore.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__persistStore__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createMigrate__ = __webpack_require__("./node_modules/redux-persist/es/createMigrate.js");
/* unused harmony reexport createMigrate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createTransform__ = __webpack_require__("./node_modules/redux-persist/es/createTransform.js");
/* unused harmony reexport createTransform */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__getStoredState__ = __webpack_require__("./node_modules/redux-persist/es/getStoredState.js");
/* unused harmony reexport getStoredState */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__createPersistoid__ = __webpack_require__("./node_modules/redux-persist/es/createPersistoid.js");
/* unused harmony reexport createPersistoid */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__purgeStoredState__ = __webpack_require__("./node_modules/redux-persist/es/purgeStoredState.js");
/* unused harmony reexport purgeStoredState */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__constants__ = __webpack_require__("./node_modules/redux-persist/es/constants.js");
/* unused harmony namespace reexport */











/***/ }),

/***/ "./resources/persist.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Persist; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__("./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_persist__ = __webpack_require__("./node_modules/redux-persist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_persist_lib_integration_react__ = __webpack_require__("./node_modules/redux-persist/lib/integration/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_persist_lib_integration_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_redux_persist_lib_integration_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_persist_lib_storage__ = __webpack_require__("./node_modules/redux-persist/lib/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_persist_lib_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_redux_persist_lib_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_redux_persist_lib_storage_session__ = __webpack_require__("./node_modules/redux-persist/lib/storage/session.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_redux_persist_lib_storage_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_redux_persist_lib_storage_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__container_jsx__ = __webpack_require__("./resources/container.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reducer_jsx__ = __webpack_require__("./resources/reducer.jsx");













let Persist = class Persist extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {

    const config = {
      key: 'root',
      storage: __WEBPACK_IMPORTED_MODULE_5_redux_persist_lib_storage___default.a
    };

    const reducers = Object(__WEBPACK_IMPORTED_MODULE_1_redux__["b" /* combineReducers */])({
      Reducer: __WEBPACK_IMPORTED_MODULE_8__reducer_jsx__["a" /* default */]
    });

    const persistedReducer = Object(__WEBPACK_IMPORTED_MODULE_3_redux_persist__["a" /* persistReducer */])(config, reducers);
    const store = Object(__WEBPACK_IMPORTED_MODULE_1_redux__["c" /* createStore */])(persistedReducer);
    const persistor = Object(__WEBPACK_IMPORTED_MODULE_3_redux_persist__["b" /* persistStore */])(store);

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_react_redux__["a" /* Provider */],
      { store: store },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_4_redux_persist_lib_integration_react__["PersistGate"],
        { persistor: persistor },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__container_jsx__["a" /* default */], null)
      )
    );
  }
};


/***/ })

})