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

  var mySwiperTeam = new Swiper('.swiper-container-team', {
    // Optional parameters
    loop: true,
    watchOverflow: true,
    normalizeSlideIndex: true,
    grabCursor: false,
    freeMode: false,
    effect: 'slide',

    // off touch for destop
    touchMoveStopPropagation: false,
    simulateTouch: false,
    allowSwipeToNext: true,
    allowSwipeToPrev: true,
    allowPageScroll: "auto ",

    slidesPerView: 4,
    spaceBetween: 30,
    breakpoints: {
      575: {
        slidesPerView: 1
      },
      991: {
        slidesPerView: 2
      },
      1199: {
        slidesPerView: 3
      }
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
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
      families: ['Rajdhani:400,500,600,700', 'Open+Sans:400,600,700,800']
    }
  });

  /**
    * @description
   */
  var WebFontConfig = {
    custom: {
      families: ['SFUIText:n4']
    }
  };
};
/**
 * @description Document DOM ready.
 */
(function () {
  /*
  * =============================================
  * CALLBACK :: start
  * ============================================= */

  /*
  * CALLBACK :: end
  * ============================================= */

  /**
   * @name initNative
   *
   * @description Init all method
   */
  var initNative = function initNative() {
    // default
    initWebFontLoader();
    initPreventBehavior();
    initSvg4everybody();
    // ==========================================

    // lib
    // ==========================================
    initSwiper();

    $('#fullpage').fullpage({
      sectionSelector: '.fullpage-section',
      scrollingSpeed: 700,
      navigation: true,
      fitToSection: true,
      verticalCentered: true,
      touchSensitivity: 10,
      responsiveWidth: 768,
      responsiveHeight: 750,
      fixedElements: '#header'
    });

    // callback
    // ==========================================
  };
  initNative();
})();