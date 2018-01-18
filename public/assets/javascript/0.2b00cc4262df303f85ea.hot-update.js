webpackHotUpdate(0,{

/***/ "./node_modules/redux-devtools-extension/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var compose = __webpack_require__("./node_modules/redux/es/index.js").compose;

exports.__esModule = true;
exports.composeWithDevTools = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
    function() {
      if (arguments.length === 0) return undefined;
      if (typeof arguments[0] === 'object') return compose;
      return compose.apply(null, arguments);
    }
);

exports.devToolsEnhancer = (
  typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ ?
    window.__REDUX_DEVTOOLS_EXTENSION__ :
    function() { return function(noop) { return noop; } }
);


/***/ }),

/***/ "./node_modules/redux-thunk/lib/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

exports['default'] = thunk;

/***/ }),

/***/ "./resources/persist.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Persist; });
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














let Persist = class Persist extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {

    const config = {
      key: 'root',
      storage: __WEBPACK_IMPORTED_MODULE_6_redux_persist_lib_storage___default.a
    };

    const reducers = Object(__WEBPACK_IMPORTED_MODULE_1_redux__["combineReducers"])({
      Reducer: __WEBPACK_IMPORTED_MODULE_10__reducer_jsx__["a" /* default */]
    });

    const persistedReducer = Object(__WEBPACK_IMPORTED_MODULE_4_redux_persist__["a" /* persistReducer */])(config, reducers);
    const store = Object(__WEBPACK_IMPORTED_MODULE_1_redux__["createStore"])(persistedReducer, Object(__WEBPACK_IMPORTED_MODULE_3_redux_devtools_extension__["composeWithDevTools"])(Object(__WEBPACK_IMPORTED_MODULE_1_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_8_redux_thunk___default.a)));
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
};


/***/ })

})