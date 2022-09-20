$(function(){
    $('#fullpage').fullpage({
		autoScrolling:true,
		scrollHorizontally: true,
		anchors:['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
		autoScrolling:true,
	});

	$('.m_menu').click(function(){
		$('.m_gnb').fadeIn(300);
		$('.m_menu').hide();
	});
	$('.close').click(function(){
		$('.m_gnb').fadeOut(500);
		$('.m_menu').show(500);
	});

	$('.grid').isotope({
		// options
		itemSelector: '.grid-item',
		layoutMode: 'fitRows'
	});
	$('.category li').click(function(){
        $(this).addClass('on').siblings().removeClass('on');
    });
    $('#all').click(function(){
        $('.grid').isotope({ filter: '*' });
    });
    $('#pc').click(function(){
        $('.grid').isotope({ filter: '.pc' });
    });
    $('#mob').click(function(){
        $('.grid').isotope({ filter: '.mob' });
    });
    $('#resp').click(function(){
        $('.grid').isotope({ filter: '.resp' });
    });
});