$(document).ready(function () {
  $(".return-close-btn").click(function () {
    window.location.replace("./orderprocess.html");
  });

  $(".brand-list-more").click(function () {
    $(".brand-list-hide").toggle();
    $(this).toggle()
})

  $(".filtered-product-list-wrapper .filtered-product-top-header .filtered-product-top-header-left .form-check-label").click(function () {
  $(this).addClass("active");
})  
  
  $('.filter-fav').click(function () {

    $(this).removeClass("bi-heart");
    $(this).addClass("bi-heart-fill");
     $(".filter-fav").click(function () {
				$(this).addClass("bi-heart");
       $(this).removeClass("bi-heart-fill");
       window.location.reload()
			});

  })

  $("#grid-view ,#vertical-view").click(function () {
		$(".filtered-product-list-vertical").toggle();
		$(".filtered-product-list-show-grid").toggle();
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

 

  $(".home-slider").owlCarousel({
		items: 1,
		loop: true,
		margin: 30,
		nav: true,
		dots: false,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 1,
			},
		},
	});


  $(".home-slider-2").owlCarousel({
		items: 1,
		loop: true,
		margin: 30,
		
		dots: false,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1,
			},
			1000: {
				items: 1,
			},
		},
	});


  $(".hot-deals-slider").owlCarousel({
		items: 1,
		loop: true,
		margin: 30,
		nav: true,
		dots: false,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 4,
			},
			1000: {
				items: 6,
			},
		},
	});


 $(".carousel-top-deal-1").owlCarousel({
		items: 1,
		loop: true,
		margin: 30,
		dots: false,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 3,
			},
			1000: {
				items: 4,
			},
		},
 });


 var owl11 = $(".carousel-top-deal-1");
 owl11.owlCarousel();
 // Go to the next item
 $(".topdeal1NextBtn").click(function () {
		owl11.trigger("next.owl.carousel");
 });
 // Go to the previous item
 $(".topdeal1PrevBtn").click(function () {
		// With optional speed parameter
		// Parameters has to be in square bracket '[]'
		owl11.trigger("prev.owl.carousel", [300]);
 });
  

 $(".carousel-top-deal-2").owlCarousel({
		items: 1,
		loop: true,
		margin: 30,
		dots: false,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 3,
			},
			1000: {
				items: 4,
			},
		},
 });


 var owl12 = $(".carousel-top-deal-2");
 owl12.owlCarousel();
 // Go to the next item
 $(".topdeal2NextBtn").click(function () {
		owl12.trigger("next.owl.carousel");
 });
 // Go to the previous item
 $(".topdeal2PrevBtn").click(function () {
		// With optional speed parameter
		// Parameters has to be in square bracket '[]'
		owl12.trigger("prev.owl.carousel", [300]);
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



window.onload = function () {
	slideOne();
	slideTwo();
};

let sliderOne = document.getElementById("slider-1");
let sliderTwo = document.getElementById("slider-2");
let displayValOne = document.getElementById("range1");
let displayValTwo = document.getElementById("range2");
let minGap = 0;
let sliderTrack = document.querySelector(".slider-track");
let sliderMaxValue = document.getElementById("slider-1").max;

function slideOne() {
	if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
		sliderOne.value = parseInt(sliderTwo.value) - minGap;
	}
	displayValOne.textContent = sliderOne.value;
	fillColor();
}
function slideTwo() {
	if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
		sliderTwo.value = parseInt(sliderOne.value) + minGap;
	}
	displayValTwo.textContent = sliderTwo.value;
	fillColor();
}
function fillColor() {
	percent1 = (sliderOne.value / sliderMaxValue) * 100;
	percent2 = (sliderTwo.value / sliderMaxValue) * 100;
	sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #EC7C03 ${percent1}% , #EC7C03 ${percent2}%, #dadae5 ${percent2}%)`;
}
