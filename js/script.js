$(document).ready(function() {

	// slick-slider slick script
	$('.slick-slider').slick({
		autoplaySpeed: 3000,
		autoplay: true,
		dots: true,
		arrows: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		infinite: true
	});

	// blog-slider slick script
	$('.blog-slider').slick({
		autoplaySpeed: 3000,
		autoplay: true,
		dots: false,
		arrows: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
		infinite: true
	});

	// menu-click script
	$('.base-menu ul li a').click(function (event) {
		event.preventDefault();
		var linkId = $(this).attr('href');
		var linkPosition = $(linkId).offset().top - 100;
		$('body,html').animate({scrollTop: linkPosition}, 1000);
		//$('.menu ul li a').removeClass('active');
		//$(this).addClass('active');
	});

	// document-scroll script
	/*var navLinks = $('.menu ul li a'),
  	navH = $(".nav").height(),
  	section = $('section'),
  	documentEl = $(document);
  	
  	documentEl.scroll(function () {
  		var currentScrollPos = documentEl.scrollTop();
  		section.each(function () {
  			var selfSection = $(this);
  			if ( selfSection.offset().top < (currentScrollPos + navH + 300) && (currentScrollPos + navH + 300) < (selfSection.offset().top + selfSection.outerHeight()) ) {
  				var targetClass = '.' + selfSection.attr('class') + '-link';
  				navLinks.removeClass('active');
  				$(targetClass).addClass('active');
  			} else {}
  		});
  	});*/

  	// search_icon-click script
	$('.search_icon').click(function (event) {
		$('.logo').addClass('d-none');
		$('.header-btns').addClass('border-none');
		$('.menu').addClass('d-none');
		$('.search-header').addClass('d-block');
		$('.base-header-btns').addClass('d-none');
		$('.mob-menu-link').addClass('d-none');
		$('.cross_icon').addClass('d-block');
	});

	// cross_icon-click script
	$('.cross_icon').click(function (event) {
		$('.logo').removeClass('d-none');
		$('.menu').removeClass('d-none');
		$('.cross_icon').removeClass('d-block');
		$('.base-header-btns').removeClass('d-none');
		$('.search-header').removeClass('d-block');
		$('.header-btns').removeClass('border-none');
		$('.mob-menu-link').removeClass('d-none');
	});

	// burger-click script
	$('.burger-link').click(function (event) {
		event.preventDefault();
		$('.burger-link').toggleClass('burger-link-active');
		$('.mob-menu').toggleClass('d-block');
	});

	// menu-resize script
	$(window).resize(function() {
		if ($(window).width() > 750) {
			$('.mob-menu').removeClass('d-block');
			$('.burger-link').removeClass('burger-link-active');
		};
	});

	// nav-scroll script
	$(document).scroll(function () {
		if ($(document).scrollTop() > 100) {
			$('.nav').addClass('nav-bg');
		} else {
			$('.nav').removeClass('nav-bg');
		}
	});

	// fancybox script
	$(".fancybox").fancybox({
		
	});



});

