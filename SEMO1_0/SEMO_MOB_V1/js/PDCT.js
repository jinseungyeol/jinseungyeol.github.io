$(document).ready(function () {
    $(".p_right_box > li").hover(function () {
        $(this).css("box-shadow", "5px 10px 10px 5px #c8c8c8");
    });
    // 영역 그림자
    $(".p_right_box > li").mouseleave(function () {
        $(this).css("box-shadow", "unset");
    });

    // html 내용 팝업 영역
    $(".p_right_box > li").click(function () {
        var child = $(this).clone(true);
        child.find(".p_con_title").remove();
        $(".data_popup > .textarea > .htmlContent").text($(child).html());
        $(".data_popup").fadeIn();
        $(".textarea .delete").on("click", () => {  
        $(".data_popup").fadeOut();
        });

        var htmlVal = $(".data_popup > .textarea > .htmlContent").text($(child).html());
        htmlVal.execCommand('copy');
    });
    // $(".textarea.delete").click(function () {
    //   $(".data_popup").fadeOut();
    // });
    $(".textarea").on("click", function () {
        $(this).addClass("delete");

    });
});

function iframeLink() {
    const iframe_url = [
        'layout_Basic.html',
        'layout_button.html',
        'layout_popup.html',
        'layout_input.html',
        'layout_icon.html',
        'layout_layout.html'
    ]

    $(".pdct_list").click(function () {
        const tabIndex = $(".pdct_list").index(this);
        $("#iframe_display").attr('src', iframe_url[tabIndex]);

    });
} 





