/*
project: olhfirereek v0
author: oliver lutz haase - http://www.olh.de
date: June 2012

Licensed under the Creative Commons Attribution 3 License - http://creativecommons.org/licenses/by-sa/3.0/
- Add to your page/project this link: <a href="http://www.olh.de">design und programmierung haase</a>

*/ 
(function($) {
  var defauts = {
    flame:{
      // items here without function
      items:5,
      fps: 150,
      speed:30,
      turbulence: 2,
      images:[]
    },
    smoke:{
      items:5,
      fps: 150,
      speed:30,
      turbulence: 2,
      images:[]
    },
    tflame:0,
    tsmoke:0
  };
  $.fn.olhfireandreek = function(params) {
    var vars = $.extend(defauts, params);
    $("<style>\
      .olhfnr{ position:absolute; top:0; left:0; z-index:0; }\
      .olhfnr_image{ position:relative; top:0; left:0; z-index:0; }\
      </style>").appendTo('head');
      $(this).css( 'overflow','hidden' );
      this.each( function(){
        if( $(this).hasClass('smoke') ){
          flares( $(this),vars.smoke );
        } else if( $(this).hasClass('flame') ){
          flames( $(this),vars.flame );
        } else {
          alert('NO SMOKE OR FLAME ELEMENT!');
          $(this).css('border','10px dotted #f00');
        }
      });
    if( $('.flame').length > 0 ){ vars.tflame = setInterval( aflame, vars.flame.fps ); }
    if( $('.smoke').length > 0 ){ vars.tsmoke = setInterval( asmoke, vars.smoke.fps ); }
    function flares(t,v){
      for(var i=0; i < v.items; i++){
        var si = $('<div class="olhfnr"/>');
        for(var j=0; j < v.images.length; j++){
          var img = $(v.images[j]);
          img.addClass('olhfnr_image');
          img.css('z-index',(j+1));
          img.hide();
          si.append(img);
        }
        $(t).append(si);
        $(si).children('img:nth-child('+Math.ceil(Math.random()*v.images.length)+')').show();
        si.css({ 'top':($(t).height() + (Math.ceil(Math.random()*(img.height()/2))*i)), 'left':( $(t).width()/2 - (img.width()/2) ), 'z-index':i });
        si.css('height',(img.height()+'px'));
      }
    };
    function flames(t,v){
      for(var j=0; j < v.images.length; j++){
        var img = $(v.images[j]);
        img.addClass('olhfnr');
        img.css('z-index',(j+1));
        img.hide();
        $(t).append(img);
        img.css({ 'top':($(t).height()-img.height()), 'left':( $(t).width()/2 - (img.width()/2) ) });
      }
      $(t).children('img:nth-child('+Math.ceil(Math.random()*v.images.length)+')').show();
    };
    function aflame(){
      $('.flame').each(function(e){
        var zi = $(this).children(':visible:first' ).css('z-index');
        var nzi = zi;
        while(nzi == zi ){
          nzi = Math.ceil(Math.random()*vars.flame.images.length);
        }
        $(this).children(':visible').fadeOut(vars.flame.fps/4);
        $(this).children('img:nth-child('+nzi+')').fadeIn(vars.flame.fps/4);
      });
    };
    function asmoke(){
      var y = 0;
      var p = 0;
      var t = 0;
      $('.smoke').each(function(e){
        $(this).children().each(function(e){
          y = $(this).position().top;
          y = y - Math.ceil(Math.random()*vars.smoke.speed)-1;
          t = Math.sin(y)*Math.ceil(Math.random()*vars.smoke.turbulence);
          if(y<-$(this).parent().height()){ 
            y = $(this).parent().height();
            $(this).css( 'left', ( $(this).parent().width()/2 - ($(this).width()/2) ) );
            $(this).children(':visible').hide();
            $(this).children('img:nth-child('+Math.ceil(Math.random()*vars.smoke.images.length)+')').show();
          }
          $(this).css({'top':y, 'left':($(this).position().left+t), 'opacity':((y+($(this).height()/6))/$(this).parent().height()) });
        });
      });
    };
  }
})(jQuery);
