/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./house.png */ \"./src/house.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./square.png */ \"./src/square.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./plus.png */ \"./src/plus.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./GitHub-Mark-Light-64px.png */ \"./src/GitHub-Mark-Light-64px.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\n    box-sizing: border-box;\\n    padding: 0;\\n    margin: 0;\\n}\\n\\n\\n#gridContainer {\\n    display: grid;\\n    grid-template-columns: 400px auto;\\n    grid-template-rows: 65px 65px auto 65px;\\n    grid-template-areas: \\n        'header header'\\n        'sidebar subhead'\\n        'sidebar main'\\n        'footer footer';\\n    width: 100vw;\\n    height: 100vh;\\n}\\n\\n#header {\\n    grid-area: header;\\n    background-color: #003566;\\n    display: grid;\\n    grid-template-columns: 100px 50px 40px 50px 40px 50px auto;\\n\\n}\\n\\n#homeButton {\\n    grid-column-start: 2;\\n    background-color: transparent;\\n    border: transparent;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    background-repeat: no-repeat;\\n    background-position: center;\\n    background-size: 45px;\\n}\\n\\n#sidebarButton {\\n    grid-column-start: 4;\\n    background-color: transparent;\\n    border: transparent;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\n    background-repeat: no-repeat;\\n    background-position: center;\\n    background-size: 45px;\\n}\\n\\n#addButton {\\n    grid-column-start: 6;\\n    background-color: transparent;\\n    border: transparent;\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \");\\n    background-repeat: no-repeat;\\n    background-position: center;\\n    background-size: 35px;\\n}\\n\\n#homeButton:hover {\\n    transform: scale(1.1);\\n}\\n\\n#sidebarButton:hover {\\n    transform: scale(1.1);\\n}\\n\\n#addButton:hover {\\n    transform: scale(1.1);\\n}\\n\\n#sidebar {\\n    grid-area: sidebar;\\n    color: whitesmoke;\\n    background-color: #000814;\\n    display: grid;\\n    grid-template-rows: 75px 75px 75px auto;\\n    z-index: 1;\\n    overflow-x: hidden;\\n}\\n\\n#onDeckButton {\\n    background-color: transparent;\\n    border: transparent;\\n    color: whitesmoke;\\n    font-weight: bold;\\n    font-size: 36px;\\n}\\n\\n#stagingButton {\\n    background-color: transparent;\\n    border: transparent;\\n    font-weight: bold;\\n    color: whitesmoke;\\n    font-size: 36px;\\n}\\n\\n#projectHeader {\\n    align-self: center;\\n    justify-self: center;\\n    font-size: 36px;\\n}\\n\\n#onDeckButton:hover {\\n    transform: scale(1.1);\\n}\\n\\n#stagingButton:hover {\\n    transform: scale(1.1);\\n}\\n\\n#subHeader {\\n    grid-area: subhead;\\n    display: grid;\\n    color: whitesmoke;\\n    background-color: #001D3D;\\n    padding-left: 50px;\\n    padding-top: 25px;\\n    justify-self: stretch;\\n    justify-content: center;\\n}\\n\\n#content {\\n    grid-area: main;\\n    display: grid;\\n    color: whitesmoke;\\n    background-color: #001D3D;\\n    padding-left: 50px;\\n    padding-top: 25px;\\n    justify-content: center;\\n    column-width: 100vw;\\n}\\n\\n#footer {\\n    grid-area: footer;\\n    color: whitesmoke;\\n    background-color: #000814;\\n    display: grid;\\n    grid-template-columns: 43.5vw 275px 50px auto;\\n}\\n\\n#footerStatement {\\n    grid-column-start: 2;\\n    font-size: 18px;\\n    align-self: center;\\n}\\n\\n#footerButton {\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n    background-color: transparent;\\n    border: transparent;\\n    background-repeat: no-repeat;\\n    background-position: center;\\n    background-size: 45px;\\n}\\n\\n#form {\\n    width: 850px;\\n    height: 250px;\\n    display: grid;\\n    grid-template-rows: 50px 150px 50px;\\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\\n    /* grid-template-areas: 'title'; */\\n    margin: 0 auto;\\n    box-sizing: border-box;\\n    border: solid black;\\n}\\n\\n#descriptionIn {\\n    resize: none;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todolist/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todolist/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/addItem.js":
/*!************************!*\
  !*** ./src/addItem.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./item */ \"./src/item.js\");\n\n\nlet addItem = () => {\n    let titleIn = document.getElementById(\"titleIn\");\n    let descriptionIn = document.getElementById(\"descriptionIn\");\n    let dueDateIn = document.getElementById(\"dueDateIn\");\n    let projectIn = document.getElementById(\"projectIn\");\n    let priorityIn = document.getElementById(\"priorityIn\");\n\n    let title = titleIn.value;\n    let description = descriptionIn.value;\n    let dueDate = dueDateIn.value;\n    let project = projectIn.value;\n    let priority = priorityIn.value;\n\n    const item = (0,_item__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(title, description, dueDate, priority, project)\n    return item;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addItem);\n\n//# sourceURL=webpack://todolist/./src/addItem.js?");

