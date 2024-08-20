/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ "./src/js/menu.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_menu_js__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/***/ (() => {

document.addEventListener("DOMContentLoaded", function () {
  // Define SVG icons as strings
  const downIconSVG = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9l6 6 6-6H6z" fill="#333"/>
                         </svg>`;
  const rightIconSVG = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 6l6 6-6 6V6z" fill="#333"/>
                         </svg>`;

  // Add down icon to top-level items with submenus
  const topLevelItems = document.querySelectorAll(".custom-nav-menu > .nav-menu-items > li");
  topLevelItems.forEach(item => {
    if (item.querySelector("ul")) {
      const downIcon = document.createElement("span");
      downIcon.innerHTML = downIconSVG; // Insert SVG icon
      item.querySelector("a").appendChild(downIcon);
    }
  });

  // Add right icon to sub-menu items with sub-submenus
  const subMenuItems = document.querySelectorAll(".custom-nav-menu .nav-menu-items ul > li");
  subMenuItems.forEach(item => {
    if (item.querySelector("ul")) {
      const rightIcon = document.createElement("span");
      rightIcon.innerHTML = rightIconSVG; // Insert SVG icon
      item.querySelector("a").appendChild(rightIcon);
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  // SVG for the hamburger menu
  const hamburgerIconSVG = `<svg width="24" height="24" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="100" height="10" fill="#333"></rect>
                                <rect y="30" width="100" height="10" fill="#333"></rect>
                                <rect y="60" width="100" height="10" fill="#333"></rect>
                            </svg>`;

  // SVG for the close button
  const closeIconSVG = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                           <path d="M6 18L18 6M6 6l12 12" stroke="#333" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                         </svg>`;

  // Create and insert the hamburger menu icon
  const hamburger = document.createElement("div");
  hamburger.classList.add("hamburger");
  hamburger.innerHTML = hamburgerIconSVG;

  // Create and insert the close button
  const closeButton = document.createElement("div");
  closeButton.classList.add("close-menu");
  closeButton.innerHTML = closeIconSVG;
  const navMenu = document.querySelector(".custom-nav-menu");
  navMenu.insertBefore(hamburger, navMenu.firstChild); // Insert hamburger before the menu

  // Insert close button into the menu
  const navMenuItems = document.querySelector(".nav-menu-items");
  navMenuItems.insertBefore(closeButton, navMenuItems.firstChild); // Insert close button at the top

  // Add event listener to toggle the menu visibility on hamburger click
  hamburger.addEventListener("click", function () {
    navMenuItems.classList.add("open");
    navMenuItems.style.transform = "translateX(0)";
  });

  // Add event listener to close the menu on close button click
  closeButton.addEventListener("click", function () {
    navMenuItems.classList.remove("open");
    navMenuItems.style.transform = "translateX(-100%)";
  });
});

/***/ }),

/***/ "./src/sass/index.scss":
/*!*****************************!*\
  !*** ./src/sass/index.scss ***!
  \*****************************/
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
/*!***********************!*\
  !*** ./src/public.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sass_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sass/index.scss */ "./src/sass/index.scss");
/* harmony import */ var _js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js */ "./src/js/index.js");
console.log("this is public file public.css");

console.log("this is public file public.js");

})();

/******/ })()
;
//# sourceMappingURL=public.js.map