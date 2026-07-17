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

// swiper 처리를 위한 변수 선언
var swiper1;
var swiper2;
var swiper3;
var swiper4;
var swiper5;

var page = 1;
var page2 = 1; 
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

$(document).ready(function () {
  if(window.location.hostname == 'xn--or3b2no4ee3j.com') {
    location.href = 'https://www.xn--or3b2no4ee3j.com';
  }

  // ####### object Control ###########
  swiper1 = new Swiper('.swiper-container', {
    effect: 'fade',
    loop: true,
    speed: 1500,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  swiper2 = new Swiper('.swiper-container2', {
    slidesPerView: 3,
    spaceBetween: 54,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next2',
      prevEl: '.swiper-button-prev2',
    },
    pagination: {
      el: '.swiper-pagination2',
      clickable: true,
    },
  });  

  swiper3 = new Swiper('.swiper-containerY2', {
    slidesPerView: 3,
    spaceBetween: 22,
    centeredSlides: false,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next5',
      prevEl: '.swiper-button-prev5',
    },
  });

  swiper4 = new Swiper('.swiper-containerY', {
    slidesPerView: 3,
    spaceBetween: 22,
    centeredSlides: false,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next4',
      prevEl: '.swiper-button-prev4',
    },
  });

  swiper5 = new Swiper('.swiper-container3', {
    slidesPerView: 1,
    centeredSlides: true,
    navigation: {
      nextEl: '.swiper-button-next3',
      prevEl: '.swiper-button-prev3',
    },
    pagination: {
      el: '.swiper-pagination3',
      clickable: true,
    },
  });    

  $(".hd_pops_reject").click(function () {
    var id = $(this).attr('class').split(' ');
    var ck_name = id[1];
    var exp_time = parseInt(id[2]);
    $("#" + id[1]).css("display", "none");
    set_cookie(ck_name, 1, exp_time, 'https://xn--or3b2no4ee3j.com');
  });
  $('.hd_pops_close').click(function () {
    var idb = $(this).attr('class').split(' ');
    $('#' + idb[1]).css('display', 'none');
  });
  $("#hd").css("z-index", 1000);
  
  $(".tab_nav li").click(function () {
    var a = $(this).index();
    $(".tab_nav li").not($(this)).removeClass("active");
    $(this).addClass("active");
    $(".con_box .tab_con").removeClass("active");
    $(".con_box .tab_con").eq(a).addClass("active");
  });

  $(document).on('click', '.btn_pop01', function () {
    $('.pop01').fadeIn();
    $('.popBG').show();
  })

  $('.btn_close01').click(function () {
    $('.pop01').hide();
    $('.popBG').hide();
  });

  $('.btn_pop02').click(function () {
    $('.pop02').show();
    $('.popBG').show();
  });
  $('.btn_close02').click(function () {
    $('.pop02').hide();
    $('.popBG').hide();
      
  });

  $('.pop_submit').click(function () {
    var param = {};
    // 공통부
    param.API_ID    = "EXTN_KAKAO_C001"; // EXTN_KAKAO_C001 [홈페이지 설치하기 알림톡 발송] Ajax 호출

    // 개별부 REQ_DATA
    var PROD_CD     = $("input[name='PROD_CD']").val();
    var BIZ_NO      = $("input[name='BIZ_NO']").val();
    var CLPH_NO     = $("input[name='CLPH_NO']").val();
    var RPPR_NM     = $("input[name='RPPR_NM']").val();

    param.REQ_DATA              = {};
    param.REQ_DATA.PROD_CD      = PROD_CD;
    param.REQ_DATA.BIZ_NO       = BIZ_NO;
    param.REQ_DATA.CLPH_NO      = CLPH_NO;
    param.REQ_DATA.RPPR_NM      = RPPR_NM;

    semoApi.callAjax(param, function(data){
      if (data.RSLT_CD == '0000') {
        alert('발송되었습니다.');
        $('.btn_close01').click();
      } else {
        alert(data.RSLT_MSG);
      }
    });
  });

  // 프리미엄 세무서비스 스크롤 처리
  $('#scrollPage2').scroll(function () {
    if ($(this).prop('scrollHeight') - Math.round($(this).scrollTop()) <= $(this).height()) {
      page2++;
      fn_consultList(page2);
    }
  });

  // 이용약관 load
  $("#terms01").on('click', function () {
    window.open("/pdf/kt_terms.pdf", "_blank", "width=640, height=800");
  });
  // 개인정보처리방침 load
  $("#terms02").on('click', function () {
    window.open("/pdf/kt_privacy_20250318.pdf", "_blank", "width=640, height=800");
  });

  fn_consultList(page2);
  fn_consult_Cnt();
  fn_urlParams("proto/sub1");
  fn_texList();

  //사장님용 신청폼 이동
  $(".btn_pop03, .btnSubmit").on('click', function(e) {
      e.preventDefault();
      fn_moveConsultForm('HO_KT');
  })

  // 나의 세무사에게 ‘세모리포트’ 요청하기 이동
  $(".btnNews").on('click', function(e) {
    e.preventDefault();
    fn_moveTaxApply('HO_KT');
  })

  $(".sub_nav li").click(function () {
      var a = $(this).index();
      $(".sub_nav li").not($(this)).removeClass("active");
      $(this).addClass("active");
      $(".con_box .tab_con").removeClass("active");
      $(".con_box .tab_con").eq(a).addClass("active");
  });

  $('.btn_pop02').click(function () {
      $('.pop02').fadeIn()
      $('.popBG').show()
  });
  $('.btn_close02').click(function () {
      $('.pop02').hide();
      $('.popBG').hide()
  });
  
    // 발송하기 버튼 클릭
  $('.pop_submit').click(function () {
      var param = {};
      // 공통부
      param.API_ID    = "EXTN_KAKAO_C001"; // EXTN_KAKAO_C001 [홈페이지 설치하기 알림톡 발송] Ajax 호출

      // 개별부 REQ_DATA
      var PROD_CD     = $("input[name='PROD_CD']").val();
      var BIZ_NO      = $("input[name='BIZ_NO']").val();
      var CLPH_NO     = $("input[name='CLPH_NO']").val();
      var RPPR_NM     = $("input[name='RPPR_NM']").val();

      param.REQ_DATA              = {};
      param.REQ_DATA.PROD_CD      = PROD_CD;
      param.REQ_DATA.BIZ_NO       = BIZ_NO;
      param.REQ_DATA.CLPH_NO      = CLPH_NO;
      param.REQ_DATA.RPPR_NM      = RPPR_NM;

      semoApi.callAjax(param, function(data){
          // console.log(data);
          if (data.RSLT_CD == '0000') {
              alert('발송되었습니다.');
              $('.btn_close02').click();
          } else {
              alert(data.RSLT_MSG);
          }
      });
  });

    // 파라미터 호출 
  var urlParams = new URLSearchParams(window.location.search);
  var index = urlParams.get('index');
  
  $(".sub1 .inner .sub_nav ul li").eq(index).addClass("active");
  $(".sub1 .inner .con_box .tab_con").eq(index).addClass("active");

  // 이용약관 load
  $("#terms01").on('click', function () {
      window.open("../pdf/kt_terms.pdf", "_blank", "width=640, height=800");
  });
  // 개인정보처리방침 load
  $("#terms02").on('click', function () {
      window.open("../pdf/kt_privacy_20250318.pdf", "_blank", "width=640, height=800");
  });
});  // End ready

