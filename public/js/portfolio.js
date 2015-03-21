
$(document).ready(function(){
  $('a[href^="#"]').on('click',function (e) {
      e.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
     'scrollTop': $target.offset().top
      }, 900, 'swing');
  });

  var title_div = $('.title_div');
  title_div.css('padding-top', "300px");
});

var winHeight = 0;

$(window).on('beforeunload', function() {
    $(window).scrollTop(0);
});


$(window).on('load', function() {
  $('body').css('visibility', 'visible');

  winHeight = $(window).height();

  if (winHeight > 500) {
  //vertically centers sidebar content and landing div content
    var sidebarExtra = winHeight - $('.nav_div').height();
    var mainExtra = winHeight - $('.title_div').height()*2;

    $('.title_div').css('padding-top', mainExtra/2 );
    $('.nav_div').css('padding-top', sidebarExtra/2);
  }
    $('.transparent').css("opacity","1");
    $('.red').fadeIn(2000);
    $('.blue').fadeIn(4000);
    $('.green').fadeIn(6000);
});


$('.footer_text').hover(function(){
    original = this.innerHTML;
    this.innerHTML = "AJAX for WHAT??";
},function(){
    this.innerHTML = original;
});

