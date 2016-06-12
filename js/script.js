$(document).ready(function() {
	$(".owl-carousel").owlCarousel({
		items : 5,
    	itemsDesktop : [1199,3],
      	itemsDesktopSmall : [979,3],
	});

    $('.menu-btn').sidr({
        name: 'sidr-main',
        source: '#footer-menu',
        side: 'left'
    });
	/*$("ul.accordion").accordion({
        autoheight: false,
        header: ".opener",
        active: ".selected",
        selectedClass: "active",
        alwaysOpen: false,
        event: "click"
    });*/
});