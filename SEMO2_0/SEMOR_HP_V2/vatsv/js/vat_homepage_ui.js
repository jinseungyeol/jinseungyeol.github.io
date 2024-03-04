// 로드이벤트
$(window).on('load', function () {
  // AOS JS
  AOS.init({
    duration: 700,
    delay: 300,
    disable: function () {
        var maxWidth = 800;
        return window.innerWidth < maxWidth;
    }
  });
  
  $(".visual .odometer").html(245)
})
// 툴팁 생성
$('.when button').on('click', function () {
  $(this).parent().toggleClass('active')
})
// 모바일 시 팝업 닫기
$('.dim, .tooltip button').on('click', function () {
  $('.when').removeClass('active')
})
// 스크롤이벤트
$(window).on('scroll', function () {
  //save섹션 도달 시 하단 고정문구 노출
  var saveTop = $('.save').offset().top
  var headerH = $('#header .inner').height()
  
  if ($(window).scrollTop() > saveTop - (saveTop - headerH) / 2) {
    $('.floatTxt').addClass('active')
  } else {
    $('.floatTxt').removeClass('active')
  }

  if ($(window).scrollTop() > saveTop - 350) {
    $(".save .odometer").html(49)
  }
})
// 부가세 절세 진단서비스 이동
$('#freeVat').on('click', function () {
  var host = window.location.host;
  var subdomain = host.split('.')[0];
  var urlParam = window.location.search

  //UAT 여부를위해
  var urlParams = new URLSearchParams(window.location.search); 
  var isUAT           = urlParams.get('isUAT');

  if (subdomain == 'www') {
    location.href = `https://reportmgmt.appplay.co.kr/prmu_vat_001.act${urlParam}`
  } else if (isUAT == 'Y') {
    location.href = `https://uatsemormgmt.smjb.co.kr/prmu_vat_001.act${urlParam}`
  } else {
    location.href = `https://sitsemormgmt.smjb.co.kr/prmu_vat_001.act${urlParam}`
  }
})

// 세무사무소로고 노출
function fn_showTaxName() {
  var urlParams = new URLSearchParams(window.location.search);
  var TXACNum = urlParams.get('TXAC_BSNO');
  var param = {
    TRAN_NO: 'SMR_TXAC_INFO_R01',
    REQ_DATA: {
      TXAC_BSNO: TXACNum
    }
  }

  console.log(param)
  semorprtApi.rprtcallAjax(param, function (data) {
    var taxName = data.RESP_DATA.USE_INTT_NM //세무사무소명
    var kakaoURL = data.RESP_DATA.KAKAO_LINK_URL //카카오톡 링크
    var logoSrc = data.RESP_DATA.LOGO_IMG_PATH //로고이미지 경로

    console.log(data)
    if (data.RSLT_CD == '0000') {

      if (TXACNum == '8478700259' || TXACNum == null) {
        // URL 파라미터 없거나 로움세무회계일 때
        $('.inquiry').addClass('active');

        $('.inquiry.active').on('click', function () {
          window.open('https://qe398.channel.io/home');
        })

        $('.textLogo').removeClass('active')
        $('.imgLogo').addClass('active')
      } else {
        // 그 외
        // kakaoURL 있을때만 문의하기 버튼 노출
        if (kakaoURL) {
          $('.inquiry').addClass('active')
        }
        $('.inquiry.active').on('click', function () {
          window.open(kakaoURL)
        })

        // 로고이미지노출
        if (logoSrc) {
          $('.imgLogo').addClass('active')
          $('.imgLogo img').attr('src', logoSrc)
        } else {
          $('.textLogo').addClass('active')
          $('.textLogo').html(taxName)
        }
      }

      
      
    } else {
      // 오류
      alert(data.RSLT_MSG)
    }
  })
}
// 주소복사
$('.share a').click(function() {
  navigator.clipboard.writeText(location.href).then(res=>{
    alert("주소가 복사되었습니다!");
	})
});