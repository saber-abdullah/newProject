$(document).ready(function(){
  $(".regular").slick({
    slidesToShow:3,
    dots: true,
    infinite: true,
    slidesToScroll: 1,
    responsive:[
    {
        breakpoint:1024,
        settings:{
           slidesToShow:2,
           arrows:false,
        } 
        },
    {
      breakpoint:768,
        settings:{
           slidesToShow:1,
           arrows:false,
           centerPadding:'40px'
        } 
    }
    ]
});

$('.button_1,.button_3,.button_4').on('click',function(){
  $('.popup-container').fadeIn();
  $('.popup').css('min-height','220px');
  $('.form_2').hide();
  $('.form_1').show();

});
$('.button_2,.button_31').on('click',function(){
  $('.popup-container').fadeIn();
  $('.popup').css('min-height','282px');
  $('.form_2').show();
  $('.form_1').hide();
});
$('.close_w').on('click',function(){
  $('.popup-container').fadeOut();
});

$('.popup-container').click(function(event){
  if(event.target == this){
    $(this).fadeOut();
  }
});

var menu = $('.menu_m');
var btn_menu = $('.btn_menu');
var close = $('.close');


$('.btn_menu,.close').click(function(){
    
   if (btn_menu.is(':visible')){
              btn_menu.hide();
              close.show();
              $('.contact_p').hide();
              $('.search').show();
   }else{
              btn_menu.show();
              close.hide();
              $('.contact_p').show();
              $('.search').hide();
   }
  menu.toggleClass();
});


$('.dropdown span').on('click', function(){
      $('.dropdown_list').slideToggle();
});
$('.icon_search').on('click', function(){
      $('.search_field').toggleClass();
});

/**Scroll up**/
var scrollButton=$('.arrow-up');
$(window).scroll(function(){
  if ($(this).scrollTop()>=400){
    scrollButton.fadeIn();
  }
  else{
    scrollButton.fadeOut();
  } 
});
scrollButton.click(function(){
    $('html,body').animate({scrollTop:0});
  });
});



