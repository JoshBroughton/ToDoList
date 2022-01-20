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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _newItemDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newItemDOM */ \"./src/newItemDOM.js\");\n\n\nlet newItem = () => {\n    main = document.getElementById(\"main\");\n    main.appendChild((0,_newItemDOM__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n}\n\nnewItem();\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/newItemDOM.js":
/*!***************************!*\
  !*** ./src/newItemDOM.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nlet newItemDOM = (title = \"\", description = \"\", dueDate = \"\", priority = \"\", project = \"none\") => {\n    //create all the elements for inputting the fields to create a new item object\n    let container = document.createElement(\"DIV\");\n    let textInput = document.createElement(\"FORM\");\n    let titleLabel = document.createElement(\"LABEL\");\n    let titleIn = document.createElement(\"INPUT\");\n    let descriptionLabel = document.createElement(\"LABEL\");\n    let descriptionIn = document.createElement(\"INPUT\");\n    let dueDateIn = document.createElement(\"BUTTON\");\n    let projectIn = document.createElement(\"BUTTON\");\n    let priorityIn = document.createElement(\"BUTTON\");\n    let submit = document.createElement(\"BUTTON\");\n    let cancel = document.createElement(\"BUTTON\");\n\n    \n    //set basic attributes\n    titleLabel.setAttribute(\"for\", \"title\");\n    titleIn.setAttribute(\"type\", \"text\");\n    titleIn.setAttribute(\"id\", \"titleIn\");\n    titleIn.setAttribute(\"name\", \"titleIn\");\n\n    descriptionLabel.setAttribute(\"for\", \"description\");\n    descriptionIn.setAttribute(\"type\", \"text\");\n    descriptionIn.setAttribute(\"id\", \"descriptionIn\");\n    descriptionIn.setAttribute(\"name\", \"descriptionIn\");\n\n    dueDateIn.setAttribute(\"type\", \"button\");\n    dueDateIn.setAttribute(\"id\", \"dueDateIn\")\n    dueDateIn.innerText = \"Due Date\";\n    projectIn.setAttribute(\"type\", \"button\");\n    projectIn.setAttribute(\"id\", \"projectIn\");\n    projectIn.innerText = \"Project\";\n    priorityIn.setAttribute(\"type\", \"button\");\n    priorityIn.setAttribute(\"id\", \"priorityIn\");\n    priorityIn.innerText = \"Priority\";\n\n    submit.setAttribute(\"type\", \"button\");\n    submit.setAttribute(\"id\", \"submit\");\n    submit.innerText = \"Submit\";\n    cancel.setAttribute(\"type\", \"button\");\n    cancel.setAttribute(\"id\", \"cancel\");\n    cancel.innerText = \"Cancel\";\n    //append all sub items to the div and form\n    container.appendChild(textInput);\n    textInput.appendChild(titleLabel);\n    textInput.appendChild(titleIn);\n    textInput.appendChild(descriptionLabel);\n    textInput.appendChild(descriptionIn);\n    textInput.appendChild(dueDateIn);\n    textInput.appendChild(projectIn);\n    textInput.appendChild(priorityIn);\n    textInput.appendChild(submit);\n    textInput.appendChild(cancel);\n\n    return container;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newItemDOM);\n\n\n//# sourceURL=webpack://todolist/./src/newItemDOM.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;