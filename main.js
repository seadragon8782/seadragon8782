jQuery(function($) {

  jQuery('.icon-hamburger').on('click', function() {
    if(jQuery('.menu-container .menu').css('display') === 'block') {
      jQuery('.menu-container .menu').slideUp('1500');
    }else {
      jQuery('.menu-container .menu').slideDown('1500');
    }
  });


  // #back-to-topがクリックされたら上に戻る
  $('#back-to-top a').click(function() {
    $('html,body').animate({scrollTop:0},500,'linear');
    return false;
  });


});
