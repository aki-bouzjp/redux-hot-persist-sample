webpackHotUpdate(0,{

/***/ "./node_modules/redux-persist/lib/storage/createWebStorage.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = createWebStorage;

var _getStorage = __webpack_require__("./node_modules/redux-persist/lib/storage/getStorage.js");

var _getStorage2 = _interopRequireDefault(_getStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createWebStorage(type) {
  var storage = (0, _getStorage2.default)(type);
  return {
    getItem: function getItem(key) {
      return new Promise(function (resolve, reject) {
        resolve(storage.getItem(key));
      });
    },
    setItem: function setItem(key, item) {
      return new Promise(function (resolve, reject) {
        resolve(storage.setItem(key, item));
      });
    },
    removeItem: function removeItem(key) {
      return new Promise(function (resolve, reject) {
        resolve(storage.removeItem(key));
      });
    }
  };
}

/***/ }),

/***/ "./node_modules/redux-persist/lib/storage/getStorage.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = getStorage;


function noop() {}

var noopStorage = {
  getItem: noop,
  setItem: noop,
  removeItem: noop
};

function hasStorage(storageType) {
  if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object' || !(storageType in window)) {
    return false;
  }

  try {
    var storage = window[storageType];
    var testKey = 'redux-persist ' + storageType + ' test';
    storage.setItem(testKey, 'test');
    storage.getItem(testKey);
    storage.removeItem(testKey);
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') console.warn('redux-persist ' + storageType + ' test failed, persistence will be disabled.');
    return false;
  }
  return true;
}

function getStorage(type) {
  var storageType = type + 'Storage';
  if (hasStorage(storageType)) return window[storageType];else {
    if (process.env.NODE_ENV !== 'production') {
      console.error('redux-persist failed to create sync storage. falling back to memory storage.');
    }
    return noopStorage;
  }
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("./node_modules/node-libs-browser/node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/redux-persist/lib/storage/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createWebStorage = __webpack_require__("./node_modules/redux-persist/lib/storage/createWebStorage.js");

var _createWebStorage2 = _interopRequireDefault(_createWebStorage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createWebStorage2.default)('local');

/***/ }),

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_persist_lib_integration_react__ = __webpack_require__("./node_modules/redux-persist/lib/integration/react.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_persist_lib_integration_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_redux_persist_lib_integration_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_persist_lib_storage__ = __webpack_require__("./node_modules/redux-persist/lib/storage/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_persist_lib_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_redux_persist_lib_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_persist_lib_storage_session__ = __webpack_require__("./node_modules/redux-persist/lib/storage/session.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_redux_persist_lib_storage_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_redux_persist_lib_storage_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__container_jsx__ = __webpack_require__("./resources/container.jsx");











let Persist = class Persist extends __WEBPACK_IMPORTED_MODULE_0_react___default.a.Component {

  render() {

    const config = {
      key: 'root',
      storage: __WEBPACK_IMPORTED_MODULE_4_redux_persist_lib_storage___default.a
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
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__container_jsx__["a" /* default */], null)
      )
    );
  }
};


/***/ })

})