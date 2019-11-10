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


//////////////////////////////////////////////////////////////////////////////////////////////////Languages
function English (get){  
  //Landing
  $('.landing-title h1').text(get['eng']['landing']['moto']); 
  $('.landing-info p').html(get['eng']['landing']['who-am-i']); 
  $('.landing-scroll-or-yes p').text(get['eng']['landing']['scroll-or-yes']); 
  //About
  $('.about-content h1').text(get['eng']['about']['who-am-i(1)']);
  $('.about-content h3').text(get['eng']['about']['who-am-i(2)']);
  $('.about-photo-text p').html(get['eng']['about']['a-little-bit']);
  $('.about-text p').text(get['eng']['about']['biography']);
  //Skills & Abilities
  $('.skills-text h1').html(get['eng']['skills-abilities']['title']);
  $('.skills-text h2').html(get['eng']['skills-abilities']['skills-abilities-intro']);
  $('.skills-list ul li:nth-of-type(2)').text(get['eng']['skills-abilities']['CSS']);
  $('.skills-list ul li:nth-of-type(3)').text(get['eng']['skills-abilities']['JavaScript']);
  $('.skills-list ul li:nth-of-type(4)').text(get['eng']['skills-abilities']['Scss']);
  $('.skills-list ul li:nth-of-type(5)').text(get['eng']['skills-abilities']['GitHub']);
  $('.skills-list ul li:nth-of-type(6)').text(get['eng']['skills-abilities']['Responsive']);
  $('.skills-list ul li:nth-of-type(7)').text(get['eng']['skills-abilities']['Owl']);
  //I Have Created
  $('.i-have-created-wrapper p').text(get['eng']['i-have-created']['i-have-created-text']);
  $('.i-have-created-white-block p').text(get['eng']['i-have-created']['i-have-created-text']);
  //Projects
  $('.project-1 .project-description p').text(get['eng']['projects']['project1']['description']);
  $('.project-1 .hidden-description p').text(get['eng']['projects']['project1']['description']);
  $('.project-1 .project-info-text h1').text(get['eng']['projects']['project1']['title']);
  $('.project-1 .date').text(get['eng']['projects']['project1']['date']);
  $('.project-1 .original').text(get['eng']['projects']['project1']['original']);
}

function Ukrainian (get){  
  //Landing
  $('.landing-title h1').text(get['ukr']['landing']['moto']); 
  $('.landing-info p').html(get['ukr']['landing']['who-am-i']); 
  $('.landing-scroll-or-yes p').text(get['ukr']['landing']['scroll-or-yes']); 
  //About
  $('.about-content h1').text(get['ukr']['about']['who-am-i(1)']);
  $('.about-content h3').text(get['ukr']['about']['who-am-i(2)']);
  $('.about-photo-text p').html(get['ukr']['about']['a-little-bit']);
  $('.about-text p').text(get['ukr']['about']['biography']);
  //Skills & Abilities
  $('.skills-text h1').html(get['ukr']['skills-abilities']['title']);
  $('.skills-text h2').html(get['ukr']['skills-abilities']['skills-abilities-intro']);
  $('.skills-list ul li:nth-of-type(2)').text(get['ukr']['skills-abilities']['CSS']);
  $('.skills-list ul li:nth-of-type(3)').text(get['ukr']['skills-abilities']['JavaScript']);
  $('.skills-list ul li:nth-of-type(4)').text(get['ukr']['skills-abilities']['Scss']);
  $('.skills-list ul li:nth-of-type(5)').text(get['ukr']['skills-abilities']['GitHub']);
  $('.skills-list ul li:nth-of-type(6)').text(get['ukr']['skills-abilities']['Responsive']);
  $('.skills-list ul li:nth-of-type(7)').text(get['ukr']['skills-abilities']['Owl']);
  //I Have Created
  $('.i-have-created-wrapper p').text(get['ukr']['i-have-created']['i-have-created-text']);
  $('.i-have-created-white-block p').text(get['ukr']['i-have-created']['i-have-created-text']);
  //Projects
  $('.project-1 .project-description p').text(get['ukr']['projects']['project1']['description']);
  $('.project-1 .hidden-description p').text(get['ukr']['projects']['project1']['description']);
  $('.project-1 .project-info-text h1').text(get['ukr']['projects']['project1']['title']);
  $('.project-1 .date').text(get['ukr']['projects']['project1']['date']);
  $('.project-1 .original').text(get['ukr']['projects']['project1']['original']);
}



$('.eng-btn').click(()=>{
  let requestLNG = new XMLHttpRequest();
  requestLNG.open('GET', './json/text.json');
  requestLNG.responseType = 'json';
  requestLNG.send();
  requestLNG.onload = function(){
      English(requestLNG.response);
  }
})


$('.ukr-btn').click(()=>{
  let requestLNG = new XMLHttpRequest();
  requestLNG.open('GET', './json/text.json');
  requestLNG.responseType = 'json';
  requestLNG.send();
  requestLNG.onload = function(){
      Ukrainian(requestLNG.response);
  }
})
