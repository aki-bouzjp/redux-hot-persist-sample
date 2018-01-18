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


/* unused harmony default export */ var _unused_webpack_default_export = (ConnectedRouter);

/***/ }),

/***/ "./node_modules/react-router-redux/es/actions.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CALL_HISTORY_METHOD; });
/* unused harmony export push */
/* unused harmony export replace */
/* unused harmony export go */
/* unused harmony export goBack */
/* unused harmony export goForward */
/* unused harmony export routerActions */

/**
 * This action type will be dispatched by the history actions below.
 * If you're writing a middleware to watch for navigation events, be sure to
 * look for actions of this type.
 */
var CALL_HISTORY_METHOD = '@@router/CALL_HISTORY_METHOD';

function updateLocation(method) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return {
      type: CALL_HISTORY_METHOD,
      payload: { method: method, args: args }
    };
  };
}

/**
 * These actions correspond to the history API.
 * The associated routerMiddleware will capture these events before they get to
 * your reducer and reissue them as the matching function on your history.
 */
var push = updateLocation('push');
var replace = updateLocation('replace');
var go = updateLocation('go');
var goBack = updateLocation('goBack');
var goForward = updateLocation('goForward');

var routerActions = { push: push, replace: replace, go: go, goBack: goBack, goForward: goForward };

/***/ }),

/***/ "./node_modules/react-router-redux/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ConnectedRouter__ = __webpack_require__("./node_modules/react-router-redux/es/ConnectedRouter.js");
/* unused harmony reexport ConnectedRouter */
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

/***/ "./node_modules/react-router-redux/es/middleware.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
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

/***/ "./node_modules/react-router-redux/es/reducer.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOCATION_CHANGE; });
/* unused harmony export routerReducer */
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * This action type will be dispatched when your history
 * receives a location change.
 */
var LOCATION_CHANGE = '@@router/LOCATION_CHANGE';

var initialState = {
  location: null

  /**
   * This reducer will update the state with the most recent location history
   * has transitioned to. This may not be in sync with the router, particularly
   * if you have asynchronously-loaded routes, so reading from and relying on
   * this state is discouraged.
   */
};function routerReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      type = _ref.type,
      payload = _ref.payload;

  if (type === LOCATION_CHANGE) {
    return _extends({}, state, { location: payload });
  }

  return state;
}

/***/ }),

/***/ "./node_modules/react-router-redux/es/selectors.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getLocation */
/* unused harmony export createMatchSelector */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router__ = __webpack_require__("./node_modules/react-router/es/index.js");


var getLocation = function getLocation(state) {
  return state.router.location;
};

var createMatchSelector = function createMatchSelector(path) {
  var lastPathname = null;
  var lastMatch = null;
  return function (state) {
    var _ref = getLocation(state) || {},
        pathname = _ref.pathname;

    if (pathname === lastPathname) {
      return lastMatch;
    }
    lastPathname = pathname;
    var match = Object(__WEBPACK_IMPORTED_MODULE_0_react_router__["b" /* matchPath */])(pathname, path);
    if (!match || !lastMatch || match.url !== lastMatch.url) {
      lastMatch = match;
    }
    return lastMatch;
  };
};

/***/ }),

/***/ "./node_modules/react-router/es/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__MemoryRouter__ = __webpack_require__("./node_modules/react-router/es/MemoryRouter.js");
/* unused harmony reexport MemoryRouter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Prompt__ = __webpack_require__("./node_modules/react-router/es/Prompt.js");
/* unused harmony reexport Prompt */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Redirect__ = __webpack_require__("./node_modules/react-router/es/Redirect.js");
/* unused harmony reexport Redirect */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Route__ = __webpack_require__("./node_modules/react-router/es/Route.js");
/* unused harmony reexport Route */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Router__ = __webpack_require__("./node_modules/react-router/es/Router.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__Router__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__StaticRouter__ = __webpack_require__("./node_modules/react-router/es/StaticRouter.js");
/* unused harmony reexport StaticRouter */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Switch__ = __webpack_require__("./node_modules/react-router/es/Switch.js");
/* unused harmony reexport Switch */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__matchPath__ = __webpack_require__("./node_modules/react-router/es/matchPath.js");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_7__matchPath__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__withRouter__ = __webpack_require__("./node_modules/react-router/es/withRouter.js");
/* unused harmony reexport withRouter */



















/***/ }),

/***/ "./resources/middleware.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_redux__ = __webpack_require__("./node_modules/react-router-redux/es/index.js");




const clientMiddleware = store => next => action => {
  console.log(123);
  return next(action);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = clientMiddleware;


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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__middleware_jsx__ = __webpack_require__("./resources/middleware.jsx");















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
    const store = Object(__WEBPACK_IMPORTED_MODULE_1_redux__["createStore"])(persistedReducer, Object(__WEBPACK_IMPORTED_MODULE_3_redux_devtools_extension__["composeWithDevTools"])(Object(__WEBPACK_IMPORTED_MODULE_1_redux__["applyMiddleware"])(__WEBPACK_IMPORTED_MODULE_8_redux_thunk___default.a, __WEBPACK_IMPORTED_MODULE_11__middleware_jsx__["a" /* clientMiddleware */])));
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