/*
project: olhfirereek v0
author: oliver lutz haase - http://www.olh.de
date: June 2012

Licensed under the Creative Commons Attribution 3 License - http://creativecommons.org/licenses/by-sa/3.0/
- Add in your page/project this link: <a href="http://www.olh.de">design und programmierung haase</a>

*/ 
(function($) {
  var defauts = {
    images: [],
    items:5,
    fps: 100,
    speed:3,
    turbulence: 2,
    item_h:100,
    item_w:100,
    domain: "",
    timer: 0
  };
  $.fn.olhfirereek = function(params) {
    var vars = $.extend(defauts, params);
    $("<style>\
      .smoke_item{ position:absolute; top:0; left:0; }\
      .smoke_item_image{ position:relative; top:0; left:0; }\
      </style>").appendTo('head');
    for(var i=0; i < vars.items; i++){
      var si = $('<div class="smoke_item"/>');
      for(var j=0; j < vars.images.length; j++){
        var img = $(vars.images[j]);
        img.addClass('smoke_item_image');
        img.css('z-index',(j+1));
        img.hide();
        si.append(img);
      }
      $(si).children('img:nth-child('+Math.ceil(Math.random()*vars.images.length)+')').show();
      vars.item_h = img.attr('height');
      vars.item_w = img.attr('width');
      si.css({ 'top':($(this).height() + (Math.ceil(Math.random()*10)*i)), 'left':( $(this).width()/2 - (vars.item_w/2) ), 'z-index':i });
      si.css('height',(vars.item_h+'px'));
      $(this).append(si);
    }
    // INFO vars.domain workaround ie -> vars.timer = setInterval( ani, vars.fps, $(this));
    vars.domain = $(this);
    vars.timer = setInterval( ani, vars.fps);
    function ani(){
        var y = 0;
        var p = 0;
        $(vars.domain).children().each(function(e){
          var y = $(this).position().top;
          y = y - Math.ceil(Math.random()*vars.speed)-2;
          l = Math.sin(y)*Math.ceil(Math.random()*vars.turbulence);
          if(y<-vars.item_h){ 
            y = $(vars.domain).height();
            $(this).css( 'left', ( $(vars.domain).width()/2 - (vars.item_w/2) ) );
            $(this).children(':visible').hide();
            $(this).children('img:nth-child('+Math.ceil(Math.random()*vars.images.length)+')').show();
          }
          $(this).css({'top':y, 'left':($(this).position().left+l), 'opacity':((y+(vars.item_h/2))/$(vars.domain).height()) });
        });
    }
    function fader(t){}
  }
})(jQuery);
