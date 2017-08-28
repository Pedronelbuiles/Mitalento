var  mn = $(".main-nav");
    mns = "main-nav-scrolled";
    hdr = $(window).height()+10;
    imgt = $(".img_team");
    imgent= "animated bounceInLeft visible";
    imgnt = $(".nosotos_team");
    imgntent= "animated bounceInRight visible";
    entrada = hdr - 130;
    entrada_dos = hdr + 600 ;

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr ) {
    mn.addClass(mns);
  } else {
    mn.removeClass(mns);
  }
});

$(window).scroll(function() {
  if( $(this).scrollTop() > entrada ) {
    imgt.addClass(imgent);
  } else {
    imgt.removeClass(imgent);
  }
});

$(window).scroll();

console.log(hdr);
console.log(entrada);
console.log(entrada_dos);
console.log($(window).scrollTop());