

$('form').submit(function() {
	$.ajax({
	    type: "POST",
	    url: "/order.php",
	    data: $(this).serialize()
	}).done(function() {
	    // popupForm.css('display','none');
	    // popupMessage.css('display','block');
	});
	return false;
});


$('input.tel').mask("+7 (999) 999-99-99");





function tabsLiEach() {
	$('.tabs-nav li').each(function() {
		var attr = $(this).attr('data-target');
		if ($(this).hasClass('select')) {
			$('#' + attr).show();
		}
		else{
			$('#' + attr).hide();
		}
	});	

}



$('.tabs-nav li').click(function() {
	if ($(this).hasClass('select') == false) {
		var thisElement = $(this).parents('.tabs-nav').find('li');
		thisElement.removeClass('select');
		$(this).addClass('select');
		tabsLiEach();
	}
});



tabsLiEach();



var dataCeiling = $('.calc-data .ceiling .name'),
	dataWall = $('.calc-data .wall .colorCalc'),
	dataFloor = $('.calc-data .floor .name');


function colorClick(){
	$('.item .c').click(function() {
		var parent = $(this).parents('.item'),
			colorBg = $(this).css('background-color');
		// alert(colorBg);
		// $('.images').css('background-color', colorBg);
		if (parent.hasClass('ceiling')) {
			$('.images .ceiling').css('background-color', colorBg);
			dataCeiling.siblings('div').css('background-color', colorBg);
			var html = $('.ceiling .tabs-nav li.select').html();
			dataCeiling.html(html);
		}
		if (parent.hasClass('wall')) {
			$('.images .walls').css('background-color', colorBg);
			dataWall.css('background-color', colorBg);
		}
		if (parent.hasClass('floor')) {
			$('.images .floor').css('background-color', colorBg);
			dataFloor.siblings('div').css('background-color', colorBg);
			var html = $('.floor .tabs-nav li.select').html();
			dataFloor.html(html);
		}
	});
	
}

colorClick();





function dropDown() {
	$('.drop-down p').click(function() {
		var parent = $(this).parents('.drop-down');
		parent.toggleClass('open');
	});
	$('.drop-down li').click(function() {
		var parent = $(this).parents('.drop-down'),
			p = parent.find('p'),
			input = $(this).find('input');
		parent.find('input').each(function() {
			$(this).removeAttr('checked');
		});
		input.attr('checked', 'checked');
		p.html($(this).html());
	});
	$('.drop-down li input:checked').each(function() {
		var p = $(this).parents('.drop-down').find('p'),
			label = $(this).siblings();
		p.html(label.html());
	});

}

dropDown()



$('.slider').slick();





var portfolioElement = $('.portfolio-element .window .body');

$('#portfolio a').click(function() {
	$(this).removeAttr('href');
	var hidden = $(this).siblings('.hidden'),
		hiddenTitle = hidden.find('.title').clone(),
		hiddenText = hidden.find('.text').clone(),
		hiddenImages = hidden.find('.images').clone();
	hiddenText.prependTo(portfolioElement);
	hiddenImages.prependTo(portfolioElement);
	hiddenTitle.prependTo(portfolioElement);
	PE.funShow();
});