


$(document).ready(function () {
    $(".return-close-btn").click(function() {
        window.location.replace("./orderprocess.html")
    });


$(".carousel-fashion").owlCarousel({
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
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
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
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
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
     autoplay: true,
     autoplayTimeout: 5000,
     autoplayHoverPause: true,
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
   autoplay: true,
   autoplayTimeout: 5000,
   autoplayHoverPause: true,
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
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
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
  
  
})






 
  




 










