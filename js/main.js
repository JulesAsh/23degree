$(function() {
    $('#a-1').click(function(){
      $('#portfolio-card-1').addClass('active');
      $('#portfolio-card-2').removeClass('active');
      $('#portfolio-card-3').removeClass('active');
      $('#portfolio-card-4').removeClass('active');
      $('#a-1').addClass('blue-bg');
      $('#a-2').removeClass('blue-bg');
      $('#a-3').removeClass('blue-bg');
      $('#a-4').removeClass('blue-bg');
      // $('html, body').animate({scrollTop:$('#shop-cards-1').position().top}, 800);
    });
    $('#a-2').click(function(){
      $('#portfolio-card-2').addClass('active');
      $('#portfolio-card-1').removeClass('active');
      $('#portfolio-card-3').removeClass('active');
      $('#portfolio-card-4').removeClass('active');
      $('#a-2').addClass('blue-bg');
      $('#a-1').removeClass('blue-bg');
      $('#a-3').removeClass('blue-bg');
      $('#a-4').removeClass('blue-bg');
      // $('html, body').animate({scrollTop:$('#shop-cards-2').position().top}, 800);
    });
    $('#a-3').click(function(){
        $('#portfolio-card-3').addClass('active');
        $('#portfolio-card-1').removeClass('active');
        $('#portfolio-card-2').removeClass('active');
        $('#portfolio-card-4').removeClass('active');
        $('#a-3').addClass('blue-bg');
        $('#a-2').removeClass('blue-bg');
        $('#a-1').removeClass('blue-bg');
        $('#a-4').removeClass('blue-bg');
          // $('html, body').animate({scrollTop:$('#shop-cards-2').position().top}, 800);
      });
      $('#a-4').click(function(){
        $('#portfolio-card-4').addClass('active');
        $('#portfolio-card-1').removeClass('active');
        $('#portfolio-card-3').removeClass('active');
        $('#portfolio-card-2').removeClass('active');
        $('#a-4').addClass('blue-bg');
        $('#a-2').removeClass('blue-bg');
        $('#a-3').removeClass('blue-bg');
        $('#a-1').removeClass('blue-bg');
          // $('html, body').animate({scrollTop:$('#shop-cards-2').position().top}, 800);
      });
});