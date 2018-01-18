webpackHotUpdate(0,{

/***/ "./resources/persist.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__("./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux__ = __webpack_require__("./node_modules/react-router-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_devtools_extension__ = __webpack_require__("./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_devtools_extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_redux_devtools_extension__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_persist__ = __webpack_require__("./node_modules/redux-persist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_redux_persist_lib_integration_react__ = __webpack_require__("./node_modules/redux-persist/lib/integration/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_redux_persist_lib_integration_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_redux_persist_lib_integration_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_redux_persist_lib_storage__ = __webpack_require__("./node_modules/redux-persist/lib/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_redux_persist_lib_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_redux_persist_lib_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_redux_persist_lib_storage_session__ = __webpack_require__("./node_modules/redux-persist/lib/storage/session.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_redux_persist_lib_storage_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_redux_persist_lib_storage_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_redux_thunk__ = __webpack_require__("./node_modules/redux-thunk/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__container_jsx__ = __webpack_require__("./resources/container.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__reducer_jsx__ = __webpack_require__("./resources/reducer.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__middleware_jsx__ = __webpack_require__("./resources/middleware.jsx");
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();
















const _default = function () {

  const config = {
    key: 'root',
    storage: __WEBPACK_IMPORTED_MODULE_7_redux_persist_lib_storage___default.a
  };

  const reducers = Object(__WEBPACK_IMPORTED_MODULE_1_redux__["combineReducers"])({
    Reducer: __WEBPACK_IMPORTED_MODULE_11__reducer_jsx__["a" /* default */]
  });

  const store = Object(__WEBPACK_IMPORTED_MODULE_1_redux__["createStore"])(Object(__WEBPACK_IMPORTED_MODULE_5_redux_persist__["a" /* persistReducer */])(config, reducers), Object(__WEBPACK_IMPORTED_MODULE_4_redux_devtools_extension__["composeWithDevTools"])(Object(__WEBPACK_IMPORTED_MODULE_1_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_9_redux_thunk___default.a, __WEBPACK_IMPORTED_MODULE_12__middleware_jsx__["a" /* clientMiddleware */])));
  const persistor = Object(__WEBPACK_IMPORTED_MODULE_5_redux_persist__["b" /* persistStore */])(store);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_3_react_redux__["a" /* Provider */],
    { store: store },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_6_redux_persist_lib_integration_react__["PersistGate"],
      { persistor: persistor },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__container_jsx__["a" /* default */], null)
    )
  );
};

/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(_default, 'default', '/Users/k_aki86/Project/redux-hot-persist-sample/resources/persist.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})