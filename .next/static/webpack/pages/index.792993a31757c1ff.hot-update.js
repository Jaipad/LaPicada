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

/***/ "./components/Filtros.js":
/*!*******************************!*\
  !*** ./components/Filtros.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/index.esm.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Filtros = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([\n        {\n            id: 1,\n            name: \"Elemento 1\",\n            checked: true\n        },\n        {\n            id: 2,\n            name: \"Elemento 2\",\n            checked: false\n        },\n        {\n            id: 3,\n            name: \"Elemento 3\",\n            checked: false\n        }, \n    ]), items = ref[0], setItems = ref[1];\n    var handleCheckboxChange = function(event, item) {\n        var checked = event.target.checked;\n        setItems(function(prevItems) {\n            return prevItems.map(function(prevItem) {\n                return prevItem.id === item.id ? (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({}, prevItem), {\n                    checked: checked\n                }) : prevItem;\n            });\n        });\n        console.log(items);\n    };\n    var elementos = [\n        {\n            id: 1,\n            name: \"Elemento 1\"\n        },\n        {\n            id: 2,\n            name: \"Elemento 2\"\n        },\n        {\n            id: 3,\n            name: \"Elemento 3\"\n        }, \n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_4__.Stack, {\n                spacing: 3,\n                children: items.map(function(item) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_5__.Checkbox, {\n                        isChecked: item.checked,\n                        onChange: function(event) {\n                            return handleCheckboxChange(event, item);\n                        },\n                        children: item.name\n                    }, item.id, false, {\n                        fileName: \"C:\\\\Users\\\\Johan\\\\Desktop\\\\Proyecto INFO104\\\\TheSofwareSquad\\\\components\\\\Filtros.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Johan\\\\Desktop\\\\Proyecto INFO104\\\\TheSofwareSquad\\\\components\\\\Filtros.js\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                style: {\n                    position: \"absolute\",\n                    left: \"600px\",\n                    top: \"50px\"\n                },\n                children: \"Horario:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Johan\\\\Desktop\\\\Proyecto INFO104\\\\TheSofwareSquad\\\\components\\\\Filtros.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Johan\\\\Desktop\\\\Proyecto INFO104\\\\TheSofwareSquad\\\\components\\\\Filtros.js\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, _this);\n};\n_s(Filtros, \"qxro+LWpKjoCIo5MCNqNnj3fejE=\");\n_c = Filtros;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Filtros);\nvar _c;\n$RefreshReg$(_c, \"Filtros\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpbHRyb3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7O0FBQStDO0FBV3JCO0FBRU87QUFFakMsSUFBTVksT0FBTyxHQUFHLFdBQU07O0lBQ3BCLElBQTBCRCxHQUl4QixHQUp3QkEsK0NBQVEsQ0FBQztRQUNqQztZQUFFRSxFQUFFLEVBQUUsQ0FBQztZQUFFQyxJQUFJLEVBQUUsWUFBWTtZQUFFQyxPQUFPLEVBQUUsSUFBSTtTQUFFO1FBQzVDO1lBQUVGLEVBQUUsRUFBRSxDQUFDO1lBQUVDLElBQUksRUFBRSxZQUFZO1lBQUVDLE9BQU8sRUFBRSxLQUFLO1NBQUU7UUFDN0M7WUFBRUYsRUFBRSxFQUFFLENBQUM7WUFBRUMsSUFBSSxFQUFFLFlBQVk7WUFBRUMsT0FBTyxFQUFFLEtBQUs7U0FBRTtLQUM5QyxDQUFDLEVBSktDLEtBQUssR0FBY0wsR0FJeEIsR0FKVSxFQUFFTSxRQUFRLEdBQUlOLEdBSXhCLEdBSm9CO0lBTXRCLElBQU1PLG9CQUFvQixHQUFHLFNBQUNDLEtBQUssRUFBRUMsSUFBSSxFQUFLO1FBQzVDLElBQU0sT0FBUyxHQUFLRCxLQUFLLENBQUNFLE1BQU0sQ0FBeEJOLE9BQU87UUFDZkUsUUFBUSxDQUFDLFNBQUNLLFNBQVM7bUJBQ2pCQSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxTQUFDQyxRQUFRO3VCQUNyQkEsUUFBUSxDQUFDWCxFQUFFLEtBQUtPLElBQUksQ0FBQ1AsRUFBRSxHQUFHLHdLQUFLVyxRQUFRO29CQUFFVCxPQUFPLEVBQVBBLE9BQU87a0JBQUUsR0FBR1MsUUFBUTthQUFBLENBQzlEO1NBQUEsQ0FDRixDQUFDO1FBQ0ZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVixLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELElBQU1XLFNBQVMsR0FBRztRQUNoQjtZQUFFZCxFQUFFLEVBQUUsQ0FBQztZQUFFQyxJQUFJLEVBQUUsWUFBWTtTQUFFO1FBQzdCO1lBQUVELEVBQUUsRUFBRSxDQUFDO1lBQUVDLElBQUksRUFBRSxZQUFZO1NBQUU7UUFDN0I7WUFBRUQsRUFBRSxFQUFFLENBQUM7WUFBRUMsSUFBSSxFQUFFLFlBQVk7U0FBRTtLQUM5QjtJQUVELHFCQUNFLDhEQUFDYyxLQUFHOzswQkFDRiw4REFBQzNCLG9EQUFLO2dCQUFDNEIsT0FBTyxFQUFFLENBQUM7MEJBQ2hCYixLQUFLLENBQUNPLEdBQUcsQ0FBQyxTQUFDSCxJQUFJO3lDQUNkLDhEQUFDYixzREFBUTt3QkFFUHVCLFNBQVMsRUFBRVYsSUFBSSxDQUFDTCxPQUFPO3dCQUN2QmdCLFFBQVEsRUFBRSxTQUFDWixLQUFLO21DQUFLRCxvQkFBb0IsQ0FBQ0MsS0FBSyxFQUFFQyxJQUFJLENBQUM7eUJBQUE7a0NBRXJEQSxJQUFJLENBQUNOLElBQUk7dUJBSkxNLElBQUksQ0FBQ1AsRUFBRTs7Ozs2QkFLSDtpQkFDWixDQUFDOzs7OztxQkFDSTswQkFDTiw4REFBQ21CLElBQUU7Z0JBQ0RDLEtBQUssRUFBRTtvQkFDTEMsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCQyxJQUFJLEVBQUUsT0FBTztvQkFDYkMsR0FBRyxFQUFFLE1BQU07aUJBQ1o7MEJBQ0YsVUFFRDs7Ozs7cUJBQUs7Ozs7OzthQUNELENBQ047QUFDSixDQUFDO0dBL0NLeEIsT0FBTztBQUFQQSxLQUFBQSxPQUFPO0FBaURiLCtEQUFlQSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9GaWx0cm9zLmpzPzJlYmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBTdGFjayB9IGZyb20gXCJAY2hha3JhLXVpL2xheW91dFwiO1xyXG5pbXBvcnQge1xyXG4gIEFjY29yZGlvbixcclxuICBBY2NvcmRpb25JdGVtLFxyXG4gIEFjY29yZGlvbkJ1dHRvbixcclxuICBBY2NvcmRpb25QYW5lbCxcclxuICBBY2NvcmRpb25JY29uLFxyXG4gIENoZWNrYm94LFxyXG4gIENoZWNrYm94R3JvdXAsXHJcbiAgVlN0YWNrLFxyXG4gIEhTdGFjayxcclxufSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEZpbHRyb3MgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2l0ZW1zLCBzZXRJdGVtc10gPSB1c2VTdGF0ZShbXHJcbiAgICB7IGlkOiAxLCBuYW1lOiBcIkVsZW1lbnRvIDFcIiwgY2hlY2tlZDogdHJ1ZSB9LFxyXG4gICAgeyBpZDogMiwgbmFtZTogXCJFbGVtZW50byAyXCIsIGNoZWNrZWQ6IGZhbHNlIH0sXHJcbiAgICB7IGlkOiAzLCBuYW1lOiBcIkVsZW1lbnRvIDNcIiwgY2hlY2tlZDogZmFsc2UgfSxcclxuICBdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hlY2tib3hDaGFuZ2UgPSAoZXZlbnQsIGl0ZW0pID0+IHtcclxuICAgIGNvbnN0IHsgY2hlY2tlZCB9ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgc2V0SXRlbXMoKHByZXZJdGVtcykgPT5cclxuICAgICAgcHJldkl0ZW1zLm1hcCgocHJldkl0ZW0pID0+XHJcbiAgICAgICAgcHJldkl0ZW0uaWQgPT09IGl0ZW0uaWQgPyB7IC4uLnByZXZJdGVtLCBjaGVja2VkIH0gOiBwcmV2SXRlbVxyXG4gICAgICApXHJcbiAgICApO1xyXG4gICAgY29uc29sZS5sb2coaXRlbXMpXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZWxlbWVudG9zID0gW1xyXG4gICAgeyBpZDogMSwgbmFtZTogXCJFbGVtZW50byAxXCIgfSxcclxuICAgIHsgaWQ6IDIsIG5hbWU6IFwiRWxlbWVudG8gMlwiIH0sXHJcbiAgICB7IGlkOiAzLCBuYW1lOiBcIkVsZW1lbnRvIDNcIiB9LFxyXG4gIF07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8U3RhY2sgc3BhY2luZz17M30+XHJcbiAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgIGlzQ2hlY2tlZD17aXRlbS5jaGVja2VkfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhldmVudCkgPT4gaGFuZGxlQ2hlY2tib3hDaGFuZ2UoZXZlbnQsIGl0ZW0pfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgPC9DaGVja2JveD5cclxuICAgICAgKSl9XHJcbiAgICA8L1N0YWNrPlxyXG4gICAgICA8aDJcclxuICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcclxuICAgICAgICAgIGxlZnQ6IFwiNjAwcHhcIixcclxuICAgICAgICAgIHRvcDogXCI1MHB4XCIsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIEhvcmFyaW86XHJcbiAgICAgIDwvaDI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsdHJvcztcclxuIl0sIm5hbWVzIjpbIkJveCIsIlN0YWNrIiwiQWNjb3JkaW9uIiwiQWNjb3JkaW9uSXRlbSIsIkFjY29yZGlvbkJ1dHRvbiIsIkFjY29yZGlvblBhbmVsIiwiQWNjb3JkaW9uSWNvbiIsIkNoZWNrYm94IiwiQ2hlY2tib3hHcm91cCIsIlZTdGFjayIsIkhTdGFjayIsInVzZVN0YXRlIiwiRmlsdHJvcyIsImlkIiwibmFtZSIsImNoZWNrZWQiLCJpdGVtcyIsInNldEl0ZW1zIiwiaGFuZGxlQ2hlY2tib3hDaGFuZ2UiLCJldmVudCIsIml0ZW0iLCJ0YXJnZXQiLCJwcmV2SXRlbXMiLCJtYXAiLCJwcmV2SXRlbSIsImNvbnNvbGUiLCJsb2ciLCJlbGVtZW50b3MiLCJkaXYiLCJzcGFjaW5nIiwiaXNDaGVja2VkIiwib25DaGFuZ2UiLCJoMiIsInN0eWxlIiwicG9zaXRpb24iLCJsZWZ0IiwidG9wIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Filtros.js\n"));

/***/ })

});