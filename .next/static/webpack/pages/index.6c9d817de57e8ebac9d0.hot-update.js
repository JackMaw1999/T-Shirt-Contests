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
      href: "/entry/".concat(encodeURIComponent(props.slug)),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_ui_Card__WEBPACK_IMPORTED_MODULE_0__.default, {
        onClick: showDetailsHandler,
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_EntryThumbnail_module_css__WEBPACK_IMPORTED_MODULE_4___default().image),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("img", {
            src: props.image,
            alt: props.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("div", {
          className: (_EntryThumbnail_module_css__WEBPACK_IMPORTED_MODULE_4___default().content),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("p", {
            children: [props.name, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("span", {
              className: (_EntryThumbnail_module_css__WEBPACK_IMPORTED_MODULE_4___default().votes),
              children: props.count
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 29
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmM5ZDgxN2RlNTdlOGViYWM5ZDAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxTQUFTSSxjQUFULENBQXdCQyxLQUF4QixFQUErQjtBQUFBOztBQUM3QixNQUFNQyxNQUFNLEdBQUdKLHNEQUFTLEVBQXhCOztBQUNBLFdBQVNLLGtCQUFULEdBQTZCO0FBQzNCRCxJQUFBQSxNQUFNLENBQUNFLElBQVAsQ0FBWSxNQUFNSCxLQUFLLENBQUNJLEVBQXhCO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBSyxhQUFTLEVBQUVSLHdFQUFoQjtBQUFBLDJCQUNFLDhEQUFDLGtEQUFEO0FBQU0sVUFBSSxtQkFBWVUsa0JBQWtCLENBQUNOLEtBQUssQ0FBQ08sSUFBUCxDQUE5QixDQUFWO0FBQUEsNkJBQ0UsOERBQUMsNkNBQUQ7QUFBTSxlQUFPLEVBQUVMLGtCQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFTix5RUFBaEI7QUFBQSxpQ0FDRTtBQUFLLGVBQUcsRUFBRUksS0FBSyxDQUFDUSxLQUFoQjtBQUF1QixlQUFHLEVBQUVSLEtBQUssQ0FBQ1M7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFJRTtBQUFLLG1CQUFTLEVBQUViLDJFQUFoQjtBQUFBLGlDQUNFO0FBQUEsdUJBQUlJLEtBQUssQ0FBQ1MsSUFBVixvQkFBZ0I7QUFBTSx1QkFBUyxFQUFFYix5RUFBakI7QUFBQSx3QkFBaUNJLEtBQUssQ0FBQ1k7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBY0Q7O0dBcEJRYjtVQUNRRjs7O0tBRFJFO0FBc0JULCtEQUFlQSxjQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZW50cmllcy9FbnRyeVRodW1ibmFpbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FyZCBmcm9tICcuLi91aS9DYXJkJztcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vRW50cnlUaHVtYm5haWwubW9kdWxlLmNzcyc7XG5pbXBvcnQge3VzZVJvdXRlcn0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuZnVuY3Rpb24gRW50cnlUaHVtYm5haWwocHJvcHMpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGZ1bmN0aW9uIHNob3dEZXRhaWxzSGFuZGxlcigpe1xuICAgIHJvdXRlci5wdXNoKCcvJyArIHByb3BzLmlkKTtcbiAgfVxuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pdGVtfSA+XG4gICAgICA8TGluayBocmVmPXtgL2VudHJ5LyR7ZW5jb2RlVVJJQ29tcG9uZW50KHByb3BzLnNsdWcpfWB9PlxuICAgICAgICA8Q2FyZCBvbkNsaWNrPXtzaG93RGV0YWlsc0hhbmRsZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfT5cbiAgICAgICAgICAgIDxpbWcgc3JjPXtwcm9wcy5pbWFnZX0gYWx0PXtwcm9wcy5uYW1lfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnR9PlxuICAgICAgICAgICAgPHA+e3Byb3BzLm5hbWV9IDxzcGFuIGNsYXNzTmFtZT17Y2xhc3Nlcy52b3Rlc30+e3Byb3BzLmNvdW50fTwvc3Bhbj48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ2FyZD5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRW50cnlUaHVtYm5haWw7XG4iXSwibmFtZXMiOlsiQ2FyZCIsImNsYXNzZXMiLCJ1c2VSb3V0ZXIiLCJMaW5rIiwiRW50cnlUaHVtYm5haWwiLCJwcm9wcyIsInJvdXRlciIsInNob3dEZXRhaWxzSGFuZGxlciIsInB1c2giLCJpZCIsIml0ZW0iLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbHVnIiwiaW1hZ2UiLCJuYW1lIiwiY29udGVudCIsInZvdGVzIiwiY291bnQiXSwic291cmNlUm9vdCI6IiJ9