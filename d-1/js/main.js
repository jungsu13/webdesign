$(function(){

     //gnb
     $(".gnb").hover(
        function(){                    
            $(this).addClass("on")
            $(".sub").shop().fadeIn()
        },
        function(){
            $(this).removeClass("on")
            $(".sub").stop().fadeOut()
        }
    )

    //slide
    setInterval(function(){
        $(".slides").animate({top:"-100%"}, function(){
            $(this).append($(".slide").eq(0))
            $(this).css("top", 0)
        })
    }, 3000)


    //tab
    $(".t_title h3").click(function(){
        var idx = $(this).index()
        $(".t_title h3").removeClass("active")
        $(this).addClass("active")

        $(".t_con ul").hide()
        $(".t_con ul").eq(idx).show()
    })


})