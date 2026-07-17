$(function () {
    window.onload = function () {
        $(".pageList li").each(function () {
            if ($(this).hasClass("active") == true) {
                $(this).find(".subMenuList").slideDown();
            }
        });
    }
    
    $(document).on('click', '.pageList > li .menu', function () {
        $(this).parent().toggleClass("active");
        $(this).parent().siblings().removeClass("active");

        $(this).siblings().stop().slideToggle(200);
        $(this).parent().siblings().find(".subMenuList").slideUp(200);
    });

    $(document).on('click', '.subMenuList > li a', function () {
        $(this).parent().addClass("active");
        $(this).parent().siblings().removeClass("active");
    });
    
})