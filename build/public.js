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
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.js */ "./src/js/main.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_main_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _single_products_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./single-products.js */ "./src/js/single-products.js");
/* harmony import */ var _single_products_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_single_products_js__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (() => {

// jQuery(document).ready(function ($) {
//   console.log("Loading main");

//   function adjustStyles() {
//     var viewportWidth = $(window).width();

//     // Adjust padding for .as-products-shop-page ul.wc-block-grid__products
//     $(".as-products-shop-page ul.wc-block-grid__products").each(function () {
//       if ($(this).hasClass("alignfull")) {
//         $(this).css({
//           "padding-left": "50px",
//           "padding-right": "0",
//         });
//       } else {
//         if (viewportWidth >= 1700) {
//           $(this).css({
//             "padding-left": "100px",
//             "padding-right": "100px",
//           });
//         } else if (viewportWidth >= 786 && viewportWidth < 1700) {
//           $(this).css({
//             "padding-left": "50px",
//             "padding-right": "50px",
//           });
//         } else {
//           $(this).css({
//             "padding-left": "20px",
//             "padding-right": "20px",
//           });
//         }
//       }
//     });

//     // Adjust padding for .wp-block-group-is-layout-constrained
//     $(".wp-block-group-is-layout-constrained").each(function () {
//       if ($(this).hasClass("alignfull")) {
//         $(this).css({
//           "padding-left": "0",
//           "padding-right": "0",
//         });
//       } else {
//         if (viewportWidth >= 1700) {
//           $(this).css({
//             "padding-left": "80px",
//             "padding-right": "80px",
//           });
//         } else if (viewportWidth >= 786 && viewportWidth < 1700) {
//           $(this).css({
//             "padding-left": "40px",
//             "padding-right": "40px",
//           });
//         } else {
//           $(this).css({
//             "padding-left": "10px",
//             "padding-right": "10px",
//           });
//         }
//       }
//     });
//   }

//   // Initial call to adjust styles on page load
//   adjustStyles();

//   // Adjust styles when the window is resized
//   $(window).resize(function () {
//     adjustStyles();
//   });
// });

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

/***/ "./src/js/single-products.js":
/*!***********************************!*\
  !*** ./src/js/single-products.js ***!
  \***********************************/
/***/ (() => {

// JavaScript to adjust transform on hover and mouse movement
document.addEventListener("DOMContentLoaded", () => {
  console.log("working single product ");
  const imageContainer = document.querySelector(".wc-block-product-gallery-large-image__image-element");
  const image = document.querySelector(".wc-block-woocommerce-product-gallery-large-image__image");
  let scale = 1.5; // The zoom scale when hovering
  let translateX = 0; // Initialize translateX to 0
  let translateY = 0; // Initialize translateY to 0

  // Function to update the transform based on mouse position
  const updateTransform = (mouseX, mouseY) => {
    // Get container dimensions and mouse position within the container
    const rect = imageContainer.getBoundingClientRect();
    const imageRect = image.getBoundingClientRect();

    // Calculate max translate values based on the scaled size
    const maxTranslateX = (imageRect.width - rect.width) / 2;
    const maxTranslateY = (imageRect.height - rect.height) / 2;

    // Get mouse offset within the container
    const offsetX = mouseX - rect.left; // Mouse X position relative to the container
    const offsetY = mouseY - rect.top; // Mouse Y position relative to the container

    // Center offset calculation, maps movement
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Determine translation values
    // If the mouse is right of center, move left; otherwise, move right
    translateX = (offsetX - centerX) / centerX * maxTranslateX;

    // If the mouse is above center, move up; otherwise, move down
    translateY = (offsetY - centerY) / centerY * maxTranslateY;
    console.log(translateX, translateY);
    // Apply clamped translation to ensure image stays within bounds
    image.style.transform = `scale(${scale}) translate(${translateX}px, ${translateY}px)`;
  };

  // Event listener for mouse movement within the container
  imageContainer.addEventListener("mousemove", e => {
    updateTransform(e.clientX, e.clientY);
  });

  // Center the image when the mouse enters the container
  imageContainer.addEventListener("mouseenter", () => {
    image.style.transform = `scale(${scale}) translate(0, 0)`;
  });

  // Keep the image zoomed when the mouse leaves
  imageContainer.addEventListener("mouseleave", () => {
    // Keeps the last position when leaving or resets to center:
    image.style.transform = `scale(${scale}) translate(0, 0)`;
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