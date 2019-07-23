import $ from 'jquery';
import 'what-input';
import 'lightbox2';
import 'slick-carousel';

// Foundation JS relies on a global varaible. In ES6, all imports are hoisted
// to the top of the file so if we used`import` to import Foundation,
// it would execute earlier than we have assigned the global variable.
// This is why we have to use CommonJS require() here since it doesn't
// have the hoisting behavior.
window.jQuery = $;
window.$ = $;
require('foundation-sites');

// If you want to pick and choose which modules to include, comment out the above and uncomment
// the line below
//import './lib/foundation-explicit-pieces';



$(document).foundation();
$( document ).ready(function() {
    /*
    var activate=false;
        $(window).resize(function() {
            if (($(window).width() > 475)&&(activate===false)) {
                $('#pagepiling').pagepiling({
                    direction: 'horizontal',
                });
                activate=true;
            }
        }).resize();
    */
    $('#pagepiling').pagepiling({
        direction: 'horizontal',
    });

    $(".menu-toggler").click(function () {
        $(this).toggleClass("active");
    });

    if ($('.title-bar').length > 0) {
        $('.mainPage').css('padding-top', $(this).find('.title-bar').innerHeight());
    }

});

