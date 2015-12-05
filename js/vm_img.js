(function ( $ ) {

    $.fn.vm_img = function( options ) {

        // This is the easiest way to have default options.
        var settings = $.extend({
            // These are the defaults.
            path_img: ""
        }, options );

        return this.each(function() {

          var elem = $( this );

          $('a.item_menu').click(function(){

            elem.each(function(){
              $(this).children().children().children().children("img").each(function(){
                var altimg = $(this).attr("alt")
                $(this).attr("src",settings.path_img+altimg+".png");
              });
            });

            var imgorg = $(this).children("img").attr("alt");
            var activeimgorg = imgorg.replace(imgorg,imgorg+"b");
            $(this).children().attr("src",settings.path_img+activeimgorg+".png");

            $('html, body').animate({
                scrollTop: $( $.attr(this, 'href') ).offset().top
            }, 500);
            return false;

          });

          var aChildren = elem.children().children().children("a");
            var aArray = [];
            for (var i=0; i < aChildren.length; i++) {
                var aChild = aChildren[i];
                var ahref = $(aChild).attr('href');
                aArray.push(ahref);
            }

          $(window).scroll(function(){
            var windowPos = $(window).scrollTop();
            var windowHeight = $(window).height();
            var docHeight = $(document).height();

            for (var i=0; i < aArray.length; i++) {
              var theID = aArray[i];
              var divPos = $(theID).offset().top;
              var divHeight = $(theID).height();
              if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                var imgalt = $("a[href='" + theID + "']").children("img").attr("alt");
                $("a[href='" + theID + "']").children("img").attr("src",settings.path_img + imgalt + "b.png");
              } else {
                var imgalt = $("a[href='" + theID + "']").children("img").attr("alt");
                $("a[href='" + theID + "']").children("img").attr("src",settings.path_img + imgalt + ".png");
              }
            }
          });

        });

    };

}( jQuery ));
