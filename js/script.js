$( document ).ready(function() {

    if($('.slick').length > 0) {
        $('.slick').slick({
            arrows:true,
            dots:false,
            autoplay:false,
            responsive: [
                {
                    breakpoint: 560,
                    settings: {
                        arrows:false,
                        infinite: true,
                        dots: true
                    }
                }

            ]
        });
    }

    // console.log($('.small-slider'));
    if($('.small-slider').length > 0) {
        $('.small-slider').not('.slick-initialized').slick({
            arrows:false,
            infinite: true,
            dots: true,
            autoplay:true
        });
    }
    // $('.partners-list ul').slick({
    //     infinite: true,
    //     slidesToShow: 5,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     dots:false,
    //     autoplay:true,
    //     swipe:true,
    //     speed:2000,
    //     responsive: [
    //         {
    //             breakpoint: 1024,
    //             settings: {
    //                 slidesToShow: 4
    //             }
    //         },
    //         {
    //             breakpoint: 780,
    //             settings: {
    //                 slidesToShow: 3
    //             }
    //         },
    //         {
    //             breakpoint: 560,
    //             settings: {
    //                 slidesToShow: 2
    //             }
    //         },
    //         {
    //             breakpoint: 420,
    //             settings: {
    //                 slidesToShow: 2
    //
    //             }
    //         }
    //     ]
    // });
    // if($(window).scrollTop()> 140){
    //     $('.header-top').addClass("active-fixed");
    // }
    $(window).scroll( function(){
        if($(window).scrollTop()> 130){
            $('.header-top').addClass("active-fixed");
        }
        else{
            $('.header-top').removeClass("active-fixed");

        }
    });

    $('.menu-mobile-btn').click(function(e){
        $('.header-top').toggleClass('active');
        e.preventDefault();
        $(this).toggleClass('active');
        $('body').toggleClass('is_opened');
        /*------------end mobile menu---------------*/
    });
    var itemHover = $('.step-list li');
        itemHover.hover(function () {
        itemHover.removeClass('active');
        $(this).addClass('active');
        var id = $(this).data('image-id');
        $(this).parents('.start-trading').attr('data','bg'+id);
    });
    $('.button-link, .h-info__btn-0').magnificPopup({
        type: 'inline',
        fixedContentPos: true,
        fixedBgPos: true,
        overflowY: 'auto',
        closeBtnInside: true,
        preloader: false,
        midClick: true,
        removalDelay: 300,
        mainClass: 'mfp-fade',
        callbacks: {
            beforeOpen: function beforeOpen() {
                this.st.mainClass = this.st.el.attr('data-effect');
            },
            close: function close() {}
        }
    });

    // if ($(window).width() < 950) {
    //     $('.menu__item > a').click(function (e) {
    //         if($(this).next('.menu__dropdown')){
    //             if( $(this).hasClass('button') )
    //             {console.log('yes');}else{
    //                 console.log($(this));
    //                 e.preventDefault();
    //                 $(this).next('.menu__dropdown').toggleClass('active');
    //             }
    //         }else {
    //
    //         }
    //
    //     })
    // }


});