$(document).ready(function(){

    var myVid=document.getElementById("video1");
    function musicOn(){
      myVid.muted = false;
    };
    function musicOff(){
      myVid.muted = true;
    };

    window.onscroll = function() {scrollFunction()};
    function scrollFunction(){
      if (document.documentElement.scrollTop > h/1.5 ||document.body.scrollTop > h/1.5) {
          $("#gotop").removeClass("none");
      } else {
          $("#gotop").addClass("none");
      }
    };

    $('.gotop_ico').click(function(){$('html,body').animate({scrollTop: '0px'}, 330);});

    $(".music_ico").click(function(){
      if (myVid.muted)
      {
        $(".music_ico").addClass("icoon");
        $(".music_ico").removeClass("icooff");
        musicOn();
      }
     else
      {
        $(".music_ico").addClass("icooff");
        $(".music_ico").removeClass("icoon");
        musicOff();
      }
    });

    $(".active").click(function(){
      $(".mini-navigation").slideToggle("slow");
    });

    var w = window.innerWidth,
        h = window.innerHeight;
        if (w < 680){
          musicOff();
        };

    function randomRGB(){
      var R = Math.floor(Math.random()*256);
      var G = Math.floor(Math.random()*256);
      var B = Math.floor(Math.random()*256);
      return "rgba("+R+','+G+','+B+",1)";
    };

   var lyzf1 = document.getElementById("lyzf1");
   var lyzf2 = document.getElementById("lyzf2");
   var lyzf3 = document.getElementById("lyzf3");
   function lyzf(){
     lyzf1.style.color = randomRGB();
     lyzf2.style.color = randomRGB();
     lyzf3.style.color = randomRGB();
   };

   window.setInterval(function(){
        lyzf();
     },1000);

});
