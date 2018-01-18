webpackHotUpdate(0,{

/***/ "./resources/middleware.jsx":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_router_redux__ = __webpack_require__("./node_modules/react-router-redux/es/index.js");
(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").enterModule;

  enterModule && enterModule(module);
})();




const clientMiddleware = store => next => action => {
  console.log('access middlewareasd');
  return next(action);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = clientMiddleware;

;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/patch.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/patch.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(clientMiddleware, 'clientMiddleware', '/Users/k_aki86/Project/hot-persistor-sample/resources/middleware.jsx');
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})