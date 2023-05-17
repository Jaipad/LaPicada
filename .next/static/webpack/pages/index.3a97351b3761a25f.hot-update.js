/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Mapa.js":
/*!****************************!*\
  !*** ./components/Mapa.js ***!
  \****************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
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
                // @ts-ignore importMeta is replaced in the loader
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
    })();


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header.js */ \"./components/Header.js\");\n/* harmony import */ var _components_Filtros_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Filtros.js */ \"./components/Filtros.js\");\n/* harmony import */ var _components_Mapa_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Mapa.js */ \"./components/Mapa.js\");\n/* harmony import */ var _components_Mapa_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_Mapa_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Footer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer.js */ \"./components/Footer.js\");\n// Next.js\nvar _this = undefined;\n\n\n// Components\n\n\n\n\nvar Index = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"LaPicada\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hydepad\\\\Documents\\\\Taller4\\\\LaPicada\\\\pages\\\\index.js\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"stylesheet\",\n                        href: \"https://unpkg.com/leaflet@1.9.3/dist/leaflet.css\",\n                        integrity: \"sha256-kLaT2GOSpHechhsozzB+flnD+zUyjE2LlfWPgU04xyI=\",\n                        crossorigin: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hydepad\\\\Documents\\\\Taller4\\\\LaPicada\\\\pages\\\\index.js\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"script\", {\n                        src: \"https://unpkg.com/leaflet@1.9.3/dist/leaflet.js\",\n                        integrity: \"sha256-WBkoXOwTeyKclOHuWtc+i2uENFpDZ9YPdf5Hf+D7ewM=\",\n                        crossorigin: \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hydepad\\\\Documents\\\\Taller4\\\\LaPicada\\\\pages\\\\index.js\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\hydepad\\\\Documents\\\\Taller4\\\\LaPicada\\\\pages\\\\index.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container\",\n                id: \"principal\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hydepad\\\\Documents\\\\Taller4\\\\LaPicada\\\\pages\\\\index.js\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Filtros_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hydepad\\\\Documents\\\\Taller4\\\\LaPicada\\\\pages\\\\index.js\",\n                        lineNumber: 30,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_Mapa_js__WEBPACK_IMPORTED_MODULE_4___default()), {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hydepad\\\\Documents\\\\Taller4\\\\LaPicada\\\\pages\\\\index.js\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\hydepad\\\\Documents\\\\Taller4\\\\LaPicada\\\\pages\\\\index.js\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\hydepad\\\\Documents\\\\Taller4\\\\LaPicada\\\\pages\\\\index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true);\n};\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsVUFBVTtBQUNWOztBQUE2QjtBQUU3QixhQUFhO0FBQ2dDO0FBQ0U7QUFDTjtBQUNJO0FBRTdDLElBQU1LLEtBQUssR0FBRyxXQUFNO0lBQ2xCLHFCQUNFOzswQkFDRSw4REFBQ0wsa0RBQUk7O2tDQUNILDhEQUFDTSxPQUFLO2tDQUFDLFVBQVE7Ozs7OzZCQUFRO2tDQUN2Qiw4REFBQ0MsTUFBSTt3QkFDSEMsR0FBRyxFQUFDLFlBQVk7d0JBQ2hCQyxJQUFJLEVBQUMsa0RBQWtEO3dCQUN2REMsU0FBUyxFQUFDLHFEQUFxRDt3QkFDL0RDLFdBQVcsRUFBQyxFQUFFOzs7Ozs2QkFDZDtrQ0FFRiw4REFBQ0MsUUFBTTt3QkFDTEMsR0FBRyxFQUFDLGlEQUFpRDt3QkFDckRILFNBQVMsRUFBQyxxREFBcUQ7d0JBQy9EQyxXQUFXLEVBQUMsRUFBRTs7Ozs7NkJBQ047Ozs7OztxQkFDTDswQkFDUCw4REFBQ0csS0FBRztnQkFBQ0MsU0FBUyxFQUFDLFdBQVc7Z0JBQUNDLEVBQUUsRUFBQyxXQUFXOztrQ0FDdkMsOERBQUNmLDZEQUFNOzs7OzZCQUFHO2tDQUNWLDhEQUFDQyw4REFBTzs7Ozs2QkFBRztrQ0FDWCw4REFBQ0MsNERBQUk7Ozs7NkJBQUU7a0NBQ1AsOERBQUNDLDZEQUFNOzs7OzZCQUFHOzs7Ozs7cUJBQ047O29CQUNMLENBQ0g7QUFDSixDQUFDO0FBMUJLQyxLQUFBQSxLQUFLO0FBNEJYLCtEQUFlQSxLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBOZXh0LmpzXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbi8vIENvbXBvbmVudHNcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi4vY29tcG9uZW50cy9IZWFkZXIuanNcIjtcclxuaW1wb3J0IEZpbHRyb3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvRmlsdHJvcy5qc1wiO1xyXG5pbXBvcnQgTWFwYSBmcm9tIFwiLi4vY29tcG9uZW50cy9NYXBhLmpzXCI7XHJcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyLmpzXCI7XHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPkxhUGljYWRhPC90aXRsZT5cclxuICAgICAgICA8bGlua1xyXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vbGVhZmxldEAxLjkuMy9kaXN0L2xlYWZsZXQuY3NzXCJcclxuICAgICAgICAgIGludGVncml0eT1cInNoYTI1Ni1rTGFUMkdPU3BIZWNoaHNvenpCK2ZsbkQrelV5akUyTGxmV1BnVTA0eHlJPVwiXHJcbiAgICAgICAgICBjcm9zc29yaWdpbj1cIlwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPHNjcmlwdFxyXG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly91bnBrZy5jb20vbGVhZmxldEAxLjkuMy9kaXN0L2xlYWZsZXQuanNcIlxyXG4gICAgICAgICAgaW50ZWdyaXR5PVwic2hhMjU2LVdCa29YT3dUZXlLY2xPSHVXdGMraTJ1RU5GcERaOVlQZGY1SGYrRDdld009XCJcclxuICAgICAgICAgIGNyb3Nzb3JpZ2luPVwiXCJcclxuICAgICAgICA+PC9zY3JpcHQ+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIiBpZD1cInByaW5jaXBhbFwiPlxyXG4gICAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgICA8RmlsdHJvcyAvPlxyXG4gICAgICAgIDxNYXBhLz5cclxuICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwibmFtZXMiOlsiSGVhZCIsIkhlYWRlciIsIkZpbHRyb3MiLCJNYXBhIiwiRm9vdGVyIiwiSW5kZXgiLCJ0aXRsZSIsImxpbmsiLCJyZWwiLCJocmVmIiwiaW50ZWdyaXR5IiwiY3Jvc3NvcmlnaW4iLCJzY3JpcHQiLCJzcmMiLCJkaXYiLCJjbGFzc05hbWUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});