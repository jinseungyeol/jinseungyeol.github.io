$(function () {
    //로딩중
    $('<div class="overlay"><div class="img_wrap"><img src="/INTRO/img/loading01.png"><img src="/INTRO/img/loading02.png"><img src="/INTRO/img/loading03.png"><img src="/INTRO/img/loading04.png"></div></div>').appendTo('body');

    fn_fadeLoadImg();
    setInterval(fn_fadeLoadImg, 2000);
})

$(window).on('load', function () {
    //로딩완료 시
    $(".overlay").hide();
})

// 로딩 이미지 교차 함수
function fn_fadeLoadImg() {
    $(".overlay img").each( function( index ) {
        $(this).delay(300 * index).animate( {
            "right": 0,
            "opacity": 1
        });
        $(".overlay img").eq(index).css({"right": 50, "opacity": 0});
    });
};