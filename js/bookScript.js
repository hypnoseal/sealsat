function updateChapter() {
    //Adjusts chapter navigation height for persistent view
    $(".chapterArea").each(function() {

        var el              = $(this),
            scrollTop       = $(window).scrollTop(),
            offset          = $(".header").outerHeight(true),
            floatingTop     = scrollTop - $(".header").outerHeight(true);

        if (scrollTop > offset) {
            el.css("top", floatingTop);
        } else {
            el.css({"top": "0"})
        };
    });
    //Switches chapter active class
    var activeChapter_      = $(".activeChapter > a").attr('href').match(/\#(.*)/)[0],
        activeProximity   = Math.abs($(activeChapter_).offset().top - $(window).scrollTop());

    $(".chapter > li").each(function() {
        var iterateChapter  = $("a", this).attr('href').match(/\#(.*)/)[0],
            iterateProximity= Math.abs($(iterateChapter).offset().top - $(window).scrollTop());

        if (activeProximity > iterateProximity) {            
            $("a[href*='" + activeChapter_ + "']").parent().removeClass("activeChapter");
            $("a[href*='" + iterateChapter + "']").parent().addClass("activeChapter");
            activeChapter_  = iterateChapter;
        };


    });            
}


$(document).ready(function(){
    //Triggers updateChapterHeight on window scroll
    $(window)
        .scroll(updateChapter)
        .trigger("scroll");
    //Center captions under figures
    $(".figure").each(function(){
        var el        = $(this);
        el.find(".caption").width(el.find("img").width());
    });
});