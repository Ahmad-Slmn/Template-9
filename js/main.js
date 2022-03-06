/*global $, jQuery, alert*/

$(function () {

    "use strict";

    $(".carousel").carousel({

        interval: 6000
    });




    // Show My Options
    $(".gear-check").click(function () {

        $(".color-option").toggle("slow");

        $(".color-option ul li").click(function () {

            $(".color-option").hide("slow");
        });
    });

    $(".fa-gear").click(function () {

        $(this).toggleClass("fa-spin");

        $(".settings-box").toggleClass("show")
    })


    // Change Theme Color On Click

    if (localStorage.getItem("color") !== null) {

        $(":root").css("--color1", localStorage.getItem("color"));


        $(".colors-list li").each(function () {

            $(this).removeClass("active")

            if ($(this).data("value") === localStorage.getItem("color")) {


                $(this).addClass("active")
            }
        });


    } else {
        $(":root").css("--color1", "#E41B17")
    }



    $(".colors-list li").click(function () {

        $(this).addClass("active").siblings().removeClass("active")

        $(".settings-box").toggleClass("show")

        $(":root").css("--color1", $(this).data("value"));

        localStorage.setItem("color", $(this).data("value"));

    })


    $(".progress-bar").click(function () {

        console.log($(this).data("width"))
    })


    $(window).scroll(function () {

        //Do My Progress
        if (this.scrollY >= $(".our-skills").offset().top - 50) {

            $(".progress-bar").each(function () {

                $(this).css("width", $(this).data("width"))

                $(".progress span").addClass("active")
            });


        } else {

            $(".progress-bar").each(function () {

                $(this).css("width", 0)

                $(".progress span").removeClass("active")
            });
        }

        // Show The Arrow-up If Window scrollY Is >= 700
        if (this.scrollY >= 700) {

            $(".fa-arrow-up").fadeIn("slow")

        } else {
            $(".fa-arrow-up").fadeOut("slow")
        }

    })

    // Click To Go Up
    $(".fa-arrow-up").click(function () {

        $(window).scrollTop(0)
    })

    // Smoothly Scroll To Elment
    $(".navbar-collapse ul li a:not(:contains('company'))").click(function (e) {

        e.preventDefault();

        $(".navbar-collapse").toggleClass("show");

        $("html, body").animate({

            scrollTop: $("#" + $(this).data("scroll")).offset().top + 1

        })
    })




    // Sync Navbar Links With My All Sections
    $(window).scroll(function () {

        $("section, #carouselExampleIndicators").each(function () {

            if ($(window).scrollTop() > $(this).offset().top) {


                let sections = $(this).attr('id');

                $(".navbar-collapse ul li a").removeClass("change");

                $('.navbar-collapse ul li a[data-scroll="' + sections + '"]').addClass("change")

            }
        })
    });
    
    //bullets
    $(".nav-bullets .bullet").click(function () {

        document.querySelector($(this).data("section")).scrollIntoView({

            behavior: "smooth"

        })

    })

    //slect the span in bullets-option


    let bulletlocal = localStorage.getItem("bullet")

    if (bulletlocal !== null) {

        $(".bullets-option span").removeClass("active")

        if (bulletlocal === "show") {

            $(".nav-bullets .bullet").css("display", "block")

            $(".mynav").removeClass("fixed-top")

            $(".bullets-option .yes").addClass("active")

        } else {
            $(".nav-bullets .bullet").css("display", "none")

            $(".mynav").addClass("fixed-top")

            $(".bullets-option .no").addClass("active")
        }
    }

    $(".bullets-option span").click(function () {

        $(this).addClass("active").siblings().removeClass("active")

        $(".settings-box").toggleClass("show")

        localStorage.setItem("bullet", "show")

        if ($(this).data("display") === "show") {

            $(".nav-bullets .bullet").css("display", "block")

            $(".mynav").removeClass("fixed-top")



        } else {

            $(".nav-bullets .bullet").css("display", "none");

            $(".mynav").addClass("fixed-top")

            localStorage.setItem("bullet", "hide")
        }
    })

    //reset options
    $(".reset-options").click(function () {

        localStorage.clear();

        window.location.reload()

        $(".settings-box").toggleClass("show")
    })
})
