import $ from 'jquery';
import 'what-input';

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

    $(".menu-toggler").click(function () {
        $(this).toggleClass("active");
    });

    $('.slider-for').slick({
        arrows: false,
        fade: true,
        infinite: false,
        asNavFor: '.slider-nav',
    });
    $('.slider-nav').slick({
        asNavFor: '.slider-for',
        arrows: false,
        dots: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    dots: false
                }
            }
        ]
    });
    $('.slider-768').slick({
        arrows: false,
        dots: true,
        infinite: false
    });

    $('.slider-certificates').slick({
        infinite: false,
        arrows: false,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true
                }
            }
        ]
    });
    $('.news').slick({
        infinite: false,
        arrows: false,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 640,
                settings: 'unslick'
            }
        ]
    });
    $('.slider-items').slick({
        infinite: false,
        slidesToShow: 3,
        vertical: true,
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    vertical: false
                }
            }
        ]
    });

    $(".requisites .close-button").click(function () {
        $('.requisites').foundation('close');
    });

    var activate=false;
    $(window).resize(function() {
        if (($('body>div').hasClass('mainPage'))&&($(window).width() > 640)&&(activate===false)) {
            $('#pagepiling').pagepiling({
                direction: 'horizontal',
                anchors: [
                    'page1',
                    'page2',
                    'page3',
                    'page4',
                    'page5'
                ],
            });
            activate=true;
        }
    }).resize();

});

