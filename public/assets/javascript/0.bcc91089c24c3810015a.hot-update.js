webpackHotUpdate(0,{

/***/ "./node_modules/react-redux/es/connect/mapDispatchToProps.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export whenMapDispatchToPropsIsFunction */
/* unused harmony export whenMapDispatchToPropsIsMissing */
/* unused harmony export whenMapDispatchToPropsIsObject */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__ = __webpack_require__("./node_modules/react-redux/es/connect/wrapMapToProps.js");



function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["b" /* wrapMapToPropsFunc */])(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}

function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function (dispatch) {
    return { dispatch: dispatch };
  }) : undefined;
}

function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? Object(__WEBPACK_IMPORTED_MODULE_1__wrapMapToProps__["a" /* wrapMapToPropsConstant */])(function (dispatch) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_redux__["a" /* bindActionCreators */])(mapDispatchToProps, dispatch);
  }) : undefined;
}

/* harmony default export */ __webpack_exports__["a"] = ([whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject]);

/***/ }),

/***/ "./node_modules/redux-devtools-extension/index.js":
false,

/***/ "./node_modules/redux-logger/dist/redux-logger.js":
false,

/***/ "./node_modules/redux-persist/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__persistReducer__ = __webpack_require__("./node_modules/redux-persist/es/persistReducer.js");
/* unused harmony reexport persistReducer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__persistCombineReducers__ = __webpack_require__("./node_modules/redux-persist/es/persistCombineReducers.js");
/* unused harmony reexport persistCombineReducers */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__persistStore__ = __webpack_require__("./node_modules/redux-persist/es/persistStore.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__persistStore__["a"]; });
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

/***/ "./node_modules/redux-persist/es/persistCombineReducers.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__("./node_modules/redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__persistReducer__ = __webpack_require__("./node_modules/redux-persist/es/persistReducer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stateReconciler_autoMergeLevel2__ = __webpack_require__("./node_modules/redux-persist/es/stateReconciler/autoMergeLevel2.js");




// combineReducers + persistReducer with stateReconciler defaulted to autoMergeLevel2
function persistCombineReducers(config, reducers) {
  config.stateReconciler = config.stateReconciler || __WEBPACK_IMPORTED_MODULE_2__stateReconciler_autoMergeLevel2__["a" /* default */];
  return Object(__WEBPACK_IMPORTED_MODULE_1__persistReducer__["a" /* default */])(config, Object(__WEBPACK_IMPORTED_MODULE_0_redux__["b" /* combineReducers */])(reducers));
}

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
  var persistor = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["c" /* createStore */])(persistorReducer, undefined, options.enhancer);

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

/***/ "./node_modules/redux-persist/lib/storage/createWebStorage.js":
false,

/***/ "./node_modules/redux-persist/lib/storage/getStorage.js":
false,

/***/ "./node_modules/redux-persist/lib/storage/index.js":
false,

/***/ "./node_modules/redux-persist/lib/storage/session.js":
false,

/***/ "./node_modules/redux-thunk/lib/index.js":
false,

/***/ "./node_modules/redux/es/applyMiddleware.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__("./node_modules/redux/es/compose.js");
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = __WEBPACK_IMPORTED_MODULE_0__compose__["a" /* default */].apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),

/***/ "./node_modules/redux/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__("./node_modules/redux/es/createStore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combineReducers__ = __webpack_require__("./node_modules/redux/es/combineReducers.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__ = __webpack_require__("./node_modules/redux/es/bindActionCreators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__ = __webpack_require__("./node_modules/redux/es/applyMiddleware.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compose__ = __webpack_require__("./node_modules/redux/es/compose.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_warning__ = __webpack_require__("./node_modules/redux/es/utils/warning.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__createStore__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__combineReducers__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__["a"]; });
/* unused harmony reexport applyMiddleware */
/* unused harmony reexport compose */







/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  Object(__WEBPACK_IMPORTED_MODULE_5__utils_warning__["a" /* default */])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/node-libs-browser/node_modules/process/browser.js")))

/***/ }),

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
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'button',
          { onClick: this.onClick.bind(this) },
          '\u30DC\u30BF\u30F3'
        ),
        r.test,
        console.log(r)
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
    actions: Object.assign(Object(__WEBPACK_IMPORTED_MODULE_4_redux__["a" /* bindActionCreators */])(__WEBPACK_IMPORTED_MODULE_6__action_jsx__, dispatch))
  };
}

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_5_react_redux__["b" /* connect */])(mapStateToProps, mapDispatchToProps)(Container));

/***/ }),

/***/ "./resources/persist.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Persist; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_persist__ = __webpack_require__("./node_modules/redux-persist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_persist_lib_integration_react__ = __webpack_require__("./node_modules/redux-persist/lib/integration/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_persist_lib_integration_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_persist_lib_integration_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__container_jsx__ = __webpack_require__("./resources/container.jsx");








let Persist = class Persist extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {

    const config = {
      key: 'root',
      storage
    };

    const reducers = combineReducers({
      Reducer
    });

    const persistedReducer = persistReducer(config, reducers);
    const store = createStore(persistedReducer);
    const persistor = Object(__WEBPACK_IMPORTED_MODULE_2_redux_persist__["a" /* persistStore */])(store);

    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_redux__["a" /* Provider */],
      { store: store },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_redux_persist_lib_integration_react__["PersistGate"],
        { persistor: persistor },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__container_jsx__["a" /* default */], null)
      )
    );
  }
};


/***/ }),

/***/ "./resources/reducer.jsx":
false,

/***/ "./resources/store.jsx":
false

})