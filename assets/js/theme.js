$(document).ready(function () {
  $(".return-close-btn").click(function () {
    window.location.replace("./orderprocess.html");
  });

  // login popup
  $(".navbar-login-btn p").click(function () {
    $(".login-signup-overlay-wrappper").toggle();
  });
  $(
    ".login-signup-overlay-content-wrapper .login-content-wrapper .forgot-password"
  ).click(function () {
    $(".login-content-wrapper , .forgotpass-content-wrapper").toggle();
  });
  $(".forgotpass-content-wrapper .sign-in-btn").click(function () {
    $(".login-content-wrapper , .forgotpass-content-wrapper").toggle();
  });
  $(".forgotpass-2-content-wrapper .sign-in-btn").click(function () {
    $(".login-content-wrapper , .forgotpass-2-content-wrapper").toggle();
  });
  $(".login-content-wrapper .sign-in-btn").click(function () {
    $(".register-content-wrapper , .login-content-wrapper").toggle();
  });
  $(".forgotpass-content-wrapper .orange-btn").click(function (e) {
    $(".forgotpass-2-content-wrapper , .forgotpass-content-wrapper").toggle();
  });
  $(".register-content-wrapper .orange-btn").click(function (e) {
    $(".register-2-content-wrapper , .register-content-wrapper").toggle();
  });
  $(".login-content-wrapper .otp-btn").click(function (e) {
    $(".register-content-wrapper , .login-content-wrapper").toggle();
  });
  $(".register-content-wrapper .sign-in-btn").click(function (e) {
    $(".register-content-wrapper , .login-content-wrapper").toggle();
  });
  $(".register-2-content-wrapper .sign-in-btn").click(function (e) {
    $(".register-2-content-wrapper , .login-content-wrapper").toggle();
  });
  $(".login-close-btn").click(function (e) {
    $(".login-signup-overlay-wrappper").toggle();
  });

  // login popup
  $(".navbar-search .form-control").keypress(function (e) {
    $(".navbar-search-history").show();
  });
  $(".navbar-search-history .search-history-description").click(function (e) {
    var searchword = $(this).find("h6").text();
    $(".navbar-search .form-control").val(searchword);
  $(".navbar-search-history").hide();
  });

  $(".carousel-fashion").owlCarousel({
    items: 1,
    loop: true,
    margin: 30,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 5,
      },
    },
  });

  var owl = $(".carousel-fashion");
  owl.owlCarousel();
  // Go to the next item
  $(".fashionNextBtn").click(function () {
    owl.trigger("next.owl.carousel");
  });
  // Go to the previous item
  $(".fashionPrevBtn").click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger("prev.owl.carousel", [300]);
  });

  $(".women-carousel-fashion").owlCarousel({
    items: 1,
    loop: true,
    margin: 30,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 5,
      },
    },
  });

  var owl1 = $(".women-carousel-fashion");
  owl1.owlCarousel();
  // Go to the next item
  $(".womenfashionNextBtn").click(function () {
    owl1.trigger("next.owl.carousel");
  });
  // Go to the previous item
  $(".womenfashionPrevBtn").click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl1.trigger("prev.owl.carousel", [300]);
  });

  $(".men-carousel-fashion").owlCarousel({
    items: 1,
    loop: true,
    margin: 30,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 5,
      },
    },
  });

  var owl2 = $(".men-carousel-fashion");
  owl2.owlCarousel();
  // Go to the next item
  $(".menfashionNextBtn").click(function () {
    owl2.trigger("next.owl.carousel");
  });
  // Go to the previous item
  $(".menfashionPrevBtn").click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl2.trigger("prev.owl.carousel", [300]);
  });

  $(".carousel-home").owlCarousel({
    items: 1,
    loop: true,
    margin: 30,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 5,
      },
    },
  });

  var owl3 = $(".carousel-home");
  owl3.owlCarousel();
  // Go to the next item
  $(".homeNextBtn").click(function () {
    owl3.trigger("next.owl.carousel");
  });
  // Go to the previous item
  $(".homePrevBtn").click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl3.trigger("prev.owl.carousel", [300]);
  });

  $(".carousel-fashion2").owlCarousel({
    items: 1,
    loop: true,
    margin: 30,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 5,
      },
    },
  });

  var owl4 = $(".carousel-fashion2");
  owl4.owlCarousel();
  // Go to the next item
  $(".fashion2NextBtn").click(function () {
    owl4.trigger("next.owl.carousel");
  });
  // Go to the previous item
  $(".fashion2PrevBtn").click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl4.trigger("prev.owl.carousel", [300]);
  });

  $(".carousel-fashion3").owlCarousel({
    items: 1,
    loop: true,
    margin: 30,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 5,
      },
    },
  });

  var owl5 = $(".carousel-fashion3");
  owl5.owlCarousel();
  // Go to the next item
  $(".fashion3NextBtn").click(function () {
    owl5.trigger("next.owl.carousel");
  });
  // Go to the previous item
  $(".fashion3PrevBtn").click(function () {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl5.trigger("prev.owl.carousel", [300]);
  });
});
