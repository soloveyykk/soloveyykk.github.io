$(document).ready(function () {
     $("#burg-menu").on("click", function (event) {
         event.preventDefault();

         $(this).toggleClass("active");
         $("#nav").toggleClass("active");
     });

     function checkScroll(scrollOffset) {
         if (scrollOffset >= introH) {
             header.addClass("fixed");
         } else {
             header.removeClass("fixed");
         }
     }
});