webpackHotUpdate(0,{

/***/ "./node_modules/react-router-redux/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ConnectedRouter__ = __webpack_require__("./node_modules/react-router-redux/es/ConnectedRouter.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ConnectedRouter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectors__ = __webpack_require__("./node_modules/react-router-redux/es/selectors.js");
/* unused harmony reexport getLocation */
/* unused harmony reexport createMatchSelector */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reducer__ = __webpack_require__("./node_modules/react-router-redux/es/reducer.js");
/* unused harmony reexport LOCATION_CHANGE */
/* unused harmony reexport routerReducer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__("./node_modules/react-router-redux/es/actions.js");
/* unused harmony reexport CALL_HISTORY_METHOD */
/* unused harmony reexport push */
/* unused harmony reexport replace */
/* unused harmony reexport go */
/* unused harmony reexport goBack */
/* unused harmony reexport goForward */
/* unused harmony reexport routerActions */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__middleware__ = __webpack_require__("./node_modules/react-router-redux/es/middleware.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__middleware__["a"]; });









/***/ }),

/***/ "./node_modules/react-router-redux/es/middleware.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = routerMiddleware;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__actions__ = __webpack_require__("./node_modules/react-router-redux/es/actions.js");


/**
 * This middleware captures CALL_HISTORY_METHOD actions to redirect to the
 * provided history object. This will prevent these actions from reaching your
 * reducer or any middleware that comes after this one.
 */
function routerMiddleware(history) {
  return function () {
    return function (next) {
      return function (action) {
        if (action.type !== __WEBPACK_IMPORTED_MODULE_0__actions__["a" /* CALL_HISTORY_METHOD */]) {
          return next(action);
        }

        var _action$payload = action.payload,
            method = _action$payload.method,
            args = _action$payload.args;

        history[method].apply(history, args);
      };
    };
  };
}

/***/ }),

/***/ "./resources/persist.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__("./node_modules/react-router-dom/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__("./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_redux__ = __webpack_require__("./node_modules/react-router-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_devtools_extension__ = __webpack_require__("./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_devtools_extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_redux_devtools_extension__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_history__ = __webpack_require__("./node_modules/history/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_redux_persist__ = __webpack_require__("./node_modules/redux-persist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_redux_persist_lib_integration_react__ = __webpack_require__("./node_modules/redux-persist/lib/integration/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_redux_persist_lib_integration_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_redux_persist_lib_integration_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_redux_persist_lib_storage__ = __webpack_require__("./node_modules/redux-persist/lib/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_redux_persist_lib_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_redux_persist_lib_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_redux_persist_lib_storage_session__ = __webpack_require__("./node_modules/redux-persist/lib/storage/session.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_redux_persist_lib_storage_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_redux_persist_lib_storage_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_redux_thunk__ = __webpack_require__("./node_modules/redux-thunk/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__container_jsx__ = __webpack_require__("./resources/container.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__reducer_jsx__ = __webpack_require__("./resources/reducer.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__middleware_jsx__ = __webpack_require__("./resources/middleware.jsx");
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();


















const _default = () => {

  const history = Object(__WEBPACK_IMPORTED_MODULE_6_history__["a" /* createBrowserHistory */])();
  const config = {
    key: 'root',
    storage: __WEBPACK_IMPORTED_MODULE_9_redux_persist_lib_storage___default.a
  };
  const reducers = Object(__WEBPACK_IMPORTED_MODULE_2_redux__["combineReducers"])({
    Reducer: __WEBPACK_IMPORTED_MODULE_13__reducer_jsx__["a" /* default */]
  });
  const store = Object(__WEBPACK_IMPORTED_MODULE_2_redux__["createStore"])(Object(__WEBPACK_IMPORTED_MODULE_7_redux_persist__["a" /* persistReducer */])(config, reducers), Object(__WEBPACK_IMPORTED_MODULE_5_redux_devtools_extension__["composeWithDevTools"])(Object(__WEBPACK_IMPORTED_MODULE_2_redux__["applyMiddleware"])(Object(__WEBPACK_IMPORTED_MODULE_3_react_router_redux__["b" /* routerMiddleware */])(history), __WEBPACK_IMPORTED_MODULE_11_redux_thunk___default.a, __WEBPACK_IMPORTED_MODULE_14__middleware_jsx__["a" /* clientMiddleware */])));
  const persistor = Object(__WEBPACK_IMPORTED_MODULE_7_redux_persist__["b" /* persistStore */])(store);

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["a" /* BrowserRouter */],
    null,
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4_react_redux__["a" /* Provider */],
      { store: store },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_8_redux_persist_lib_integration_react__["PersistGate"],
        { persistor: persistor },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_react_router_redux__["a" /* ConnectedRouter */],
          { history: history },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_12__container_jsx__["a" /* default */], null)
        )
      )
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