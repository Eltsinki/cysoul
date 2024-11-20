/*-----------------------------------------------------------------------------------

    Theme Name: Cinzel
    Theme URI: http://
    Description: Creative Agency & Portfolio
    Author: ThemesCamp
    Author URI: http://themeforest.net/user/ThemesCamp
    Version: 1.0

-----------------------------------------------------------------------------------*/


$(function () {

    "use strict";
  


    /* ===============================  Swiper slidText  =============================== */


    var slidText = new Swiper('.slid-text .swiper-container', {
		slidesPerView: 1,
		spaceBetween: 0,
		effect: 'fade',
		loop: true,

		navigation: {
			nextEl: '.site-wrapper .scene-nav--next',
			prevEl: '.site-wrapper .scene-nav--prev'
		},
	});


     /* ===============================  imagesLoaded  =============================== */

	 imagesLoaded(document.body, () => document.body.classList.remove('loading'));

	 var spriteImages = document.querySelectorAll('.slide-item__image');
	 var spriteImagesSrc = [];
	 var texts = [];

	 for (var i = 0; i < spriteImages.length; i++) {

		 var img = spriteImages[i];
		 // Set the texts you want to display to each slide 
		 // in a sibling element of your image and edit accordingly
		 if (img.nextElementSibling) {
			 texts.push(img.nextElementSibling.innerHTML);
		 } else {
			 texts.push('');
		 }
		 spriteImagesSrc.push(img.getAttribute('src'));
	 }

	 var initCanvasSlideshow = new CanvasSlideshow({
		 sprites: spriteImagesSrc,
		 displacementImage: 'showcases/liquid-fullscreen/img/dmaps/512x512/crystalize.jpg',
		 autoPlay: false,
		 displaceScale: [300, 300],
		 fullScreen: true,
		 wacky: false,
		 texts: texts,
		 textColor: "#fff",
		 centerSprites: true,
		 wacky: true
	 });

});

