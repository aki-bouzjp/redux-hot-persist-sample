webpackHotUpdate(0,{

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

/***/ "./resources/index.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_persist__ = __webpack_require__("./node_modules/redux-persist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_jsx__ = __webpack_require__("./resources/store.jsx");







let App = class App extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.state = { isReady: false };
  }

  componentDidMount() {
    /*persistStore(
      store,
      {
        storage: AsyncStorage,
        whitelist: ['user', 'counter']
      },
      () => {
        this.setState({ isReady: true })
      }
    )*/
    Object(__WEBPACK_IMPORTED_MODULE_2_redux_persist__["a" /* persistStore */])(store, {}, () => {
      this.setState({ isReady: true });
    });
  }

  render() {
    return !this.state.isReady ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      'not ready'
    ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_redux__["a" /* Provider */],
      { store: __WEBPACK_IMPORTED_MODULE_3__store_jsx__["a" /* default */] },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        'ready'
      )
    );
  }
};


/***/ }),

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









/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(combineReducers({
  Reducer: __WEBPACK_IMPORTED_MODULE_5__reducer_jsx__["a" /* default */]
}), undefined, Object(__WEBPACK_IMPORTED_MODULE_2_redux_devtools_extension__["composeWithDevTools"])(Object(__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_4_redux_thunk___default.a)
//autoRehydrate()
)));

/***/ })

})