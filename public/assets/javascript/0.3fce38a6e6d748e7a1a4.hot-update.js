webpackHotUpdate(0,{

/***/ "./node_modules/redux-persist/lib/storage/session.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createWebStorage = __webpack_require__("./node_modules/redux-persist/lib/storage/createWebStorage.js");

var _createWebStorage2 = _interopRequireDefault(_createWebStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createWebStorage2.default)('session');

/***/ }),

/***/ "./resources/persist.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Persist; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_persist__ = __webpack_require__("./node_modules/redux-persist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_persist_lib_storage__ = __webpack_require__("./node_modules/redux-persist/lib/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_persist_lib_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_persist_lib_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_persist_lib_storage_session__ = __webpack_require__("./node_modules/redux-persist/lib/storage/session.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_persist_lib_storage_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_redux_persist_lib_storage_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__container_jsx__ = __webpack_require__("./resources/container.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__store_jsx__ = __webpack_require__("./resources/store.jsx");










let Persist = class Persist extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

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
    Object(__WEBPACK_IMPORTED_MODULE_2_redux_persist__["a" /* persistStore */])(__WEBPACK_IMPORTED_MODULE_6__store_jsx__["a" /* default */], {
      storage: __WEBPACK_IMPORTED_MODULE_3_redux_persist_lib_storage___default.a,
      whitelist: ['user', 'counter']
    }, () => {
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
      { store: __WEBPACK_IMPORTED_MODULE_6__store_jsx__["a" /* default */] },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__container_jsx__["a" /* default */], null)
    );
  }
};


/***/ })

})