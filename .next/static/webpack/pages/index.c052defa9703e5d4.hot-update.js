"use strict";
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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar Mapa = function() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var map = L.map(\"map\").setView([\n            -39.823651901716296,\n            -73.23533346913247\n        ], 13);\n        L.tileLayer(\"https://tile.openstreetmap.org/{z}/{x}/{y}.png\", {\n            maxZoom: 19,\n            minZoom: 13,\n            attribution: '&copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a>'\n        }).addTo(map);\n        var calabaza = L.marker([\n            -39.8331720628047,\n            -73.23839267401046\n        ]).addTo(map);\n        var sobel = L.marker([\n            -39.82590787810668,\n            -73.22706410284593\n        ]).addTo(map);\n        var pizzaiolo = L.marker([\n            -39.81266300647194,\n            -73.24022746051706\n        ]).addTo(map);\n        var sushimix = L.marker([\n            -39.83166524059258,\n            -73.24167585881948\n        ]).addTo(map);\n        var eltata = L.marker([\n            -39.83293151731654,\n            -73.23865657401043\n        ]).addTo(map);\n        var otakusushi = L.marker([\n            -39.840072,\n            -73.229310\n        ]).addTo(map);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"map\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\hydepad\\\\Documents\\\\Taller4\\\\LaPicada\\\\components\\\\Mapa.js\",\n        lineNumber: 32,\n        columnNumber: 10\n    }, _this);\n};\n_s(Mapa, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Mapa;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Mapa);\nvar _c;\n$RefreshReg$(_c, \"Mapa\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcGEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7O0FBQXlDO0FBRXpDLElBQU1FLElBQUksR0FBRyxXQUFNOztJQUdqQkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBTUUsR0FBRyxHQUFHQyxDQUFDLENBQUNELEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQ0UsT0FBTyxDQUM5QjtZQUFDLENBQUMsa0JBQWtCO1lBQUUsQ0FBQyxpQkFBaUI7U0FBQyxFQUN6QyxFQUFFLENBQ0g7UUFHREQsQ0FBQyxDQUFDRSxTQUFTLENBQUMsZ0RBQWdELEVBQUU7WUFDNURDLE9BQU8sRUFBRSxFQUFFO1lBQ1hDLE9BQU8sRUFBRSxFQUFFO1lBQ1hDLFdBQVcsRUFDVCwyRUFBMkU7U0FDOUUsQ0FBQyxDQUFDQyxLQUFLLENBQUNQLEdBQUcsQ0FBQyxDQUFDO1FBR2QsSUFBTVEsUUFBUSxHQUFHUCxDQUFDLENBQUNRLE1BQU0sQ0FBQztZQUFDLENBQUMsZ0JBQWdCO1lBQUUsQ0FBQyxpQkFBaUI7U0FBQyxDQUFDLENBQUNGLEtBQUssQ0FBQ1AsR0FBRyxDQUFDO1FBQzdFLElBQU1VLEtBQUssR0FBRVQsQ0FBQyxDQUFDUSxNQUFNLENBQUM7WUFBQyxDQUFDLGlCQUFpQjtZQUFFLENBQUMsaUJBQWlCO1NBQUMsQ0FBQyxDQUFDRixLQUFLLENBQUNQLEdBQUcsQ0FBQztRQUMxRSxJQUFNVyxTQUFTLEdBQUdWLENBQUMsQ0FBQ1EsTUFBTSxDQUFDO1lBQUMsQ0FBQyxpQkFBaUI7WUFBRSxDQUFDLGlCQUFpQjtTQUFDLENBQUMsQ0FBQ0YsS0FBSyxDQUFDUCxHQUFHLENBQUM7UUFDL0UsSUFBTVksUUFBUSxHQUFHWCxDQUFDLENBQUNRLE1BQU0sQ0FBQztZQUFDLENBQUMsaUJBQWlCO1lBQUUsQ0FBQyxpQkFBaUI7U0FBQyxDQUFDLENBQUNGLEtBQUssQ0FBQ1AsR0FBRyxDQUFDO1FBQzlFLElBQU1hLE1BQU0sR0FBRVosQ0FBQyxDQUFDUSxNQUFNLENBQUM7WUFBQyxDQUFDLGlCQUFpQjtZQUFFLENBQUMsaUJBQWlCO1NBQUMsQ0FBQyxDQUFDRixLQUFLLENBQUNQLEdBQUcsQ0FBQztRQUMzRSxJQUFNYyxVQUFVLEdBQUdiLENBQUMsQ0FBQ1EsTUFBTSxDQUFDO1lBQUMsQ0FBQyxTQUFTO1lBQUUsQ0FBQyxTQUFTO1NBQUMsQ0FBQyxDQUFDRixLQUFLLENBQUNQLEdBQUcsQ0FBQztJQUlsRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFBTyw4REFBQ2UsS0FBRztRQUFDQyxFQUFFLEVBQUMsS0FBSzs7Ozs7YUFBTyxDQUFDO0FBQzlCLENBQUM7R0E5QktqQixJQUFJO0FBQUpBLEtBQUFBLElBQUk7QUFnQ1YsK0RBQWVBLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL01hcGEuanM/YWRmYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBNYXBhID0gKCkgPT4ge1xyXG5cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IG1hcCA9IEwubWFwKFwibWFwXCIpLnNldFZpZXcoXHJcbiAgICAgIFstMzkuODIzNjUxOTAxNzE2Mjk2LCAtNzMuMjM1MzMzNDY5MTMyNDddLFxyXG4gICAgICAxM1xyXG4gICAgKTtcclxuICAgIFxyXG5cclxuICAgIEwudGlsZUxheWVyKFwiaHR0cHM6Ly90aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZ1wiLCB7XHJcbiAgICAgIG1heFpvb206IDE5LFxyXG4gICAgICBtaW5ab29tOiAxMyxcclxuICAgICAgYXR0cmlidXRpb246XHJcbiAgICAgICAgJyZjb3B5OyA8YSBocmVmPVwiaHR0cDovL3d3dy5vcGVuc3RyZWV0bWFwLm9yZy9jb3B5cmlnaHRcIj5PcGVuU3RyZWV0TWFwPC9hPicsXHJcbiAgICB9KS5hZGRUbyhtYXApO1xyXG5cclxuICAgIFxyXG4gICAgY29uc3QgY2FsYWJhemEgPSBMLm1hcmtlcihbLTM5LjgzMzE3MjA2MjgwNDcsIC03My4yMzgzOTI2NzQwMTA0Nl0pLmFkZFRvKG1hcCk7XHJcbiAgICBjb25zdCBzb2JlbD0gTC5tYXJrZXIoWy0zOS44MjU5MDc4NzgxMDY2OCwgLTczLjIyNzA2NDEwMjg0NTkzXSkuYWRkVG8obWFwKTtcclxuICAgIGNvbnN0IHBpenphaW9sbyA9IEwubWFya2VyKFstMzkuODEyNjYzMDA2NDcxOTQsIC03My4yNDAyMjc0NjA1MTcwNl0pLmFkZFRvKG1hcCk7XHJcbiAgICBjb25zdCBzdXNoaW1peCA9IEwubWFya2VyKFstMzkuODMxNjY1MjQwNTkyNTgsIC03My4yNDE2NzU4NTg4MTk0OF0pLmFkZFRvKG1hcCk7XHJcbiAgICBjb25zdCBlbHRhdGE9IEwubWFya2VyKFstMzkuODMyOTMxNTE3MzE2NTQsIC03My4yMzg2NTY1NzQwMTA0M10pLmFkZFRvKG1hcCk7XHJcbiAgICBjb25zdCBvdGFrdXN1c2hpID0gTC5tYXJrZXIoWy0zOS44NDAwNzIsIC03My4yMjkzMTBdKS5hZGRUbyhtYXApO1xyXG4gICAgXHJcblxyXG5cclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiA8ZGl2IGlkPVwibWFwXCI+PC9kaXY+O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFwYTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwiTWFwYSIsIm1hcCIsIkwiLCJzZXRWaWV3IiwidGlsZUxheWVyIiwibWF4Wm9vbSIsIm1pblpvb20iLCJhdHRyaWJ1dGlvbiIsImFkZFRvIiwiY2FsYWJhemEiLCJtYXJrZXIiLCJzb2JlbCIsInBpenphaW9sbyIsInN1c2hpbWl4IiwiZWx0YXRhIiwib3Rha3VzdXNoaSIsImRpdiIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Mapa.js\n"));

/***/ })

});