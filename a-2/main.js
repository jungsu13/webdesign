$(function(){
    // gnb
    $(".gnb").hover(
        function() {
            $(this).addClass("active")
            $(".sub").stop().slideDown()
        },
        function() {
            $(this).removeClass("active")
            $(".sub").stop().slideUp()
        }
    )      

    // modal
    $("#showModal").click(function(){
        $(".modal").show()
    })

    $("#closeModal").click(function(){
        $(".modal").hide()
    })

    // slide
    setInterval(function(){
        $(".slides").animate({left: "-100%"}, function(){
            $(this).append($(".slide").eq(0))
            $(this).css("left", 0)
        })
    }, 3000)

    // tab
    $(".tab_title h3").click(function(){
        $(".tab_title h3").removeClass("active")
        $(this).addClass("active")

        var idx = $(this).index()
        $(".tab_contents .item").hide()
        $(".tab_contents .item").eq(idx).show()
    })   

}) 