/***/ }),

/***/ "./src/clearInput.js":
/*!***************************!*\
  !*** ./src/clearInput.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet clearInput = () => {\n    let titleIn = document.getElementById(\"titleIn\");\n    let descriptionIn = document.getElementById(\"descriptionIn\");\n    let dueDateIn = document.getElementById(\"dueDateIn\");\n    let projectIn = document.getElementById(\"projectIn\");\n    let priorityIn = document.getElementById(\"priorityIn\");\n\n    titleIn.value = '';\n    descriptionIn.value = '';\n    dueDateIn.value = '';\n    projectIn.value = '';\n    priorityIn.value = '';\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clearInput);\n\n//# sourceURL=webpack://todolist/./src/clearInput.js?");

/***/ }),

/***/ "./src/contentDOM.js":
/*!***************************!*\
  !*** ./src/contentDOM.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet content = () => {\n    //defines the HTML elements that make up the content section of the main page\n    let content = document.createElement(\"DIV\");\n    content.setAttribute(\"id\", \"content\");\n\n    let tempContent = document.createElement(\"P\");\n    tempContent.innerText = \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \";\n    content.appendChild(tempContent);\n\n    return content;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (content);\n\n//# sourceURL=webpack://todolist/./src/contentDOM.js?");

/***/ }),

/***/ "./src/footerDOM.js":
/*!**************************!*\
  !*** ./src/footerDOM.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet footer = () => {\n    //defines the HTML elements that make up the footer of the home page\n    let footer = document.createElement(\"DIV\");\n    footer.setAttribute(\"id\", \"footer\");\n\n    //rough in footer elements\n    let footerStatement = document.createElement(\"H1\");\n    let footerButton = document.createElement(\"a\");\n\n    footerStatement.setAttribute(\"id\", \"footerStatement\");\n    footerStatement.innerText = \"Made By Josh Broughton\";\n    footerButton.setAttribute(\"id\", \"footerButton\");\n    footerButton.setAttribute(\"href\", \"https://github.com/JoshBroughton\");\n\n    footer.appendChild(footerStatement);\n    footer.appendChild(footerButton);\n\n    return footer;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);\n\n//# sourceURL=webpack://todolist/./src/footerDOM.js?");

/***/ }),

