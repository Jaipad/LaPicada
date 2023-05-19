"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/locales";
exports.ids = ["pages/api/locales"];
exports.modules = {

/***/ "(api)/./pages/api/locales.js":
/*!******************************!*\
  !*** ./pages/api/locales.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"locales\": () => (/* binding */ locales)\n/* harmony export */ });\nconst locales = [\n    {\n        Id: 26,\n        Nombre: \"La Calabaza\",\n        Ubicación: {\n            lat: 39.833345077603774,\n            long: -73.23840340329585\n        },\n        Horario: {\n            abierto: \"12:00\",\n            Cerrado: \"22:00\"\n        },\n        Tipo_Comida: [\n            \"Hamburguesas\",\n            \"Completos\"\n        ],\n        Tipo_de_pago: [\n            {\n                nombre: \"Efectivo\",\n                acepta: true\n            },\n            {\n                nombre: \"D\\xe9bito\",\n                acepta: true\n            },\n            {\n                nombre: \"Cr\\xe9dito\",\n                acepta: false\n            },\n            {\n                nombre: \"Sodexo\",\n                acpeta: true\n            }, \n        ]\n    }, \n];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    res.status(200).json(locales);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9jYWxlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPLE1BQU1BLE9BQU8sR0FBRztJQUNyQjtRQUNFQyxFQUFFLEVBQUUsRUFBRTtRQUNOQyxNQUFNLEVBQUUsYUFBYTtRQUNyQkMsU0FBUyxFQUFFO1lBQUVDLEdBQUcsRUFBRSxrQkFBa0I7WUFBRUMsSUFBSSxFQUFFLENBQUMsaUJBQWlCO1NBQUU7UUFDaEVDLE9BQU8sRUFBRTtZQUFFQyxPQUFPLEVBQUUsT0FBTztZQUFFQyxPQUFPLEVBQUUsT0FBTztTQUFFO1FBQy9DQyxXQUFXLEVBQUU7WUFBQyxjQUFjO1lBQUUsV0FBVztTQUFDO1FBQzFDQyxZQUFZLEVBQUU7WUFDWjtnQkFBRUMsTUFBTSxFQUFFLFVBQVU7Z0JBQUVDLE1BQU0sRUFBRSxJQUFJO2FBQUU7WUFDcEM7Z0JBQUVELE1BQU0sRUFBRSxXQUFRO2dCQUFFQyxNQUFNLEVBQUUsSUFBSTthQUFFO1lBQ2xDO2dCQUFFRCxNQUFNLEVBQUUsWUFBUztnQkFBRUMsTUFBTSxFQUFFLEtBQUs7YUFBRTtZQUNwQztnQkFBRUQsTUFBTSxFQUFFLFFBQVE7Z0JBQUVFLE1BQU0sRUFBRSxJQUFJO2FBQUU7U0FDbkM7S0FDRjtDQUNGLENBQUM7QUFFRixpRUFBZSxPQUFPQyxHQUFHLEVBQUVDLEdBQUcsR0FBSztJQUNqQ0EsR0FBRyxDQUFDQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ2pCLE9BQU8sQ0FBQyxDQUFDO0FBQ2hDLENBQUMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2luZm8xMDQtMjAyMC0xLy4vcGFnZXMvYXBpL2xvY2FsZXMuanM/N2FjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgbG9jYWxlcyA9IFtcclxuICB7XHJcbiAgICBJZDogMjYsXHJcbiAgICBOb21icmU6IFwiTGEgQ2FsYWJhemFcIixcclxuICAgIFViaWNhY2nDs246IHsgbGF0OiAzOS44MzMzNDUwNzc2MDM3NzQsIGxvbmc6IC03My4yMzg0MDM0MDMyOTU4NSB9LFxyXG4gICAgSG9yYXJpbzogeyBhYmllcnRvOiBcIjEyOjAwXCIsIENlcnJhZG86IFwiMjI6MDBcIiB9LFxyXG4gICAgVGlwb19Db21pZGE6IFtcIkhhbWJ1cmd1ZXNhc1wiLCBcIkNvbXBsZXRvc1wiXSxcclxuICAgIFRpcG9fZGVfcGFnbzogW1xyXG4gICAgICB7IG5vbWJyZTogXCJFZmVjdGl2b1wiLCBhY2VwdGE6IHRydWUgfSxcclxuICAgICAgeyBub21icmU6IFwiRMOpYml0b1wiLCBhY2VwdGE6IHRydWUgfSxcclxuICAgICAgeyBub21icmU6IFwiQ3LDqWRpdG9cIiwgYWNlcHRhOiBmYWxzZSB9LFxyXG4gICAgICB7IG5vbWJyZTogXCJTb2RleG9cIiwgYWNwZXRhOiB0cnVlIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxLCByZXMpID0+IHtcclxuICByZXMuc3RhdHVzKDIwMCkuanNvbihsb2NhbGVzKTtcclxufTtcclxuIl0sIm5hbWVzIjpbImxvY2FsZXMiLCJJZCIsIk5vbWJyZSIsIlViaWNhY2nDs24iLCJsYXQiLCJsb25nIiwiSG9yYXJpbyIsImFiaWVydG8iLCJDZXJyYWRvIiwiVGlwb19Db21pZGEiLCJUaXBvX2RlX3BhZ28iLCJub21icmUiLCJhY2VwdGEiLCJhY3BldGEiLCJyZXEiLCJyZXMiLCJzdGF0dXMiLCJqc29uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/locales.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/locales.js"));
module.exports = __webpack_exports__;

})();