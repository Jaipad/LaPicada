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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/src/_to_consumable_array.mjs */ \"./node_modules/@swc/helpers/src/_to_consumable_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/layout */ \"./node_modules/@chakra-ui/layout/dist/index.esm.js\");\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar Filtros = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), checkedItems = ref[0], setCheckedItems = ref[1];\n    var handleCheckboxChange = function(event) {\n        var _target = event.target, value = _target.value, checked = _target.checked;\n        if (checked) {\n            setCheckedItems((0,_swc_helpers_src_to_consumable_array_mjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(checkedItems).concat([\n                value\n            ]));\n        } else {\n            setCheckedItems(checkedItems.filter(function(item) {\n                return item !== value;\n            }));\n        }\n    };\n    var items = [\n        {\n            id: 1,\n            name: \"Elemento 1\"\n        },\n        {\n            id: 2,\n            name: \"Elemento 2\"\n        },\n        {\n            id: 3,\n            name: \"Elemento 3\"\n        }, \n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_layout__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n                spacing: 3,\n                children: items.map(function(item) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Checkbox, {\n                        value: item.name,\n                        isChecked: checkedItems.includes(item.name),\n                        onChange: handleCheckboxChange,\n                        children: item.name\n                    }, item.id, false, {\n                        fileName: \"C:\\\\Users\\\\Johan\\\\Desktop\\\\Proyecto INFO104\\\\TheSofwareSquad\\\\components\\\\Filtros.js\",\n                        lineNumber: 38,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Johan\\\\Desktop\\\\Proyecto INFO104\\\\TheSofwareSquad\\\\components\\\\Filtros.js\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                style: {\n                    position: \"absolute\",\n                    left: \"600px\",\n                    top: \"50px\"\n                },\n                children: \"Horario:\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Johan\\\\Desktop\\\\Proyecto INFO104\\\\TheSofwareSquad\\\\components\\\\Filtros.js\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Johan\\\\Desktop\\\\Proyecto INFO104\\\\TheSofwareSquad\\\\components\\\\Filtros.js\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, _this);\n};\n_s(Filtros, \"4bWmwqNpSmwrWYwBxf0uO8LDcFo=\");\n_c = Filtros;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Filtros);\nvar _c;\n$RefreshReg$(_c, \"Filtros\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0ZpbHRyb3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUErQztBQVdyQjtBQUVPO0FBRWpDLElBQU1ZLE9BQU8sR0FBRyxXQUFNOztJQUNwQixJQUF3Q0QsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUE3Q0UsWUFBWSxHQUFxQkYsR0FBWSxHQUFqQyxFQUFFRyxlQUFlLEdBQUlILEdBQVksR0FBaEI7SUFFcEMsSUFBTUksb0JBQW9CLEdBQUcsU0FBQ0MsS0FBSyxFQUFLO1FBQ3RDLElBQTJCQSxPQUFZLEdBQVpBLEtBQUssQ0FBQ0MsTUFBTSxFQUEvQkMsS0FBSyxHQUFjRixPQUFZLENBQS9CRSxLQUFLLEVBQUVDLE9BQU8sR0FBS0gsT0FBWSxDQUF4QkcsT0FBTztRQUN0QixJQUFJQSxPQUFPLEVBQUU7WUFDWEwsZUFBZSxDQUFDLHFGQUFJRCxZQUFZLENBQVpBLFFBQUo7Z0JBQWtCSyxLQUFLO2FBQUMsRUFBQyxDQUFDO1FBQzVDLE9BQU87WUFDTEosZUFBZSxDQUFDRCxZQUFZLENBQUNPLE1BQU0sQ0FBQyxTQUFDQyxJQUFJO3VCQUFLQSxJQUFJLEtBQUtILEtBQUs7YUFBQSxDQUFDLENBQUMsQ0FBQztRQUNqRSxDQUFDO0lBQ0gsQ0FBQztJQUVELElBQU1JLEtBQUssR0FBRztRQUNaO1lBQUVDLEVBQUUsRUFBRSxDQUFDO1lBQUVDLElBQUksRUFBRSxZQUFZO1NBQUU7UUFDN0I7WUFBRUQsRUFBRSxFQUFFLENBQUM7WUFBRUMsSUFBSSxFQUFFLFlBQVk7U0FBRTtRQUM3QjtZQUFFRCxFQUFFLEVBQUUsQ0FBQztZQUFFQyxJQUFJLEVBQUUsWUFBWTtTQUFFO0tBQzlCO0lBRUQscUJBQ0UsOERBQUNDLEtBQUc7OzBCQUNGLDhEQUFDeEIsb0RBQUs7Z0JBQUN5QixPQUFPLEVBQUUsQ0FBQzswQkFDZEosS0FBSyxDQUFDSyxHQUFHLENBQUMsU0FBQ04sSUFBSTt5Q0FDZCw4REFBQ2Qsc0RBQVE7d0JBRVBXLEtBQUssRUFBRUcsSUFBSSxDQUFDRyxJQUFJO3dCQUNoQkksU0FBUyxFQUFFZixZQUFZLENBQUNnQixRQUFRLENBQUNSLElBQUksQ0FBQ0csSUFBSSxDQUFDO3dCQUMzQ00sUUFBUSxFQUFFZixvQkFBb0I7a0NBRTdCTSxJQUFJLENBQUNHLElBQUk7dUJBTExILElBQUksQ0FBQ0UsRUFBRTs7Ozs2QkFNSDtpQkFDWixDQUFDOzs7OztxQkFDSTswQkFDUiw4REFBQ1EsSUFBRTtnQkFDREMsS0FBSyxFQUFFO29CQUNMQyxRQUFRLEVBQUUsVUFBVTtvQkFDcEJDLElBQUksRUFBRSxPQUFPO29CQUNiQyxHQUFHLEVBQUUsTUFBTTtpQkFDWjswQkFDRixVQUVEOzs7OztxQkFBSzs7Ozs7O2FBQ0QsQ0FDTjtBQUNKLENBQUM7R0EzQ0t2QixPQUFPO0FBQVBBLEtBQUFBLE9BQU87QUE2Q2IsK0RBQWVBLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0ZpbHRyb3MuanM/MmViZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIFN0YWNrIH0gZnJvbSBcIkBjaGFrcmEtdWkvbGF5b3V0XCI7XHJcbmltcG9ydCB7XHJcbiAgQWNjb3JkaW9uLFxyXG4gIEFjY29yZGlvbkl0ZW0sXHJcbiAgQWNjb3JkaW9uQnV0dG9uLFxyXG4gIEFjY29yZGlvblBhbmVsLFxyXG4gIEFjY29yZGlvbkljb24sXHJcbiAgQ2hlY2tib3gsXHJcbiAgQ2hlY2tib3hHcm91cCxcclxuICBWU3RhY2ssXHJcbiAgSFN0YWNrLFxyXG59IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgRmlsdHJvcyA9ICgpID0+IHtcclxuICBjb25zdCBbY2hlY2tlZEl0ZW1zLCBzZXRDaGVja2VkSXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGVja2JveENoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgY29uc3QgeyB2YWx1ZSwgY2hlY2tlZCB9ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgaWYgKGNoZWNrZWQpIHtcclxuICAgICAgc2V0Q2hlY2tlZEl0ZW1zKFsuLi5jaGVja2VkSXRlbXMsIHZhbHVlXSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRDaGVja2VkSXRlbXMoY2hlY2tlZEl0ZW1zLmZpbHRlcigoaXRlbSkgPT4gaXRlbSAhPT0gdmFsdWUpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBpdGVtcyA9IFtcclxuICAgIHsgaWQ6IDEsIG5hbWU6IFwiRWxlbWVudG8gMVwiIH0sXHJcbiAgICB7IGlkOiAyLCBuYW1lOiBcIkVsZW1lbnRvIDJcIiB9LFxyXG4gICAgeyBpZDogMywgbmFtZTogXCJFbGVtZW50byAzXCIgfSxcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPFN0YWNrIHNwYWNpbmc9ezN9PlxyXG4gICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgIHZhbHVlPXtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgIGlzQ2hlY2tlZD17Y2hlY2tlZEl0ZW1zLmluY2x1ZGVzKGl0ZW0ubmFtZSl9XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGVja2JveENoYW5nZX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2l0ZW0ubmFtZX1cclxuICAgICAgICAgIDwvQ2hlY2tib3g+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvU3RhY2s+XHJcbiAgICAgIDxoMlxyXG4gICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxyXG4gICAgICAgICAgbGVmdDogXCI2MDBweFwiLFxyXG4gICAgICAgICAgdG9wOiBcIjUwcHhcIixcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAgSG9yYXJpbzpcclxuICAgICAgPC9oMj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0cm9zO1xyXG4iXSwibmFtZXMiOlsiQm94IiwiU3RhY2siLCJBY2NvcmRpb24iLCJBY2NvcmRpb25JdGVtIiwiQWNjb3JkaW9uQnV0dG9uIiwiQWNjb3JkaW9uUGFuZWwiLCJBY2NvcmRpb25JY29uIiwiQ2hlY2tib3giLCJDaGVja2JveEdyb3VwIiwiVlN0YWNrIiwiSFN0YWNrIiwidXNlU3RhdGUiLCJGaWx0cm9zIiwiY2hlY2tlZEl0ZW1zIiwic2V0Q2hlY2tlZEl0ZW1zIiwiaGFuZGxlQ2hlY2tib3hDaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiY2hlY2tlZCIsImZpbHRlciIsIml0ZW0iLCJpdGVtcyIsImlkIiwibmFtZSIsImRpdiIsInNwYWNpbmciLCJtYXAiLCJpc0NoZWNrZWQiLCJpbmNsdWRlcyIsIm9uQ2hhbmdlIiwiaDIiLCJzdHlsZSIsInBvc2l0aW9uIiwibGVmdCIsInRvcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Filtros.js\n"));

/***/ })

});