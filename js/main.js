$(document).ready(function(){
  console.log("Yo.");
  window.setTimeout(function(){
       $(".nottime").addClass("istime");
       $(".nottime").removeClass("nottime");
    },3100);


  var info = document.getElementById("jujiao");
  var w = window.innerWidth,
      h = window.innerHeight;
  info.style.height = (h - 77) + "px";
  window.addEventListener('resize', function(){
      info.style.height = (h - 77)+ 'px';
  });

  window.onscroll = function() {scrollFunction()};

  function scrollFunction(){
    if (document.documentElement.scrollTop > h/1.5 ||document.body.scrollTop > h/1.5) {
        $("#gotop").addClass("bolck");
        $("#gotop").removeClass("none");
    } else {
        $("#gotop").addClass("none");
        $("#gotop").removeClass("block");
    }
  };

  $('.gotop_ico').click(function(){$('html,body').animate({scrollTop: '0px'}, 330);});


  $(".p2").mouseenter(function(){
    if (w>680) {
      $(".line").animate({width:'285px'});
    }else {
      $(".line").animate({width:'80px'});
    }
 });

  $(".p2,.p3").mouseleave(function(){
   $(".line").stop();
 });
  $(".p3").mouseenter(function(){
    if (w>680) {
      $(".line").animate({width:'160px'});
    }else {
      $(".line").animate({width:'40px'});
    }
 });

 $(".active").click(function(){
   $(".mini-navigation").slideToggle("slow");
 });

});
