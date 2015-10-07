var SIZE_VALUE = 700;
var width;
var height;

jQuery(function(){
  var $window = $(window);

  window_resized();

  function window_resized(){
    width = $window.width();
    height = $window.height();

    if(width < SIZE_VALUE || height < SIZE_VALUE){
      window.is_mobile = true;
      window.is_portrait = (width < height)? true: false;
    }else{
      window.is_mobile = false;
      window.is_portrait = true;
    }

    if(is_mobile){
      var $header = $("#header");
      var $contents = $("#contents");
      var $footer = $("#footer");
      var $spacer = $(".spacer");

      if(is_portrait){ // 縦長
        $header.css("transform","");
        $header.css("position","");
        $header.css("width","");
        $header.css("left","");
        $header.css("top","");

        $footer.css("transform","");
        $footer.css("width","");
        $footer.css("left","");
        $footer.css("top","");

        $contents.css("position","");
        $contents.css("left","");
        $contents.css("width","");

        $spacer.css("display", "");
      }else{
        $header.css("left", (width - height) * 0.5);
        $header.css("top", (height - $header.height()) * 0.5);
        $header.css("width", height);
        $header.css("transform", "rotate(-90deg) translate(0, -"
          + (width * 0.5 - $header.height() * 0.5)
          +"px)");
        $header.css("position","fixed");

        $footer.css("left", (width - height) * 0.5);
        $footer.css("top", (height - $footer.height()) * 0.5);
        $footer.css("width", height);
        $footer.css("transform", "rotate(-90deg) translate(0, "
          + (width * 0.5 - $footer.height() * 0.5)
          +"px)");

        $contents.css("position", "absolute");
        $contents.css("left",$header.height());
        $contents.css("width",width - $header.height() - $footer.height());

        $spacer.css("display", "none");
      }
    }
  }

  var timer = false;
  $(window).resize(function() {
      if (timer !== false) {
          clearTimeout(timer);
      }
      timer = setTimeout(function() {
          console.log('resized');
          window_resized();
      }, 200);
  });
});
