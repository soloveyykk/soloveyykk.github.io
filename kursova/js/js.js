$(function () {
     $("#burg-menu").on("click", function (event) {
         event.preventDefault();

         $(this).toggleClass("active");
         $("#nav").toggleClass("active");
     });

     $('#contact-active') .click(function(){
        if($('.m6') .text() =="eng")
		{
            $('.m1') .html('About <span>game</span>');
            $('.m2') .html('System <span>requirements</span>');
            $('.m3') .html('Recent <span>Update</span>');
            $('.m4') .html('System requirements for <span>MAC OS X</span>');
            $('.m5') .html('Download the <span>game</span>');
            $('.m6') .html('UA');
        }

        else {
            $('.m1') .html('про цю <span>гру</span>');
            $('.m2') .html('Системні <span>вимоги</span>');
            $('.m3') .html('Нещодавні <span>оновлення</span>');
            $('.m4') .html('СИСТЕМНІ ВИМОГИ ДЛЯ <span>Mac OS X</span>');
            $('.m5') .html('Скачать <span>игру</span>');
            $('.m6') .text('ENG');
        }

     })

     // hide #back-top first
    $("#back-top").hide();

    $(function () {
             $(window).scroll(function () {
                     if ($(this).scrollTop() > 200) {
                             $('#back-top').fadeIn();
                     } else {
                             $('#back-top').fadeOut();
                     }
             });

             $('#back-top a').click(function () {
                     $('body,html').animate({
                             scrollTop: 0
                     }, 900);
                     return false;
             });
     });
});