// 무료절세컨설팅 신청자현황
function fn_consultList(page2) {
      
  var param = {};
  // 공통부
  param.API_ID    = "EXTN_HOME_R001"; // EXTN_HOME_R001 [무료절세컨설팅 신청자현황] Ajax 호출

  // 개별부 REQ_DATA
  param.REQ_DATA              = {};
  param.REQ_DATA.PROD_CD      = "SEMO_011";
  param.REQ_DATA.PAGE_NO      = page2;
  param.REQ_DATA.PAGE_SZ      = "12";

  semoApi.callAjax(param, function(data){
    // console.log('통신 성공 !!'+JSON.stringify(data));
    if (data.RSLT_CD == '0000') {
      data.RESP_DATA.REC.forEach(function (item) {
        let ymd = item.NEW_DT.substr(0, 4) + "-" + item.NEW_DT.substr(4, 2) + "-" + item.NEW_DT.substr(6, 2);

        if (item.IS_NEW) {
          var row = '';
          row += '<tr>';
          row += '<td>' + ymd + '</td>';
          row += '<td>' + item.BSNN_NM + ' 에서 가입하셨습니다.<span class="new_icon">NEW</span></td>';
          row += '<td>' + item.TPBS + '</td>';
          row += '</tr>';
        } else {
          var row = '';
          row += '<tr>';
          row += '<td>' + ymd + '</td>';
          row += '<td>' + item.BSNN_NM + ' 에서 가입하셨습니다.</td>';
          row += '<td>' + item.TPBS + '</td>'; 
          row += '</tr>';
        }
        $('#table-body2').append(row);
      })
    } else {
      // console.log('api Error')
    }
  });     
}   // End fn_consultList

  //무료절세컨설팅 신청자 건수 
