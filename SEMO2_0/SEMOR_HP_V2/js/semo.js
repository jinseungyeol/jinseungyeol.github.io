


// wow js
wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       false,       // default
    live:         true        // default
  }
)
  wow.init();    

//   swiper



// const swiper7_1 = new Swiper('.swiper-containers1', {
//         slidesPerView: 3,
//         slidesPerGroup: 3,
//         slidesPerColumn: 3,
//         spaceBetween: 12,
//         navigation: {
//             nextEl: '.swiper-button-nexts1',
//             prevEl: '.swiper-button-prevs1',
//         },
//     });

// main 07 tab_nav 



// $(document).ready(function () {
//         $(".lat_tab li").click(function () {
//             var a = $(this).index();
//             $(".lat_tab li").not($(this)).removeClass("active");
//             $(this).addClass("active");
//             $(".con_box .consult_con").removeClass("active");
//             $(".con_box .consult_con").eq(a).addClass("active");
//         });
//     })







var page = 1;
var consult_page = 1;
$('#scrollPage1').scroll(function () {
if ($(this).prop('scrollHeight') - Math.round($(this).scrollTop()) <= $(this).height()) {
page++;
getList(page);
}
});


$('#scrollPage2').scroll(function () {
if ($(this).prop('scrollHeight') - Math.round($(this).scrollTop()) <= $(this).height()) {
consult_page++;
getList2(consult_page);
}
});





function fn_check_mobile() {
    // 디바이스 종류 설정
    var pc_device = "win16|win32|win64|mac|macintel";
 
    // 접속한 디바이스 환경
    var this_device = navigator.platform;
 
    if ( this_device ) {
 
        if ( pc_device.indexOf(navigator.platform.toLowerCase()) < 0 ) {
            return true;
        } else {
            return false;
        }
 
    }
}
