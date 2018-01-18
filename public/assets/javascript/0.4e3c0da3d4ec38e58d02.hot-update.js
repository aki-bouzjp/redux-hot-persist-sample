webpackHotUpdate(0,{

/***/ "./node_modules/react-router-redux/es/ConnectedRouter.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__("./node_modules/prop-types/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router__ = __webpack_require__("./node_modules/react-router/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reducer__ = __webpack_require__("./node_modules/react-router-redux/es/reducer.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var ConnectedRouter = function (_Component) {
  _inherits(ConnectedRouter, _Component);

  function ConnectedRouter() {
    var _temp, _this, _ret;

    _classCallCheck(this, ConnectedRouter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.handleLocationChange = function (location) {
      _this.store.dispatch({
        type: __WEBPACK_IMPORTED_MODULE_3__reducer__["a" /* LOCATION_CHANGE */],
        payload: location
      });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ConnectedRouter.prototype.componentWillMount = function componentWillMount() {
    var _props = this.props,
        propsStore = _props.store,
        history = _props.history,
        isSSR = _props.isSSR;

    this.store = propsStore || this.context.store;
    this.handleLocationChange(history.location);

    if (!isSSR) this.unsubscribeFromHistory = history.listen(this.handleLocationChange);
  };

  ConnectedRouter.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.unsubscribeFromHistory) this.unsubscribeFromHistory();
  };

  ConnectedRouter.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_router__["a" /* Router */], this.props);
  };

  return ConnectedRouter;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

ConnectedRouter.propTypes = {
  store: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  history: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object.isRequired,
  children: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.node,
  isSSR: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool
};
ConnectedRouter.contextTypes = {
  store: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object
};


/* harmony default export */ __webpack_exports__["a"] = (ConnectedRouter);

/***/ }),

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
/* unused harmony reexport routerMiddleware */









/***/ }),

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
















const _default = () => {

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
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_2_react_router_redux__["a" /* ConnectedRouter */],
        { history: history },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__container_jsx__["a" /* default */], null)
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