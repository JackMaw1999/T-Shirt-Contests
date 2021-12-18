"use strict";
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/entries/EntryThumbnail.js":
/*!**********************************************!*\
  !*** ./components/entries/EntryThumbnail.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/Card */ "./components/ui/Card.js");
/* harmony import */ var _EntryThumbnail_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EntryThumbnail.module.css */ "./components/entries/EntryThumbnail.module.css");
/* harmony import */ var _EntryThumbnail_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_EntryThumbnail_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);
var _jsxFileName = "C:\\Users\\jackm\\Documents\\nextjs-tutorial\\components\\entries\\EntryThumbnail.js",
    _s = $RefreshSig$();







function EntryThumbnail(props) {
  _s();

  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();

  function showDetailsHandler() {
    router.push('/' + props.id);
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
    className: (_EntryThumbnail_module_css__WEBPACK_IMPORTED_MODULE_4___default().item),
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
      href: "/entry/".concat(encodeURIComponent(props.id)),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("a", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_ui_Card__WEBPACK_IMPORTED_MODULE_0__.default, {
          onClick: showDetailsHandler,
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: (_EntryThumbnail_module_css__WEBPACK_IMPORTED_MODULE_4___default().image),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
              src: props.image,
              alt: props.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 11
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
            className: (_EntryThumbnail_module_css__WEBPACK_IMPORTED_MODULE_4___default().content),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
              children: [props.name, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
                className: (_EntryThumbnail_module_css__WEBPACK_IMPORTED_MODULE_4___default().votes),
                children: props.count
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 21,
                columnNumber: 29
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 13
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 11
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, this);
}

_s(EntryThumbnail, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];
});

_c = EntryThumbnail;
/* harmony default export */ __webpack_exports__["default"] = (EntryThumbnail);

var _c;

$RefreshReg$(_c, "EntryThumbnail");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOGQ5MDA0ZDQzZDkzMjMzMjI2ZmIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTSSxjQUFULENBQXdCQyxLQUF4QixFQUErQjtBQUFBOztBQUM3QixNQUFNQyxNQUFNLEdBQUdKLHNEQUFTLEVBQXhCOztBQUNBLFdBQVNLLGtCQUFULEdBQTZCO0FBQzNCRCxJQUFBQSxNQUFNLENBQUNFLElBQVAsQ0FBWSxNQUFNSCxLQUFLLENBQUNJLEVBQXhCO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBSyxhQUFTLEVBQUVSLHdFQUFoQjtBQUFBLDJCQUNFLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxtQkFBWVUsa0JBQWtCLENBQUNOLEtBQUssQ0FBQ0ksRUFBUCxDQUE5QixDQUFWO0FBQUEsNkJBQ0U7QUFBQSwrQkFDRSw4REFBQyw2Q0FBRDtBQUFNLGlCQUFPLEVBQUVGLGtCQUFmO0FBQUEsa0NBQ0E7QUFBSyxxQkFBUyxFQUFFTix5RUFBaEI7QUFBQSxtQ0FDRTtBQUFLLGlCQUFHLEVBQUVJLEtBQUssQ0FBQ08sS0FBaEI7QUFBdUIsaUJBQUcsRUFBRVAsS0FBSyxDQUFDUTtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFEQSxlQUlBO0FBQUsscUJBQVMsRUFBRVosMkVBQWhCO0FBQUEsbUNBQ0U7QUFBQSx5QkFBSUksS0FBSyxDQUFDUSxJQUFWLG9CQUFnQjtBQUFNLHlCQUFTLEVBQUVaLHlFQUFqQjtBQUFBLDBCQUFpQ0ksS0FBSyxDQUFDVztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQUpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0JEOztHQXRCUVo7VUFDUUY7OztLQURSRTtBQXdCVCwrREFBZUEsY0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2VudHJpZXMvRW50cnlUaHVtYm5haWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENhcmQgZnJvbSAnLi4vdWkvQ2FyZCc7XG5pbXBvcnQgY2xhc3NlcyBmcm9tICcuL0VudHJ5VGh1bWJuYWlsLm1vZHVsZS5jc3MnO1xuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmZ1bmN0aW9uIEVudHJ5VGh1bWJuYWlsKHByb3BzKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBmdW5jdGlvbiBzaG93RGV0YWlsc0hhbmRsZXIoKXtcbiAgICByb3V0ZXIucHVzaCgnLycgKyBwcm9wcy5pZCk7XG4gIH1cbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaXRlbX0gPlxuICAgICAgPExpbmsgaHJlZj17YC9lbnRyeS8ke2VuY29kZVVSSUNvbXBvbmVudChwcm9wcy5pZCl9YH0+XG4gICAgICAgIDxhPlxuICAgICAgICAgIDxDYXJkIG9uQ2xpY2s9e3Nob3dEZXRhaWxzSGFuZGxlcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9PlxuICAgICAgICAgICAgPGltZyBzcmM9e3Byb3BzLmltYWdlfSBhbHQ9e3Byb3BzLm5hbWV9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudH0+XG4gICAgICAgICAgICA8cD57cHJvcHMubmFtZX0gPHNwYW4gY2xhc3NOYW1lPXtjbGFzc2VzLnZvdGVzfT57cHJvcHMuY291bnR9PC9zcGFuPjwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9DYXJkPlxuICAgICAgICA8L2E+XG4gICAgICA8L0xpbms+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVudHJ5VGh1bWJuYWlsO1xuIl0sIm5hbWVzIjpbIkNhcmQiLCJjbGFzc2VzIiwidXNlUm91dGVyIiwiTGluayIsIkVudHJ5VGh1bWJuYWlsIiwicHJvcHMiLCJyb3V0ZXIiLCJzaG93RGV0YWlsc0hhbmRsZXIiLCJwdXNoIiwiaWQiLCJpdGVtIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwiaW1hZ2UiLCJuYW1lIiwiY29udGVudCIsInZvdGVzIiwiY291bnQiXSwic291cmNlUm9vdCI6IiJ9