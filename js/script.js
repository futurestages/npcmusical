 var mainSwiper = new Swiper('.main-slider-two', {
        spaceBetween: 10,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
    });

    var thumbnailSwiper = new Swiper('.thumbnail-slider-two', {
        spaceBetween: 10,
        slidesPerView: 3,
        loop: true,
        slideToClickedSlide: true,
        centeredSlides: true,
        slideActiveClass: 'thumbnail-slide-active', // Optional: add active class for styling
    });

    // Event listener to change video based on thumbnail click
    thumbnailSwiper.on('slideChange', function () {
        var activeIndex = thumbnailSwiper.activeIndex;
        var videoSrc = thumbnailSwiper.slides[activeIndex].querySelector('img').getAttribute('data-video-src');
        mainSwiper.slides.forEach(function (slide) {
            var iframe = slide.querySelector('iframe');
            if (iframe) {
                var iframeSrc = iframe.getAttribute('src');
                if (iframeSrc.includes(videoSrc)) {
                    iframe.src = iframeSrc + '?autoplay=1'; // Play video on change
                } else {
                    iframe.src = iframeSrc.split('?')[0]; // Pause video on other slides
                }
            }
        });
    });

    // Set initial video
    thumbnailSwiper.emit('slideChange');

    var mainSwiper = new Swiper('.main-slider', {
        spaceBetween: 0,
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true,
    });

    var thumbnailSwiper = new Swiper('.thumbnail-slider', {
        spaceBetween: 10,
        slidesPerView: 3,
        loop: true,
        slideToClickedSlide: true,
        centeredSlides: true,
    });

    // Link the thumbnail slider with the main slider
    mainSwiper.controller.control = thumbnailSwiper;
    thumbnailSwiper.controller.control = mainSwiper;

	 var swiper = new Swiper('#sone', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: false,
        spaceBetween: 0, // Ensures no space between slides
        slidesPerView: 1, // Shows one slide at a time
        autoplay: {
            delay: 3000, // Slide transition delay in milliseconds
            disableOnInteraction: false, // Continues autoplay after user interaction
        },
    });
	
	var swiper = new Swiper('#stwo', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: false,
        spaceBetween: 0, // Ensures no space between slides
        slidesPerView: 3, // Shows one slide at a time
       
    });
	
	$(document).ready(function(){
		$(window).scroll(function(){
			if ($(this).scrollTop() > 50) {
				$('.headerwithlogo').addClass('visible');
				//$('.headerwithlogo').show();
			} else {
				$('.headerwithlogo').removeClass('visible');
				//$('.headerwithlogo').hide();
			}
		});
	});
	

	function openm(){
		$('.menu').addClass('visiblem');
	}
	function closem(){
		$('.menu').removeClass('visiblem');
	}
