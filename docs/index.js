$('document').ready(()=>{
  //////////////////////////////////////////////////////////////////////////////Opening animation
  $('.begining-line-2').fadeOut();
  $('.show-hide-anim:nth-child(1)').delay(1000).animate({
    height: '0'
  })
  $('.show-hide-anim:nth-child(1)').delay(2000).animate({
    height: '100%'
  })
  $('.begining-line-1').delay(4000).fadeOut();
  $('.begining-line-2').delay(4100).fadeIn();
  $('.show-hide-anim:nth-child(2)').delay(4500).animate({
    height: '0'
  })
  $('.show-hide-anim:nth-child(2)').delay(1000).animate({
    height: '100%'
  })
  $(`.begining-animation-block`).delay(2300).animate({position: 50},{
    step: function(now,fx) {
        $(this).css('clip-path','circle('+100+'px at '+now+'% '+now+'%)'); 
      }
})
$(`.begining-animation-block`).delay(2800).animate({position: 50},{
  step: function(now,fx) {
      $(this).css('clip-path','circle('+0+'px at '+now+'% '+now+'%)'); 
    }
})
$('body').delay(3700).queue(function(next){
$(this).css('overflow-y', 'visible');
$(this).css('overflow-x', 'hidden');
next();
})
//////////////////////////////////////////////////////////////////////////////Opening animation (end)
//////////////////////////////////////////////////////////////////////////////Mouse move landing & landing block hover

$('.begining-animation-block, .landing').mousemove((event)=>{
  $('.landing-side-block').css({
    'right': event.pageX * -1/22+'px'
  }) 
    $(".landing-block-yellow").css({
    'transform': 'translate3d('+event.pageX * 1/52+'px, '+event.pageY * 1/52+'px,0)',
  })
  $(".landing-block-gray").css({
    'transform': 'translate3d('+event.pageX * 1/22+'px, '+event.pageY * 1/22+'px,0)'
  })
})
$('.begining-animation-block').mousemove((event)=>{
  $(".landing-block-yellow").css({
    'transform': 'translate3d('+event.pageX * 1/52+'px, '+event.pageY * 1/52+'px,0)'
  })
  $(".landing-block-gray").css({
    'transform': 'translate3d('+event.pageX * 1/22+'px, '+event.pageY * 1/22+'px,0)'
  })
})

$('.landing-block').mouseover(()=>{
  $('.landing').css('background-color','rgb(78, 214, 255)');  
            $('.landing-block-yellow').css('background-color','#fff');  
            $('.landing-side-block').css('background-color','#fff');  
            $('.landing-side-block').css('opacity','1'); 
})
$('.landing-block').mouseout(()=>{
  $('.landing').css('background-color','#fff');  
            $('.landing-block-yellow').css('background-color','rgb(78, 214, 255)');  
            $('.landing-side-block').css('background-color','rgb(78, 214, 255)');
            $('.landing-side-block').css('opacity','1'); 
  
})
//////////////////////////////////////////////////////////////////////////////Mouse move landing & landing block hover (end)
//////////////////////////////////////////////////////////////////////////////Down button  
$('.landing-down').click(()=>{
  $('body , html').animate({
      scrollTop: $('.landing').height()
  }, 1000)
})
//////////////////////////////////////////////////////////////////////////////Down button (end)

//////////////////////////////////////////////////////////////////////////////Landing background-transition
    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
            $('.landing').css('background-color','rgb(78, 214, 255)');  
            $('.landing-block-yellow').css('background-color','#fff');  
            $('.landing-side-block').css('background-color','#fff');  
          }else{
            $('.landing').css('background-color','#fff');  
            $('.landing-block-yellow').css('background-color','rgb(78, 214, 255)');  
            $('.landing-side-block').css('background-color','rgb(78, 214, 255)');  
          }
    })
})
//////////////////////////////////////////////////////////////////////////////Landing background-transition (end)





//////////////////////////////////////////////////////////////////////////////I have created animation <-- (block)

var whiteBlockWidth = $(".i-have-created-white-block").width();
$(window).scroll(function(){
  if($(this).scrollTop() > $('.i-have-created-white-block').offset().top - 500){
    $('.i-have-created-white-block').css({
      'clip-path' : 'inset(0 0 0 '+whiteBlockWidth+'px)'
    })
  } 
})
$(window).scroll(function(){
  if($(this).scrollTop() < $('.i-have-created-white-block').offset().top - 500){
    $('.i-have-created-white-block').css({
      'clip-path' : 'inset(0 0 0 0)'
    })
  } 
})
//////////////////////////////////////////////////////////////////////////////I have created animation (end)

//////////////////////////////////////////////////////////////////////////////About-parallax
if(window.matchMedia("(max-width: 768px)").matches){
  $('.about-photo-text').removeClass('rellax');
  $('.about-content').removeClass('rellax');
}
var rellax = new Rellax('.rellax');

//////////////////////////////////////////////////////////////////////////////About-parallax (end)

//////////////////////////////////////////////////////////////////////////////////////////////////Footer-btn-up
$('.footer-btn-up').click(()=>{
  $('body, html').animate({
    scrollTop: 0
  }, 1500)
})
//////////////////////////////////////////////////////////////////////////////////////////////////Footer-btn-up (end)


//////////////////////////////////////////////////////////////////////////////////////////////////Projects-animation
$('.project').attr('style', 'margin-top: 250px !important; opacity: 0 !important');
$(window).scroll(()=>{
  if($(this).scrollTop() > $('.project:nth-of-type(1)').offset().top - 700){
    $('.projects-container .project:nth-of-type(1)').attr('style', 'margin-top: 100px !important; opacity: 1 !important')
  }
  if($(this).scrollTop() > $('.project:nth-of-type(2)').offset().top - 700){
    $('.projects-container .project:nth-of-type(2)').attr('style', 'margin-top: 100px !important; opacity: 1 !important')

  }
})
//////////////////////////////////////////////////////////////////////////////////////////////////Projects-animation (end)


//////////////////////////////////////////////////////////////////////////////////////////////////Footer stuff
$(window).scroll(()=>{
  if($(this).scrollTop() > $('footer').offset().top - 500){
    $('.footer-lines .footer-line:nth-of-type(1)').css('width', '80%')
    $('.footer-lines .footer-line:nth-of-type(2)').css('width', '60%')
    $('.footer-lines .footer-line:nth-of-type(3)').css('width', '40%')
  }
})
$('.footer-lines').mouseover(()=>{
  $('.footer-lines .footer-line:nth-of-type(1)').css('width', '0')
  $('.footer-lines .footer-line:nth-of-type(2)').css('width', '0')
  $('.footer-lines .footer-line:nth-of-type(3)').css('width', '0')
})
$('.footer-lines').mouseout(()=>{
  $('.footer-lines .footer-line:nth-of-type(1)').css('width', '80%')
  $('.footer-lines .footer-line:nth-of-type(2)').css('width', '60%')
  $('.footer-lines .footer-line:nth-of-type(3)').css('width', '40%')
})
//////////////////////////////////////////////////////////////////////////////////////////////////Footer stuff (end)



