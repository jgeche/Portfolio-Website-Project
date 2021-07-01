// Letter Animation to Heading
var textWrapper = document.querySelector('.heading');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.heading .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1500,
    delay: (el, i) => 70*i
});

//Tooltip Window that Generates Text to Element
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//Fixed Navbar that Disappears on DownScroll
$(document).ready(function () {
	var previousScroll = 0;
$(window).scroll(function () {
	var currentScroll = $(this).scrollTop();
	if (currentScroll < 100) {
	showNav();
	} else if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()) {
	if (currentScroll > previousScroll) {
	hideNav();
	} else {
	showNav();
	}
	previousScroll = currentScroll;
	}
});

function hideNav() {
	$(".navbar").removeClass("is-visible").addClass("is-hidden");
	}

function showNav() {
	$(".navbar").removeClass("is-hidden").addClass("is-visible").addClass("scrolling");
	}
});

//Fade in Section on Mouse Scroll
$(window).scroll(function() {
    $('.fade-in').each(function() {
        var top_of_element = $(this).offset().top;
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();
        var top_of_screen = $(window).scrollTop();

        if ((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element) && !$(this).hasClass('is-visible')) {
            $(this).addClass('is-visible');
        }
    });
});