function fn_consult_Cnt() {
  var param = {};
  // 공통부
  param.API_ID    = "EXTN_HOME_R002"; // EXTN_HOME_R001 [무료절세컨설팅 신청자현황] Ajax 호출

  // 개별부 REQ_DATA
  param.REQ_DATA              = {};
  param.REQ_DATA.PROD_CD      = "SEMO_601";

  semoApi.callAjax(param, function(data){
    // console.log('통신 성공 !!'+JSON.stringify(data));
    if (data.RSLT_CD == '0000') {
      // console.log(data)
      $("#consult_Cnt").html(data.RESP_DATA.TOT_CNT);
    } else {
      // console.log('api Error')
    }
  });     
}   // End fn_consult_Cnt

// sub1 파라미터 호출
function fn_urlParams(pageName) {
  $('.main03 .swiper-container2 li').click(function () {
    var params = { index: $(this).data("swiper-slide-index") };
    var urlParam = $.param(params);
      
    location.href = `${pageName}.html?${urlParam}`;
  });
}

function fn_texList() {
  // EXTN_PROD_R002   실시간 실컨설팅센터 세무주치의 현황
  // RESP_DATA        응답데이터 
  // WAIT_CNT         신청대기 세무대리인
  // TOT_CNT          등록 회원 세무대리인
  // WM_CNT           세모장부 우수 세무사
  var param = {};
  // 공통부
  param.API_ID    = "EXTN_PROD_R002"; // EXTN_PROD_R002 [실시간 실컨설팅센터 세무주치의 현황] Ajax 호출
  // 개별부 RESP_DATA
  param.RESP_DATA              = {};
  param.RESP_DATA.PROD_CD      = "";

  semoApi.callAjax(param, function(data){
    // console.log('통신 성공 !!'+JSON.stringify(data));  
    if (data.RSLT_CD == '0000') {
      var YDT_CNT     = data.RESP_DATA.WAIT_CNT;        // 신청대기 세무대리인
      var TOT_CNT     = data.RESP_DATA.TOT_CNT;         // 등록 회원 세무대리인
      var TOT_TRN_AMT = data.RESP_DATA.WM_CNT ;         // 세모장부 우수 세무사
                      
      setTimeout(function () {
        const odometer = document.querySelectorAll(".odometer");
        odometer[0].innerHTML = YDT_CNT;
        odometer[1].innerHTML = TOT_CNT;
        odometer[2].innerHTML = TOT_TRN_AMT;
      }, 100);
    }
  });
} 