var $btnMenu = document.getElementById('btn-menu');
var $menu = document.getElementById('menu');

$btnMenu.addEventListener('touchstart', addClass);
function addClass () {
	$menu.classList.toggle('activo');
	$btnMenu.classList.toggle('icon-close')
};

$(".lazy").lazyload();

var toch = new Hammer($btnMenu, myOptions);
toch.on('pan', addClass);
toch.on('swipeleft', addClass);
toch.on('swiperight', addClass);

