var  mn = $(".main-nav");
    mns = "main-nav-scrolled";
    hdr = $(window).height()+10;

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr ) {
    mn.addClass(mns);
  } else {
    mn.removeClass(mns);
  }
});