/***/ "./src/headerDOM.js":
/*!**************************!*\
  !*** ./src/headerDOM.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet header = () => {\n    let header = document.createElement(\"DIV\");\n    header.setAttribute(\"id\", \"header\");\n\n    //define header elements\n    let sidebarButton = document.createElement(\"BUTTON\");\n    let homeButton = document.createElement(\"BUTTON\");\n    let addButton = document.createElement(\"BUTTON\");\n    \n    sidebarButton.setAttribute(\"id\", \"sidebarButton\");\n    sidebarButton.setAttribute(\"type\", \"button\");\n    \n    homeButton.setAttribute(\"id\", \"homeButton\");\n    homeButton.setAttribute(\"type\", \"button\");\n    \n    addButton.setAttribute(\"id\", \"addButton\");\n    addButton.setAttribute(\"type\", \"button\");\n    ;\n\n    //append to header\n    header.appendChild(homeButton);\n    header.appendChild(sidebarButton);\n    header.appendChild(addButton);\n\n    return header;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);\n\n//# sourceURL=webpack://todolist/./src/headerDOM.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _headerDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./headerDOM */ \"./src/headerDOM.js\");\n/* harmony import */ var _sidebarDOM__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebarDOM */ \"./src/sidebarDOM.js\");\n/* harmony import */ var _subHeadDOM__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subHeadDOM */ \"./src/subHeadDOM.js\");\n/* harmony import */ var _contentDOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contentDOM */ \"./src/contentDOM.js\");\n/* harmony import */ var _footerDOM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footerDOM */ \"./src/footerDOM.js\");\n\n\n\n\n\n\nlet home = () => {\n    //define container and grid children\n    let container = document.createElement(\"DIV\");\n    container.setAttribute(\"id\", \"gridContainer\");\n    \n    //append children to grid container\n    container.appendChild((0,_headerDOM__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n    container.appendChild((0,_sidebarDOM__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n    container.appendChild((0,_subHeadDOM__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n    container.appendChild((0,_contentDOM__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\n    container.appendChild((0,_footerDOM__WEBPACK_IMPORTED_MODULE_4__[\"default\"])());\n    \n    return container;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);\n\n//# sourceURL=webpack://todolist/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _newItemDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newItemDOM */ \"./src/newItemDOM.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _addItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addItem */ \"./src/addItem.js\");\n/* harmony import */ var _clearInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clearInput */ \"./src/clearInput.js\");\n/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./item */ \"./src/item.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _contentDOM__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contentDOM */ \"./src/contentDOM.js\");\n/* harmony import */ var _sidebarToggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sidebarToggle */ \"./src/sidebarToggle.js\");\n\n\n\n\n \n\n\n\n\nlet loadHome = () => {\n    main = document.getElementById(\"main\");\n    (0,_contentDOM__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n    main.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])());\n};\nloadHome();\nlet clearContent = () => {\n    let parent = document.getElementById(\"content\");\n    while (parent.firstChild) {\n        parent.firstChild.remove();\n    }\n}\nclearContent();\nlet newItemButtonClick = () => {\n    clearContent();\n    main = document.getElementById(\"content\");\n    main.appendChild((0,_newItemDOM__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(projects, priorities));\n    let submitButton = document.getElementById(\"submit\");\n    submitButton.addEventListener('click', addNewItem);\n}\n//not done\nlet homeButtonClick = () => {\n    clearContent();\n    (0,_contentDOM__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n}\nlet addNewItem = () => {\n    items.push((0,_addItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n    (0,_clearInput__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    console.log(items[0].title);\n}\n\nlet addButton = document.getElementById(\"addButton\");\naddButton.addEventListener('click', newItemButtonClick);\n\nlet homeButton = document.getElementById(\"homeButton\");\nhomeButton.addEventListener('click', homeButtonClick);\n\nlet sidebarButton = document.getElementById('sidebarButton');\nsidebarButton.addEventListener('click', _sidebarToggle__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n\n//list to contain the projects\nconst projects = [\"Default\", \"Exercise\", \"Code\"];\nconst priorities = [\"Priority 1\", \"Priority 2\", \"Priority 3\", \"Priority 4\", \"Priority 5\"];\nconst items = [];\n//One object/collection should contain the list of projects\n//the project that a todo item belongs to should be keyed to the item\n//if a project is deleted, the user decides if the subtasks become associated\n//with default proejct (staging) or are deleted as well\n//a separate collection holds all tasks\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/item.js":
