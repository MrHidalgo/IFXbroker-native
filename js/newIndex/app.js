"use strict";

/*
*
* ============================
* ============================
*
* Include lib:
*
* - webFontLoader.js;
* - preventBehavior.js;
* - svg4everybody.js;
*
* ============================
* ============================
* */

/**
 * @name initPreventBehavior
 *
 * @description
 */
var initPreventBehavior = function initPreventBehavior() {

  var link = document.querySelectorAll("a");

  link.forEach(function (val, idx) {

    val.addEventListener("click", function (e) {
      if (val.getAttribute("href") === "#") {
        e.preventDefault();
      }
    });
  });
};

/**
 * @name initSmoothScroll
 *
 * @description Smooth transition to anchors to the block.
 */
var initSmoothScroll = function initSmoothScroll() {
  var btnName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "[anchor-js]";
  var animateSpeed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;


  $(btnName).on("click", function (e) {

    var linkHref = $(e.currentTarget).attr('href'),
        headerHeight = $(".header").outerHeight() || 0,
        topHeightOffset = $(linkHref).offset().top - headerHeight;

    $('body, html').animate({
      scrollTop: topHeightOffset
    }, animateSpeed);
  });
};

/**
 * @name initStellar
 * @description Stellar.js is a jQuery plugin that provides parallax scrolling effects to any scrolling element.
 *
 * Parallax Elements
 * - data-stellar-ratio="1"
 *
 * Parallax Backgrounds
 * - data-stellar-background-ratio="1"
 */
var initStellar = function initStellar() {
  if ($("[parallax-js]").length) {
    $(function () {
      $.stellar({
        // Set scrolling to be in either one or both directions
        horizontalScrolling: false,
        verticalScrolling: true,

        // Set the global alignment offsets
        horizontalOffset: 0,
        verticalOffset: 0,

        // Refreshes parallax content on window load and resize
        responsive: false,

        // Select which property is used to calculate scroll.
        // Choose 'scroll', 'position', 'margin' or 'transform',
        // or write your own 'scrollProperty' plugin.
        scrollProperty: 'scroll',

        // Select which property is used to position elements.
        // Choose between 'position' or 'transform',
        // or write your own 'positionProperty' plugin.
        positionProperty: 'position',

        // Enable or disable the two types of parallax
        parallaxBackgrounds: true,
        parallaxElements: true,

        // Hide parallax elements that move outside the viewport
        hideDistantElements: false,

        // Customise how elements are shown and hidden
        hideElement: function hideElement($elem) {
          $elem.hide();
        },
        showElement: function showElement($elem) {
          $elem.show();
        }
      });
    });
  }
};

/**
 * @name initSvg4everybody
 *
 * @description SVG for Everybody adds external spritemaps support to otherwise SVG-capable browsers.
 */
var initSvg4everybody = function initSvg4everybody() {

  svg4everybody();
};

/**
 * @name initSwiper
 *
 * @description initialize Swiper
 */
var initSwiper = function initSwiper() {
  // const mySwiper = new Swiper('.swiper-container', {
  //   // Optional parameters
  //   wrapperClass: "swiper-wrapper",
  //   slideClass: "swiper-slide",
  //   direction: 'horizontal', // 'horizontal' or 'vertical'
  //   loop: true,
  //   watchOverflow: true,
  //   normalizeSlideIndex: true,
  //   grabCursor: true,
  //   freeMode: false,
  //   effect: 'slide', // "slide", "fade", "cube", "coverflow" or "flip"
  //   // autoplay: {
  //   //   delay: 6500,
  //   // },
  //   //
  //   // Disable preloading of all images
  //   // preloadImages: false,
  //   // Enable lazy loading
  //   // lazy: {
  //   //   loadPrevNext: true,
  //   // },
  //
  //   // off touch for destop
  //   // touchMoveStopPropagation:false,
  //   // simulateTouch : false,
  //   // allowSwipeToNext: true,
  //   // allowSwipeToPrev: true,
  //   // allowPageScroll: "auto ",
  //
  //   slidesPerView: 5,
  //   spaceBetween: 0,
  //   // breakpoints: {
  //   //   // when window width is <= 320px
  //   //   320: {
  //   //     slidesPerView: 1,
  //   //     spaceBetween: 10
  //   //   },
  //   //   // when window width is <= 480px
  //   //   480: {
  //   //     slidesPerView: 2,
  //   //     spaceBetween: 20
  //   //   },
  //   //   // when window width is <= 640px
  //   //   640: {
  //   //     slidesPerView: 3,
  //   //     spaceBetween: 30
  //   //   }
  //   // },
  //
  //   // If we need pagination
  //   pagination: {
  //     el: '.swiper-pagination',
  //     clickable: true,
  //     // renderBullet: function (index, className) {
  //     //   return `
  //     //     <div class="${className}">
  //     //       ${index}
  //     //     </div>
  //     //   `;
  //     // }
  //   },
  //
  //   // Navigation arrows
  //   navigation: {
  //     nextEl: '.swiper-button-next',
  //     prevEl: '.swiper-button-prev',
  //   },
  //
  //   // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },
  //
  //   on: {
  //     "slideChange": function () {
  //       console.log("slideChange");
  //     },
  //   }
  // });

  var mySwiperProviders = new Swiper('.swiper-container-providers', {
    loop: false,
    watchOverflow: true,
    normalizeSlideIndex: true,
    grabCursor: true,
    freeMode: false,
    effect: 'slide',
    autoplay: {
      delay: 6500
    },
    speed: 750,
    slidesPerView: 5,
    spaceBetween: 0,
    breakpoints: {
      767: {
        slidesPerView: 2
      },
      991: {
        slidesPerView: 3
      },
      1199: {
        slidesPerView: 4
      }
    }
  });
};

