//jQuery time
var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

$('.next').click(function () {
	if (animating) return false;
	animating = true;
<<<<<<< HEAD

=======
	
>>>>>>> e0ed42135fd43533dbaa53ae0390b265d0c1b1d1
	current_fs = $(this).parent().parent();
	next_fs = $(this).parent().parent().next();
	console.log(current_fs);
	//activate next step on progressbar using the index of next_fs
	$('#progressbar li').eq($('fieldset').index(next_fs)).addClass('active');

	//show the next fieldset
	next_fs.show();
	//hide the current fieldset with style
	current_fs.animate({
		opacity: 0,
	}, {
		step: function (now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale current_fs down to 80%
			scale = 1 - (1 - now) * 0.2;
			//2. bring next_fs from the right(50%)
			left = now * 50 + '%';
			//3. increase opacity of next_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
				transform: 'scale(' + scale + ')',
				position: 'relative',
			});
			next_fs.css({
				left: left,
				opacity: opacity,
			});
		},
		duration: 800,
		complete: function () {
			current_fs.hide();
			animating = false;
		},
		//this comes from the custom easing plugin
		easing: 'easeInOutBack',
	});
});

$('.previous').click(function () {
	if (animating) return false;
	animating = true;
<<<<<<< HEAD

	current_fs = $(this).parent().parent();
	previous_fs = $(this).parent().parent().prev();

=======
	
	current_fs = $(this).parent().parent();
	previous_fs = $(this).parent().parent().prev();
	
>>>>>>> e0ed42135fd43533dbaa53ae0390b265d0c1b1d1
	//de-activate current step on progressbar
	$('#progressbar li')
		.eq($('fieldset').index(current_fs))
		.removeClass('active');

	//show the previous fieldset
	previous_fs.show();
	//hide the current fieldset with style
	current_fs.animate({
		opacity: 0,
	}, {
		step: function (now, mx) {
			//as the opacity of current_fs reduces to 0 - stored in "now"
			//1. scale previous_fs from 80% to 100%
			scale = 0.8 + (1 - now) * 0.2;
			//2. take current_fs to the right(50%) - from 0%
			left = (1 - now) * 50 + '%';
			//3. increase opacity of previous_fs to 1 as it moves in
			opacity = 1 - now;
			current_fs.css({
				left: left,
			});
			previous_fs.css({
				transform: 'scale(' + scale + ')',
				opacity: opacity,
			});
		},
		duration: 800,
		complete: function () {
			current_fs.hide();
			animating = false;
		},
		//this comes from the custom easing plugin
		easing: 'easeInOutBack',
	});
});

$('.submit').click(function () {
	return false;
});

<<<<<<< HEAD
$(document).ready(function () {

	$('.input_fields_wrap').on('click', '.remove', function () {
		$('.remove').find('.test-case-element').not(':first').last().remove();
	});

	$('.input_fields_wrap').on('click', '.clone', function () {
		$('.clone').find('.test-case-element').first().clone().appendTo('.test-case-copy-element');
	});
	// $('.add-row').click(function () {
	// 	var $clone = $('div.input_fields_wrap').first().clone();
	// 	$clone.append("<button type='button' class='remove-row'>Remove</button>");
	// 	$clone.insertBefore('.add-row');
	// });

	// $(".remove-row").click(function () {
	// 	console.log("hi");
	// 	$(this).parent().remove();
	// });

	// $('.remove-row').on('click', '.remove-row', function () {
	// 	console.log('hi');
	// 	$(this).parent().remove();
	// });
=======

$(document).ready(function(){
	$( ".add-row" ).click(function(){
	   var $clone = $( "div.input_fields_wrap" ).first().clone();
	   $clone.append( "<button type='button' class='remove-row'>Remove</button>" );
	   $clone.insertBefore( ".add-row" );
	});
   
	$( ".add-row" ).on("click", ".remove-row", function(){
	   $(this).parent().remove();
    });
>>>>>>> e0ed42135fd43533dbaa53ae0390b265d0c1b1d1
});