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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar Mapa = function() {\n    _s();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var map = L.map(\"map\").setView([\n            -39.823651901716296,\n            -73.23533346913247\n        ], 13);\n        L.tileLayer(\"https://tile.openstreetmap.org/{z}/{x}/{y}.png\", {\n            maxZoom: 19,\n            minZoom: 13,\n            attribution: '&copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a>'\n        }).addTo(map);\n        var calabaza = L.marker([\n            -39.8331720628047,\n            -73.23839267401046\n        ]).addTo(map);\n        var sobel = L.marker([\n            -39.82590787810668,\n            -73.22706410284593\n        ]).addTo(map);\n        var pizzaiolo = L.marker([\n            -39.81266300647194,\n            -73.24022746051706\n        ]).addTo(map);\n        var sushimix = L.marker([\n            -39.83166524059258,\n            -73.24167585881948\n        ]).addTo(map);\n        var eltata = L.marker([\n            -39.83293151731654,\n            -73.23865657401043\n        ]).addTo(map);\n        var otakusushi = L.marker([\n            -39.840072,\n            -73.229310\n        ]).addTo(map);\n        var chilenito = L.marker([\n            -39.838362735408126,\n            -73.2165807528393\n        ]).addTo(map);\n        var eneene = L.marker([\n            -39.81786913862792,\n            -73.24467371834038\n        ]).addTo(map);\n        var zonazero = L.marker([\n            -39.81880908521896,\n            -73.2476395568231\n        ]).addTo(map);\n        var McDonalds = L.marker([\n            -39.812871223173566,\n            -73.24616973168179\n        ]).addTo(map);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"map\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\hydepad\\\\Documents\\\\Taller4\\\\LaPicada\\\\components\\\\Mapa.js\",\n        lineNumber: 37,\n        columnNumber: 10\n    }, _this);\n};\n_s(Mapa, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Mapa;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Mapa);\nvar _c;\n$RefreshReg$(_c, \"Mapa\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcGEuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7O0FBQXlDO0FBRXpDLElBQU1FLElBQUksR0FBRyxXQUFNOztJQUdqQkQsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBTUUsR0FBRyxHQUFHQyxDQUFDLENBQUNELEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQ0UsT0FBTyxDQUM5QjtZQUFDLENBQUMsa0JBQWtCO1lBQUUsQ0FBQyxpQkFBaUI7U0FBQyxFQUN6QyxFQUFFLENBQ0g7UUFHREQsQ0FBQyxDQUFDRSxTQUFTLENBQUMsZ0RBQWdELEVBQUU7WUFDNURDLE9BQU8sRUFBRSxFQUFFO1lBQ1hDLE9BQU8sRUFBRSxFQUFFO1lBQ1hDLFdBQVcsRUFDVCwyRUFBMkU7U0FDOUUsQ0FBQyxDQUFDQyxLQUFLLENBQUNQLEdBQUcsQ0FBQyxDQUFDO1FBR2QsSUFBTVEsUUFBUSxHQUFHUCxDQUFDLENBQUNRLE1BQU0sQ0FBQztZQUFDLENBQUMsZ0JBQWdCO1lBQUUsQ0FBQyxpQkFBaUI7U0FBQyxDQUFDLENBQUNGLEtBQUssQ0FBQ1AsR0FBRyxDQUFDO1FBQzdFLElBQU1VLEtBQUssR0FBRVQsQ0FBQyxDQUFDUSxNQUFNLENBQUM7WUFBQyxDQUFDLGlCQUFpQjtZQUFFLENBQUMsaUJBQWlCO1NBQUMsQ0FBQyxDQUFDRixLQUFLLENBQUNQLEdBQUcsQ0FBQztRQUMxRSxJQUFNVyxTQUFTLEdBQUdWLENBQUMsQ0FBQ1EsTUFBTSxDQUFDO1lBQUMsQ0FBQyxpQkFBaUI7WUFBRSxDQUFDLGlCQUFpQjtTQUFDLENBQUMsQ0FBQ0YsS0FBSyxDQUFDUCxHQUFHLENBQUM7UUFDL0UsSUFBTVksUUFBUSxHQUFHWCxDQUFDLENBQUNRLE1BQU0sQ0FBQztZQUFDLENBQUMsaUJBQWlCO1lBQUUsQ0FBQyxpQkFBaUI7U0FBQyxDQUFDLENBQUNGLEtBQUssQ0FBQ1AsR0FBRyxDQUFDO1FBQzlFLElBQU1hLE1BQU0sR0FBRVosQ0FBQyxDQUFDUSxNQUFNLENBQUM7WUFBQyxDQUFDLGlCQUFpQjtZQUFFLENBQUMsaUJBQWlCO1NBQUMsQ0FBQyxDQUFDRixLQUFLLENBQUNQLEdBQUcsQ0FBQztRQUMzRSxJQUFNYyxVQUFVLEdBQUdiLENBQUMsQ0FBQ1EsTUFBTSxDQUFDO1lBQUMsQ0FBQyxTQUFTO1lBQUUsQ0FBQyxTQUFTO1NBQUMsQ0FBQyxDQUFDRixLQUFLLENBQUNQLEdBQUcsQ0FBQztRQUNoRSxJQUFNZSxTQUFTLEdBQUdkLENBQUMsQ0FBQ1EsTUFBTSxDQUFDO1lBQUMsQ0FBQyxrQkFBa0I7WUFBRSxDQUFDLGdCQUFnQjtTQUFDLENBQUMsQ0FBQ0YsS0FBSyxDQUFDUCxHQUFHLENBQUM7UUFDL0UsSUFBTWdCLE1BQU0sR0FBR2YsQ0FBQyxDQUFDUSxNQUFNLENBQUM7WUFBQyxDQUFDLGlCQUFpQjtZQUFFLENBQUMsaUJBQWlCO1NBQUMsQ0FBQyxDQUFDRixLQUFLLENBQUNQLEdBQUcsQ0FBQztRQUM1RSxJQUFNaUIsUUFBUSxHQUFHaEIsQ0FBQyxDQUFDUSxNQUFNLENBQUM7WUFBQyxDQUFDLGlCQUFpQjtZQUFFLENBQUMsZ0JBQWdCO1NBQUMsQ0FBQyxDQUFDRixLQUFLLENBQUNQLEdBQUcsQ0FBQztRQUM3RSxJQUFNa0IsU0FBUyxHQUFHakIsQ0FBQyxDQUFDUSxNQUFNLENBQUM7WUFBQyxDQUFDLGtCQUFrQjtZQUFFLENBQUMsaUJBQWlCO1NBQUMsQ0FBQyxDQUFDRixLQUFLLENBQUNQLEdBQUcsQ0FBQztJQUtsRixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFFUCxxQkFBTyw4REFBQ21CLEtBQUc7UUFBQ0MsRUFBRSxFQUFDLEtBQUs7Ozs7O2FBQU8sQ0FBQztBQUM5QixDQUFDO0dBbkNLckIsSUFBSTtBQUFKQSxLQUFBQSxJQUFJO0FBcUNWLCtEQUFlQSxJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYXBhLmpzP2FkZmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTWFwYSA9ICgpID0+IHtcclxuXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBtYXAgPSBMLm1hcChcIm1hcFwiKS5zZXRWaWV3KFxyXG4gICAgICBbLTM5LjgyMzY1MTkwMTcxNjI5NiwgLTczLjIzNTMzMzQ2OTEzMjQ3XSxcclxuICAgICAgMTNcclxuICAgICk7XHJcbiAgICBcclxuXHJcbiAgICBMLnRpbGVMYXllcihcImh0dHBzOi8vdGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmdcIiwge1xyXG4gICAgICBtYXhab29tOiAxOSxcclxuICAgICAgbWluWm9vbTogMTMsXHJcbiAgICAgIGF0dHJpYnV0aW9uOlxyXG4gICAgICAgICcmY29weTsgPGEgaHJlZj1cImh0dHA6Ly93d3cub3BlbnN0cmVldG1hcC5vcmcvY29weXJpZ2h0XCI+T3BlblN0cmVldE1hcDwvYT4nLFxyXG4gICAgfSkuYWRkVG8obWFwKTtcclxuXHJcbiAgICBcclxuICAgIGNvbnN0IGNhbGFiYXphID0gTC5tYXJrZXIoWy0zOS44MzMxNzIwNjI4MDQ3LCAtNzMuMjM4MzkyNjc0MDEwNDZdKS5hZGRUbyhtYXApO1xyXG4gICAgY29uc3Qgc29iZWw9IEwubWFya2VyKFstMzkuODI1OTA3ODc4MTA2NjgsIC03My4yMjcwNjQxMDI4NDU5M10pLmFkZFRvKG1hcCk7XHJcbiAgICBjb25zdCBwaXp6YWlvbG8gPSBMLm1hcmtlcihbLTM5LjgxMjY2MzAwNjQ3MTk0LCAtNzMuMjQwMjI3NDYwNTE3MDZdKS5hZGRUbyhtYXApO1xyXG4gICAgY29uc3Qgc3VzaGltaXggPSBMLm1hcmtlcihbLTM5LjgzMTY2NTI0MDU5MjU4LCAtNzMuMjQxNjc1ODU4ODE5NDhdKS5hZGRUbyhtYXApO1xyXG4gICAgY29uc3QgZWx0YXRhPSBMLm1hcmtlcihbLTM5LjgzMjkzMTUxNzMxNjU0LCAtNzMuMjM4NjU2NTc0MDEwNDNdKS5hZGRUbyhtYXApO1xyXG4gICAgY29uc3Qgb3Rha3VzdXNoaSA9IEwubWFya2VyKFstMzkuODQwMDcyLCAtNzMuMjI5MzEwXSkuYWRkVG8obWFwKTtcclxuICAgIGNvbnN0IGNoaWxlbml0byA9IEwubWFya2VyKFstMzkuODM4MzYyNzM1NDA4MTI2LCAtNzMuMjE2NTgwNzUyODM5M10pLmFkZFRvKG1hcCk7XHJcbiAgICBjb25zdCBlbmVlbmUgPSBMLm1hcmtlcihbLTM5LjgxNzg2OTEzODYyNzkyLCAtNzMuMjQ0NjczNzE4MzQwMzhdKS5hZGRUbyhtYXApO1xyXG4gICAgY29uc3Qgem9uYXplcm8gPSBMLm1hcmtlcihbLTM5LjgxODgwOTA4NTIxODk2LCAtNzMuMjQ3NjM5NTU2ODIzMV0pLmFkZFRvKG1hcCk7XHJcbiAgICBjb25zdCBNY0RvbmFsZHMgPSBMLm1hcmtlcihbLTM5LjgxMjg3MTIyMzE3MzU2NiwgLTczLjI0NjE2OTczMTY4MTc5XSkuYWRkVG8obWFwKTtcclxuICAgIFxyXG5cclxuXHJcblxyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIDxkaXYgaWQ9XCJtYXBcIj48L2Rpdj47XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXBhO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJNYXBhIiwibWFwIiwiTCIsInNldFZpZXciLCJ0aWxlTGF5ZXIiLCJtYXhab29tIiwibWluWm9vbSIsImF0dHJpYnV0aW9uIiwiYWRkVG8iLCJjYWxhYmF6YSIsIm1hcmtlciIsInNvYmVsIiwicGl6emFpb2xvIiwic3VzaGltaXgiLCJlbHRhdGEiLCJvdGFrdXN1c2hpIiwiY2hpbGVuaXRvIiwiZW5lZW5lIiwiem9uYXplcm8iLCJNY0RvbmFsZHMiLCJkaXYiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Mapa.js\n"));

/***/ })

});