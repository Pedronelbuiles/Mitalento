var $btnMenu = document.getElementById('btn-menu');
var $menu = document.getElementById('menu');

$btnMenu.addEventListener('touchstart', addClass);
function addClass () {
	$menu.classList.toggle('activo');
	$btnMenu.classList.toggle('icon-close')
};

$("img.lazy").lazyload();


