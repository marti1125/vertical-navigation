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

          var contentSections = $('.section');

          updateNavigation();
        	$(window).on('scroll', function(){
        		updateNavigation();
        	});

          function updateNavigation() {
        		contentSections.each(function(){
        			$this = $(this);
              var theID = $this.attr("id");
        			if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
                var imgalt = $("a[href='#" + theID + "']").children("img").attr("alt");
                $("a[href='#" + theID + "']").children("img").attr("src",settings.path_img + imgalt + "b.png");
        			}else {
                var imgalt = $("a[href='#" + theID + "']").children("img").attr("alt");
                $("a[href='#" + theID + "']").children("img").attr("src",settings.path_img + imgalt + ".png");
        			}
        		});
        	}

        });

    };

}( jQuery ));
