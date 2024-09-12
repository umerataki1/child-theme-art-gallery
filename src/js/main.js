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