/**
 * @name initWebFontLoader
 *
 * @description Loading fonts regardless of the source, then adds a standard set of events you may use to control the loading experience... for more details => https://github.com/typekit/fvd
 */
var initWebFontLoader = function initWebFontLoader() {

  /**
    * @description
   */
  WebFont.load({
    google: {
      families: ['Roboto:100,300,400,500,700,900']
    }
  });

  /**
    * @description
   */
  // const WebFontConfig = {
  //   custom: {
  //     families: [
  //       'Lato:n1,n3,n4,n5,n6,n7,n9'
  //     ]
  //   }
  // };
};

/**
 * @description Document DOM ready.
 */
$(document).ready(function (ev) {
  /**
   *
   * @type {*|jQuery|HTMLElement}
   * @private
   */
  var _document = $(document),
      _window = $(window);

  /*
  * =============================================
  * CALLBACK :: start
  * ============================================= */

  var initMoveCardAnimation = function initMoveCardAnimation() {
    var _tl = new TimelineMax({ yoyo: true, repeat: -1 }),
        _tlMousemove = new TimelineMax({ yoyo: true, repeat: -1 });

    _tl.to('#h-deposit__bg-img-0', 7.5, { x: -100, y: -20, ease: Power0.easeNone }, '-=7.5');
    _tl.to('#h-deposit__bg-img-1', 7.5, { x: 20, y: -50, ease: Power0.easeNone }, '-=7.5');
    _tl.to('#h-deposit__bg-img-2', 7.5, { x: -40, y: 50, ease: Power0.easeNone }, '-=7.5');
    _tl.to('#h-deposit__bg-img-3', 7.5, { x: -130, y: -45, ease: Power0.easeNone }, '-=7.5');
    _tl.to('#h-deposit__bg-img-4', 7.5, { x: 75, y: -20, ease: Power0.easeNone }, '-=7.5');
    _tl.to('#h-deposit__bg-img-5', 7.5, { x: -40, y: 40, ease: Power0.easeNone }, '-=7.5');

    $(window).on('resize load', function () {
      if ($(window).width() < 1366) {
        _tl.pause(0);
      } else {
        _tl.play();
      }
    });

    $(document).mousemove(function (event) {
      $(".h-deposit__bg img").each(function (index, element) {
        _tlMousemove.to(element, 6.5, {
          rotationY: (event.clientX / $(window).width() - 0.5) * 30,
          rotationX: (event.clientY / $(window).height() - 0.5) * 30,
          ease: Power1.easeInOut }, '-=6.5');
      });
    });
  };
  /*
  * CALLBACK :: end
  * ============================================= */

  /**
   * @description Init all method
   */
  var initJquery = function initJquery() {
    // default
    initWebFontLoader();
    initPreventBehavior();
    initSvg4everybody();
    // ==========================================

    // lib
    // ==========================================
    initStellar();
    initSwiper();
    initSmoothScroll();

    // callback
    // ==========================================
    initMoveCardAnimation();
  };
  initJquery();
});