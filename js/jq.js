$(document).ready(function () {
    /* coding pop up */
    $(".bt2").click(function () {
        var popup = $(this).data("pop");
        $(popup).fadeIn();
        $("body").css("overflow", "hidden");
    });
    $(".p-opup .popup-content i").click(function () {
        $("#popup").fadeOut();
        $("body").css("overflow", "visible");
    });
    $("#popup").click(function () {
        $(this).fadeOut();
        $("body").css("overflow", "visible");
    });
    $("#popup .popup-content").click(function (e) {
        e.stopPropagation();
    });
    /* coding pop up */

    /* coding add class on specific window */

    $(window).each(function () {
        if ($(this).width() <= 992) {
            $(".header-content .col-lg-4").addClass("order-2");
            $(".header-content .col-lg-6").addClass("order-1");
            $(".header-content .col-lg-2").addClass("order-3");
        }

    });
    $(window).resize(function () {
        if ($(this).width() <= 992) {
            $(".header-content .col-lg-4").addClass("order-2");
            $(".header-content .col-lg-6").addClass("order-1");
            $(".header-content .col-lg-2").addClass("order-3");
        } else {
            $(".header-content .col-lg-4").addClass("order-1");
            $(".header-content .col-lg-6").addClass("order-2");
            $(".header-content .col-lg-2").addClass("order-3");

        }

    });




    /* coding add class on specific window */
    /* coding chevron moving */

    (function moving() {
        $(".tv i.fa-chevron-down").animate({
            bottom: "75px"
        }, 500, function () {
            $(".tv i.fa-chevron-down").animate({
                bottom: "60px"
            }, 500, function () {

                moving();

            });
        });
    }());
    /* coding chevron moving */
    /* coding removeclass */
    /*
    $(window).each(function () {
        if ($(this).width() <= 1200) {
            $(" .panels-jo .card").removeClass("hvr-pulse-shrink , hvr-pulse-grow");

        }

    });
    $(window).resize(function () {
        if ($(this).width() <= 1200) {
            $(" .panels-jo .card").removeClass("hvr-pulse-shrink , hvr-pulse-grow");
        } else {
            $(" .panels-jo .card").addClass("hvr-pulse-shrink , hvr-pulse-grow");

        }

    });
*/

    /* coding removeclass */
    /* add active for animation on scroll */

    $(window).scroll(function () {
        //  console.log($(window).scrollTop());
        if ($(window).scrollTop() > $('.panels-jo').offset().top - 50) {
            $(".panels-jo .col-xl-3").addClass("active");
        }

    });

    /* add active for animation on scroll */
    /* add class act */
    $(".live-sport ul li").click(function () {
        $(this).addClass("act");
        $(this).siblings("li").removeClass("act");
    });


    /* add class act */
    $(".tv i").click(function () {
        $("html, body").animate({
            scrollTop: $(".live-sport").offset().top
        }, 1000);
    });

});