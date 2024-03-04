


// wow js
wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
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