/*!*********************!*\
  !*** ./src/item.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet itemFactory = (itemTitle, itemDescription, itemDueDate, itemPriority, itemProject = \"Default\") => {\n    let title = itemTitle;\n    let description = itemDescription;\n    let dueDate = itemDueDate;\n    let priority = itemPriority;\n    let project = itemProject;\n    //setters for editing tasks\n    let setTitle = (newTitle) => title = newTitle;\n    let setDescription = (newDescription) => description = newDescription;\n    let setDueDate = (newDueDate) => dueDate = newDueDate;\n    let setPriority = (newPriority) => priority = newPriority;\n    let setProject = (newProject) => project = newProject;\n\n    return {title, description, dueDate, priority, project, \n        setTitle, setDescription, setDueDate, setPriority, setPriority, setProject}\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemFactory);\n\n//# sourceURL=webpack://todolist/./src/item.js?");

/***/ }),

/***/ "./src/newItemDOM.js":
/*!***************************!*\
  !*** ./src/newItemDOM.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet newItemDOM = (projects, priorities) => {\n    //create all the elements for inputting the fields to create a new item object\n    let textInput = document.createElement(\"FORM\");\n    let titleIn = document.createElement(\"INPUT\");\n    let descriptionIn = document.createElement(\"TEXTAREA\");\n    let dueDateIn = document.createElement(\"INPUT\");\n    let projectIn = document.createElement(\"SELECT\");\n    let priorityIn = document.createElement(\"SELECT\");\n    let submit = document.createElement(\"BUTTON\");\n    let cancel = document.createElement(\"BUTTON\");\n\n    textInput.setAttribute(\"id\", \"form\")\n    \n    //set basic attributes\n    titleIn.setAttribute(\"type\", \"text\");\n    titleIn.setAttribute(\"id\", \"titleIn\");\n    titleIn.setAttribute(\"name\", \"titleIn\");\n    titleIn.setAttribute(\"placeholder\", 'Task Title');\n\n    descriptionIn.setAttribute(\"type\", \"text\");\n    descriptionIn.setAttribute(\"id\", \"descriptionIn\");\n    descriptionIn.setAttribute(\"name\", \"descriptionIn\");\n    descriptionIn.setAttribute('placeholder', 'Description');\n\n    dueDateIn.setAttribute(\"type\", \"Date\");\n    dueDateIn.setAttribute(\"id\", \"dueDateIn\")\n    dueDateIn.innerText = \"Due Date\";\n    projectIn.setAttribute(\"type\", \"button\");\n    projectIn.setAttribute(\"id\", \"projectIn\");\n    projectIn.innerText = \"Project\";\n    priorityIn.setAttribute(\"type\", \"button\");\n    priorityIn.setAttribute(\"id\", \"priorityIn\");\n    priorityIn.innerText = \"Priority\";\n\n    submit.setAttribute(\"type\", \"button\");\n    submit.setAttribute(\"id\", \"submit\");\n    submit.innerText = \"Submit\";\n    cancel.setAttribute(\"type\", \"button\");\n    cancel.setAttribute(\"id\", \"cancel\");\n    cancel.innerText = \"Cancel\";\n    //append all sub items to the div and form\n    textInput.appendChild(titleIn);\n    textInput.appendChild(descriptionIn);\n    textInput.appendChild(dueDateIn);\n    textInput.appendChild(projectIn);\n    textInput.appendChild(priorityIn);\n    textInput.appendChild(submit);\n    textInput.appendChild(cancel);\n\n    //add drop down attributes\n    for (const project of projects) {\n        let option = document.createElement(\"OPTION\");\n        option.value = project;\n        option.innerText = project;\n        projectIn.appendChild(option);\n    }\n\n    for (const priority of priorities) {\n        let option = document.createElement(\"OPTION\");\n        option.value = priority;\n        option.innerText = priority;\n        priorityIn.appendChild(option);\n    }\n\n\n\n    return textInput;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newItemDOM);\n\n\n//# sourceURL=webpack://todolist/./src/newItemDOM.js?");

/***/ }),

