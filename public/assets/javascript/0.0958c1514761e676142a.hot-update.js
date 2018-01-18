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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Persist; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__("./node_modules/react-redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux_persist__ = __webpack_require__("./node_modules/redux-persist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_persist_lib_integration_react__ = __webpack_require__("./node_modules/redux-persist/lib/integration/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_persist_lib_integration_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_persist_lib_integration_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__container_jsx__ = __webpack_require__("./resources/container.jsx");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_jsx__ = __webpack_require__("./resources/store.jsx");









let Persist = class Persist extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  constructor(props) {
    super(props);
    this.state = { isReady: true };
  }

  componentDidMount() {}

  render() {
    return !this.state.isReady ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      'div',
      null,
      'not ready'
    ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1_react_redux__["a" /* Provider */],
      { store: __WEBPACK_IMPORTED_MODULE_5__store_jsx__["store"] },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_redux_persist_lib_integration_react__["PersistGate"],
        { persistor: __WEBPACK_IMPORTED_MODULE_5__store_jsx__["persistor"] },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__container_jsx__["a" /* default */], null)
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_persist_lib_storage__ = __webpack_require__("./node_modules/redux-persist/lib/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_persist_lib_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_redux_persist_lib_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_redux_persist_lib_storage_session__ = __webpack_require__("./node_modules/redux-persist/lib/storage/session.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_redux_persist_lib_storage_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_redux_persist_lib_storage_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reducer_jsx__ = __webpack_require__("./resources/reducer.jsx");













const config = {
  key: 'root',
  storage: __WEBPACK_IMPORTED_MODULE_5_redux_persist_lib_storage___default.a
};

const reducers = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["combineReducers"])({
  Reducer: __WEBPACK_IMPORTED_MODULE_7__reducer_jsx__["a" /* default */]
});

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

const persistedReducer = Object(__WEBPACK_IMPORTED_MODULE_3_redux_persist__["a" /* persistReducer */])(config, reducers);

/* unused harmony default export */ var _unused_webpack_default_export = (() => {
  let store = Object(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__WEBPACK_IMPORTED_MODULE_3_redux_persist__["a" /* persistReducer */]);
  let persistor = Object(__WEBPACK_IMPORTED_MODULE_3_redux_persist__["b" /* persistStore */])(store);
  return { store, persistor };
});

/***/ })

})