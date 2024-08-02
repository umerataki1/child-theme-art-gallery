/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/enquire-here-popup.js":
/*!**************************************!*\
  !*** ./src/js/enquire-here-popup.js ***!
  \**************************************/
/***/ (() => {

(function ($) {
  $(document).ready(function () {
    $("#enquire-here").click(function () {
      $("#popup").fadeIn();
    });
    $(".close").click(function () {
      $("#popup").fadeOut();
    });
    $(document).on('keydown', function (event) {
      if (event.keyCode === 27) {
        // ESC key code is 27
        $("#popup").fadeOut();
      }
    });
    $(document).mouseup(function (e) {
      var container = $(".popup-content");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        $("#popup").fadeOut();
      }
    });
  });
})(jQuery);

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _product_detail_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-detail-tabs */ "./src/js/product-detail-tabs.js");
/* harmony import */ var _product_detail_tabs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_product_detail_tabs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _enquire_here_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enquire-here-popup */ "./src/js/enquire-here-popup.js");
/* harmony import */ var _enquire_here_popup__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_enquire_here_popup__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _slick_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slick-carousel */ "./src/js/slick-carousel.js");
/* harmony import */ var _slick_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_slick_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wbw_filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wbw-filters */ "./src/js/wbw-filters.js");
/* harmony import */ var _wbw_filters__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wbw_filters__WEBPACK_IMPORTED_MODULE_3__);





/***/ }),

/***/ "./src/js/product-detail-tabs.js":
/*!***************************************!*\
  !*** ./src/js/product-detail-tabs.js ***!
  \***************************************/
/***/ (() => {

(function ($) {
  $(document).ready(function () {
    $('.tab').on('click', function (evt) {
      evt.preventDefault();
      $(this).removeClass('active');
      $(this).addClass('active');
      var sel = this.getAttribute('data-toggle-target');
      $('.tab-content').removeClass('active').filter(sel).addClass('active');
    });
    $('.tab-1').on('click', function (evt) {
      evt.preventDefault();
      $(this).addClass('active');
      $('.tab-2').removeClass('active');
    });
    $('.tab-2').on('click', function (evt) {
      evt.preventDefault();
      $(this).addClass('active');
      $('.tab-1').removeClass('active');
    });
    $('.tab-1-readmore').on('click', function (evt) {
      evt.preventDefault();
      var innerTab = $('.tab-inner-1');
      readMoreTabs(this, innerTab);
    });
    $('.tab-2-readmore').on('click', function (evt) {
      evt.preventDefault();
      var innerTab = $('.tab-inner-2');
      readMoreTabs(this, innerTab);
    });
    function readMoreTabs(readMore, tabInner) {
      var readMoreBtn = readMore;
      var tabInnerContent = tabInner;
      tabInnerContent.toggleClass('active');
      if (tabInnerContent.hasClass('active')) {
        $(readMoreBtn).text('Read less -');
      } else {
        $(readMoreBtn).text('Read more +');
      }
    }
  });
})(jQuery);

/***/ }),

/***/ "./src/js/slick-carousel.js":
/*!**********************************!*\
  !*** ./src/js/slick-carousel.js ***!
  \**********************************/
/***/ (() => {

(function ($) {
  $(document).ready(function () {
    $('.wrap-loop-img-item').slick({
      dots: false,
      infinite: false,
      arrows: true,
      prevArrow: '<button class="slick-prev slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 267 512.43" width="14" height="14"><path fill-rule="nonzero" d="M263.78 18.9c4.28-4.3 4.3-11.31.04-15.64a10.865 10.865 0 0 0-15.48-.04L3.22 248.38c-4.28 4.3-4.3 11.31-.04 15.64l245.16 245.2c4.28 4.3 11.22 4.28 15.48-.05s4.24-11.33-.04-15.63L26.5 256.22 263.78 18.9z"/></svg></button>',
      nextArrow: '<button class="slick-next slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 267 512.43"><path fill-rule="nonzero" d="M3.22 18.9c-4.28-4.3-4.3-11.31-.04-15.64s11.2-4.35 15.48-.04l245.12 245.16c4.28 4.3 4.3 11.31.04 15.64L18.66 509.22a10.874 10.874 0 0 1-15.48-.05c-4.26-4.33-4.24-11.33.04-15.63L240.5 256.22 3.22 18.9z"/></svg></button>'
    });
    $('.es-woocommerce-categories').slick({
      dots: false,
      infinite: false,
      arrows: true,
      speed: 300,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      prevArrow: '<button id="es-mega-menu-slider-button" class="slick-prev slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 267 512.43" width="14" height="14"><path fill-rule="nonzero" d="M263.78 18.9c4.28-4.3 4.3-11.31.04-15.64a10.865 10.865 0 0 0-15.48-.04L3.22 248.38c-4.28 4.3-4.3 11.31-.04 15.64l245.16 245.2c4.28 4.3 11.22 4.28 15.48-.05s4.24-11.33-.04-15.63L26.5 256.22 263.78 18.9z"/></svg></button>',
      nextArrow: '<button id="es-mega-menu-slider-button" class="slick-next slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 267 512.43"><path fill-rule="nonzero" d="M3.22 18.9c-4.28-4.3-4.3-11.31-.04-15.64s11.2-4.35 15.48-.04l245.12 245.16c4.28 4.3 4.3 11.31.04 15.64L18.66 509.22a10.874 10.874 0 0 1-15.48-.05c-4.26-4.33-4.24-11.33.04-15.63L240.5 256.22 3.22 18.9z"/></svg></button>'
    });
  });

  // $("#menu-item-855").addClass("open");
  // $("#menu-item-856").addClass("open");
})(jQuery);

/***/ }),

/***/ "./src/js/wbw-filters.js":
/*!*******************************!*\
  !*** ./src/js/wbw-filters.js ***!
  \*******************************/
/***/ (() => {

(function ($) {
  $(document).ready(function () {
    // Function to check if an element is overflowing
    function isOverflowing($element) {
      return $element[0].scrollHeight > $element[0].clientHeight;
    }

    // Select all .wpfFilterContent elements but skip the first one
    $('.wpfFilterContent').slice(1).each(function () {
      var $filterContent = $(this);
      var $filterVerScroll = $filterContent.find('.wpfFilterVerScroll');

      // Check if the content is overflowing
      if (isOverflowing($filterVerScroll)) {
        // Create and append the button
        var $button = $('<div class="wp-block-button is-style-read-more-link wbw-filter-more"><a class="wp-block-button__link has-black-color has-text-color has-link-color has-text-align-center wp-element-button">More</a></div>');
        $filterContent.append($button);

        // Bind click event to the button
        $button.on('click', function () {
          $filterVerScroll.toggleClass('wp-height');
          var isExpanded = $filterVerScroll.hasClass('wp-height');
          $button.find('a').text(isExpanded ? 'Less' : 'More');
        });

        // Initial check to set the button text appropriately
        $button.find('a').text('More');
      }
    });
  });
})(jQuery);

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
console.log('this is public file public.css');

console.log('this is public file public.js');

})();

/******/ })()
;
//# sourceMappingURL=public.js.map