/***/ "./src/sidebarDOM.js":
/*!***************************!*\
  !*** ./src/sidebarDOM.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet sidebar = () => {\n    let sidebar = document.createElement(\"DIV\");\n    sidebar.setAttribute(\"id\", \"sidebar\");\n\n    //define sidebar elements\n    let onDeckButton = document.createElement(\"BUTTON\");\n    let stagingButton = document.createElement(\"BUTTON\");\n    let projectHeader = document.createElement(\"H1\");\n    //projects will need to be dynamically appended the the header\n    onDeckButton.setAttribute(\"id\", \"onDeckButton\");\n    onDeckButton.setAttribute(\"type\", \"button\");\n    onDeckButton.innerText = \"On Deck\";\n    stagingButton.setAttribute(\"id\", \"stagingButton\");\n    stagingButton.setAttribute(\"type\", \"button\");\n    stagingButton.innerText = \"Staging\";\n    projectHeader.setAttribute(\"id\", \"projectHeader\");\n    projectHeader.innerText = \"Projects\";\n\n    //append to sidebar\n    sidebar.appendChild(onDeckButton);\n    sidebar.appendChild(stagingButton);\n    sidebar.appendChild(projectHeader);\n\n    return sidebar;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sidebar);\n\n//# sourceURL=webpack://todolist/./src/sidebarDOM.js?");

/***/ }),

/***/ "./src/sidebarToggle.js":
/*!******************************!*\
  !*** ./src/sidebarToggle.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet sidebarToggle = () => {\n    let sidebar = document.getElementById(\"sidebar\");\n    let style = window.getComputedStyle(sidebar);\n    let width = style.getPropertyValue('width');\n    let container = document.getElementById('gridContainer');\n    \n    if (width == '400px') {\n        sidebar.style.width = '0px';\n        container.style.gridTemplateColumns = '0px auto';\n\n    } else {\n        sidebar.style.width = '400px';\n        container.style.gridTemplateColumns = '400px auto';\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sidebarToggle);\n\n//# sourceURL=webpack://todolist/./src/sidebarToggle.js?");

/***/ }),

/***/ "./src/subHeadDOM.js":
/*!***************************!*\
  !*** ./src/subHeadDOM.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet subHeader = () => {\n    let subHeader = document.createElement(\"H1\");\n    subHeader.setAttribute(\"id\", \"subHeader\");\n    subHeader.innerText = \"SUBHEADER\";\n\n    return subHeader\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (subHeader);\n\n//# sourceURL=webpack://todolist/./src/subHeadDOM.js?");

/***/ }),

/***/ "./src/GitHub-Mark-Light-64px.png":
/*!****************************************!*\
  !*** ./src/GitHub-Mark-Light-64px.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2c0b3d17597d506011d6.png\";\n\n//# sourceURL=webpack://todolist/./src/GitHub-Mark-Light-64px.png?");

/***/ }),

/***/ "./src/house.png":
/*!***********************!*\
  !*** ./src/house.png ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"20a89cae33df563ea0ae.png\";\n\n//# sourceURL=webpack://todolist/./src/house.png?");

/***/ }),

/***/ "./src/plus.png":
/*!**********************!*\
  !*** ./src/plus.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5527a63d427ddea3e3ab.png\";\n\n//# sourceURL=webpack://todolist/./src/plus.png?");

/***/ }),

/***/ "./src/square.png":
/*!************************!*\
  !*** ./src/square.png ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"645fd42af2a8831c001a.png\";\n\n//# sourceURL=webpack://todolist/./src/square.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;