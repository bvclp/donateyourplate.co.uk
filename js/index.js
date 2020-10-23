/**
 * Main JS file for GhostScroll behaviours
 */

var $post = $('.post');
var $first = $('.post.first');
var $last = $('.post.last');
var $fnav = $('.fixed-nav');
var $postholder = $('.post-holder');
var $postafter = $('.post-after');
var $sitehead = $('#site-head');

/* Globals jQuery, document */
(function ($) {
	"use strict";

	function srcTo (el) {
		$('html, body').animate({
			scrollTop: el.offset().top
		}, 1000);
	}

	function srcToAnchorWithTitle (str) {
		var $el = $('#' + str);
		if ($el.length) {
			srcTo($el);
		}
	}

	$(document).ready(function(){

		$postholder.each(function (e) {
			if(e % 2 != 0)
				$(this).addClass("odd");
		});

		$postafter.each(function (e) {
			var bg = $(this).parent().css('background-color')
			$(this).css('border-top-color', bg);

			if (e % 2 == 0) {
				$(this).addClass("even");
			}
		});

		// Move to first post on header arrow click
		$('#header-arrow').click(function () {
			srcTo($first);
		});


		// Don't show the decorative div notches on the final footer
		$('.post.last').next('.post-after').hide();

		// Add icons to list items and block quotes
		$('ul li').before('<span class="bult fa fa-asterisk icon-asterisk"></span>');
		$('blockquote p').prepend('<span class="quo icon-quote-left"></span>');
		$('blockquote p').append('<span class="quo icon-quote-right"></span>');
	});


}(jQuery));
