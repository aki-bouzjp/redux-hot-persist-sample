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

/***/ "./node_modules/redux-persist/es/persistStore.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = persistStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__persistReducer__ = __webpack_require__("./node_modules/redux-persist/es/persistReducer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__("./node_modules/redux-persist/es/constants.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }






var initialState = {
  registry: [],
  bootstrapped: false
};

var persistorReducer = function persistorReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case __WEBPACK_IMPORTED_MODULE_2__constants__["g" /* REGISTER */]:
      return _extends({}, state, { registry: [].concat(_toConsumableArray(state.registry), [action.key]) });
    case __WEBPACK_IMPORTED_MODULE_2__constants__["h" /* REHYDRATE */]:
      var firstIndex = state.registry.indexOf(action.key);
      var registry = [].concat(_toConsumableArray(state.registry));
      registry.splice(firstIndex, 1);
      return _extends({}, state, { registry: registry, bootstrapped: registry.length === 0 });
    default:
      return state;
  }
};

function persistStore(store, persistorOptions, cb) {
  var options = persistorOptions || {};

  // help catch incorrect usage of passing PersistConfig in as PersistorOptions
  if (process.env.NODE_ENV !== 'production') {
    var bannedKeys = ['blacklist', 'whitelist', 'transforms', 'storage', 'keyPrefix', 'migrate'];
    bannedKeys.forEach(function (k) {
      if (!!options[k]) console.error('redux-persist: invalid option passed to persistStore: "' + k + '". You may be incorrectly passing persistConfig into persistStore, whereas it should be passed into persistReducer.');
    });
  }
  var boostrappedCb = cb || false;
  var persistor = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(persistorReducer, undefined, options.enhancer);

  persistor.purge = function () {
    var results = [];
    store.dispatch({
      type: __WEBPACK_IMPORTED_MODULE_2__constants__["f" /* PURGE */],
      result: function result(purgeResult) {
        results.push(purgeResult);
      }
    });
    return Promise.all(results);
  };

  persistor.flush = function () {
    var results = [];
    store.dispatch({
      type: __WEBPACK_IMPORTED_MODULE_2__constants__["b" /* FLUSH */],
      result: function result(flushResult) {
        results.push(flushResult);
      }
    });
    return Promise.all(results);
  };

  persistor.pause = function () {
    store.dispatch({
      type: __WEBPACK_IMPORTED_MODULE_2__constants__["d" /* PAUSE */]
    });
  };

  var register = function register(key) {
    persistor.dispatch({
      type: __WEBPACK_IMPORTED_MODULE_2__constants__["g" /* REGISTER */],
      key: key
    });
  };

  var rehydrate = function rehydrate(key, payload, err) {
    var rehydrateAction = {
      type: __WEBPACK_IMPORTED_MODULE_2__constants__["h" /* REHYDRATE */],
      payload: payload,
      err: err,
      key: key
      // dispatch to `store` to rehydrate and `persistor` to track result
    };store.dispatch(rehydrateAction);
    persistor.dispatch(rehydrateAction);
    if (boostrappedCb && persistor.getState().bootstrapped) {
      boostrappedCb();
      boostrappedCb = false;
    }
  };

  persistor.persist = function () {
    store.dispatch({ type: __WEBPACK_IMPORTED_MODULE_2__constants__["e" /* PERSIST */], register: register, rehydrate: rehydrate });
  };

  persistor.persist();

  return persistor;
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/node-libs-browser/node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/redux-persist/lib/integration/react.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.PersistGate = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// eslint-disable-line import/no-unresolved
// eslint-disable-line import/no-unresolved
var PersistGate = exports.PersistGate = function (_PureComponent) {
  _inherits(PersistGate, _PureComponent);

  function PersistGate() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, PersistGate);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = PersistGate.__proto__ || Object.getPrototypeOf(PersistGate)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      bootstrapped: false
    }, _this.handlePersistorState = function () {
      var persistor = _this.props.persistor;

      var _persistor$getState = persistor.getState(),
          bootstrapped = _persistor$getState.bootstrapped;

      if (bootstrapped) {
        if (_this.props.onBeforeLift) {
          Promise.resolve(_this.props.onBeforeLift()).then(function () {
            return _this.setState({ bootstrapped: true });
          }).catch(function () {
            return _this.setState({ bootstrapped: true });
          });
        } else {
          _this.setState({ bootstrapped: true });
        }
        _this._unsubscribe && _this._unsubscribe();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(PersistGate, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this._unsubscribe = this.props.persistor.subscribe(this.handlePersistorState);
      this.handlePersistorState();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._unsubscribe && this._unsubscribe();
    }
  }, {
    key: 'render',
    value: function render() {
      return this.state.bootstrapped ? this.props.children : this.props.loading;
    }
  }]);

  return PersistGate;
}(_react.PureComponent);

PersistGate.defaultProps = {
  loading: null
};

/***/ }),

/***/ "./resources/persist.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Persist; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__("./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_devtools_extension__ = __webpack_require__("./node_modules/redux-devtools-extension/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_devtools_extension___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_devtools_extension__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_persist__ = __webpack_require__("./node_modules/redux-persist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_persist_lib_integration_react__ = __webpack_require__("./node_modules/redux-persist/lib/integration/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_persist_lib_integration_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_redux_persist_lib_integration_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_redux_persist_lib_storage__ = __webpack_require__("./node_modules/redux-persist/lib/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_redux_persist_lib_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_redux_persist_lib_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_redux_persist_lib_storage_session__ = __webpack_require__("./node_modules/redux-persist/lib/storage/session.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_redux_persist_lib_storage_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_redux_persist_lib_storage_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_redux_thunk__ = __webpack_require__("./node_modules/redux-thunk/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_redux_thunk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_redux_thunk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__container_jsx__ = __webpack_require__("./resources/container.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__reducer_jsx__ = __webpack_require__("./resources/reducer.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__middleware_jsx__ = __webpack_require__("./resources/middleware.jsx");
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();















let Persist = class Persist extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {

    const config = {
      key: 'root',
      storage: __WEBPACK_IMPORTED_MODULE_6_redux_persist_lib_storage___default.a
    };

    const reducers = Object(__WEBPACK_IMPORTED_MODULE_1_redux__["combineReducers"])({
      Reducer: __WEBPACK_IMPORTED_MODULE_10__reducer_jsx__["a" /* default */]
    });

    const store = Object(__WEBPACK_IMPORTED_MODULE_1_redux__["createStore"])(Object(__WEBPACK_IMPORTED_MODULE_4_redux_persist__["a" /* persistReducer */])(config, reducers), Object(__WEBPACK_IMPORTED_MODULE_3_redux_devtools_extension__["composeWithDevTools"])(Object(__WEBPACK_IMPORTED_MODULE_1_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_8_redux_thunk___default.a, __WEBPACK_IMPORTED_MODULE_11__middleware_jsx__["a" /* clientMiddleware */])));
    const persistor = Object(__WEBPACK_IMPORTED_MODULE_4_redux_persist__["b" /* persistStore */])(store);

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_2_react_redux__["a" /* Provider */],
      { store: store },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_5_redux_persist_lib_integration_react__["PersistGate"],
        { persistor: persistor },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__container_jsx__["a" /* default */], null)
      )
    );
  }

  __reactstandin__regenerateByEval(key, code) {
    this[key] = eval(code);
  }

};

;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Persist, 'Persist', '/Users/k_aki86/Project/hot-persistor-sample/resources/persist.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})