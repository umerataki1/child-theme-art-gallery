/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js-admin/block-styles.js":
/*!**************************************!*\
  !*** ./src/js-admin/block-styles.js ***!
  \**************************************/
/***/ (() => {

// EXAMPLE_CODE This is example, you may remove
wp.domReady(() => {
  wp.blocks.registerBlockStyle("core/columns", [{
    name: "equal-height",
    label: "Equal Height"
  }, {
    name: "reverse",
    label: "Reverse On Mobile Devices"
  }]);
  wp.blocks.registerBlockStyle("core/column", [{
    name: "sticky-column",
    label: "Sticky"
  }]);
  wp.blocks.registerBlockStyle("core/button", [{
    name: "outline-green",
    label: "Outline Green"
  }, {
    name: "read-more-link",
    label: "Read More"
  }, {
    name: "fill-big",
    label: "Fill Big"
  }]);
  wp.blocks.registerBlockStyle("core/gallery", [{
    name: "vertically-centered",
    label: "Vertically Centered"
  }]);
  wp.blocks.registerBlockStyle("core/cover", [{
    name: "just-image",
    label: "Just Image"
  }]);
  wp.blocks.registerBlockStyle("core/group", [{
    name: "full-width-on-small-devices",
    label: "Full Width - Small Devices"
  }]);
});

/***/ }),

/***/ "./src/js-admin/index.js":
/*!*******************************!*\
  !*** ./src/js-admin/index.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block-styles */ "./src/js-admin/block-styles.js");
/* harmony import */ var _block_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_block_styles__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/sass-admin/index.scss":
/*!***********************************!*\
  !*** ./src/sass-admin/index.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_admin_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass-admin/index.scss */ "./src/sass-admin/index.scss");
/* harmony import */ var _js_admin_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js-admin/index */ "./src/js-admin/index.js");

console.log("import ./scss-admin/index.scss");

console.log("import ./js-admin/index.js");
})();

/******/ })()
;
//# sourceMappingURL=index.js.map