$(document).ready(function () {
    var ourApproach_height = $(".ourApproach").offset().top;
    var navbar_height = $("#mainCarousel").offset().top;
    $(".jumbotron").height($(window).height());
    $(window).resize(function () {
        $(".jumbotron").height($(window).height());
    });
    $("#btn").click(function () {
        $(".nav-r").addClass("btn-click");
    });
    $(window).scroll(function () {
        var this_scrollTop = $(this).scrollTop();
        if (this_scrollTop > ourApproach_height) {
            $(".go-top").show();
        }
        else {
            $(".go-top").hide();
        }
        if (this_scrollTop > navbar_height) {
            $(".navbar").addClass("navbar-fixed-top navbar-inverse");
        }
        else {
            $(".navbar").removeClass("navbar-fixed-top navbar-inverse");
        }
    });
    $("#nav-r-dropdown").mouseenter(function () {
        $(this).children('ul').slideDown();
        $(this).find('span').removeClass("fa fa-angle-down")
            .addClass("fa fa-angle-up");
    }).mouseleave(function () {
        $(this).children('ul').slideUp();
        $(this).find('span').removeClass("fa fa-angle-up")
            .addClass("fa fa-angle-down");
    });
    $(".ourApproach-img").mouseenter(function () {
        $(this).addClass("animated rotateIn");
    }).mouseleave(function () {
        $(this).removeClass("animated rotateIn");
    })
});