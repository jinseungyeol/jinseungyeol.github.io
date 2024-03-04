/**AOS JS */
AOS.init({
  duration: 1000,
  delay: 300,
  disable: () => window.innerWidth < 800
});

/** 하루 카운트다운 */
var fn_todayCountdown = function () {
  const elCount = document.getElementById("countdown");
  const d = new Date();
  const hours = 24 - d.getHours();
  const min = (60 - d.getMinutes()).toString().padStart(2, '0');
  const sec = (60 - d.getSeconds()).toString().padStart(2, '0');

  elCount.innerHTML = `${hours}:${min}:${sec}`;
}

fn_todayCountdown()
setInterval(fn_todayCountdown, 1000)

/**페이지 진입시 비주얼 텍스트 fade */
var fn_visualFadeIn = function (delay) {
  $(".wooriMkt .serviceTxt p").each(function (index) {
    setTimeout(function () {
      $(".wooriMkt .serviceTxt p").eq(index).addClass('active')
    }, delay + (250 * index))
  })
}

if (window.innerHeight < 1200) {
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > 50) {
      fn_visualFadeIn(0)
    }
  })
} else {
  fn_visualFadeIn(1500)
}

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent); //안드로이드, ios 검사
var varUA = navigator.userAgent.toLowerCase(); //userAgent 값 얻기

if (isMobile) {
  $(".btnDown").html('세모장부 앱 다운받기')

  $(".btnDown").on('click', function (e) {
    e.preventDefault();
    if ( varUA.indexOf('android') > -1) {
      //안드로이드 구글 플레이스토어 이동
      window.open('https://play.google.com/store/apps/details?id=com.webcash.semo') 
    } else if ( varUA.indexOf("iphone") > -1 || varUA.indexOf("ipad") > -1 ||varUA.indexOf("ipod") > -1 ) {
      //IOS 앱스토어 이동
      window.open('https://apps.apple.com/kr/app/%EC%84%B8%EB%AA%A8%EC%9E%A5%EB%B6%80-%EC%84%B8%EB%AC%B4%EC%82%AC-1-1%EC%A7%84%EB%8B%A8/id1470013890') 
    } else {
      //아이폰, 안드로이드 외 모바일
      alert('스토어에 세모리포트를 검색해주세요')
    }
  })
}

/**애니메이션 한번만 작동을 위해 */
var isTrue = true

$(window).on('scroll', function () {
  
  var thirdH = window.innerHeight / 3; //디바이스 높이 3분의1 
  var scrollH = $(window).scrollTop()

  if (scrollH > $(".why").offset().top - thirdH && scrollH < $(".apply").offset().top - 100) {
    $('.btnfitApply').addClass('active')
  } else {
    $('.btnfitApply').removeClass('active')
  }

  // bar 그래프 점차적으로 등장
  setTimeout(function () {
    if (scrollH > $(".satisService").offset().top - 400 && isTrue == true) {
      isTrue = false
      $('.satisService').addClass('active')
    }
  }, 1350)
})

/**유효성 검사 */ 
$("#applyForm").on("submit", function (e) {
  e.preventDefault();
  
  var busiNumVal = fn_sumNumber("input[name='BIZ_NO']")
  var phoneNumVal = fn_sumNumber("input[name='APPL_CNTC']")

  /**휴대폰번호 정규식 */ 
  var phoneRule = /^(01[016789]{1})[0-9]{3,4}[0-9]{4}$/;

  

  // 유효성검사
  if (busiNumVal == "" || busiNumVal.length !== 10) {
    alert("사업자번호를 입력해 주세요!");
    $("input[name='BIZ_NO']:nth-child(1)").focus();
    return;
  } else if (!fn_busiValidBizNum(busiNumVal)) {
    alert("맞지 않는 사업자번호 형식입니다. 다시 입력해 주세요.");
    $("input[name='BIZ_NO']:nth-child(1)").focus();
    return;
  } 
  else if ($("input[name='RPPR_NM']").val() == "") {
    alert("대표자명을 입력해 주세요!");
    $("input[name='RPPR_NM']").focus();
    return;
  } else if ($("input[name='APPL_LC']").val() == "") {
    alert("지역을 입력해 주세요!");
    $("input[name='APPL_LC']").focus();
    return;
  } else if ($("input[name='BSNN_NM']").val() == "") {
    alert("상호명을 입력해 주세요!");
    $("input[name='BSNN_NM']").focus();
    return;
  } else if (phoneNumVal == "" || phoneNumVal.length !== 11) {
    alert("연락처를 입력해 주세요!");
    $("input[name='APPL_CNTC']:nth-child(1)").focus();
    return;
  } else if (!phoneRule.test(phoneNumVal)) {
    alert("맞지 않는 연락처 형식입니다. 다시 입력해 주세요.");
    $("input[name='APPL_CNTC']:nth-child(1)").focus();
    return;
  } else if ($("input[name='BSST_TPBS']").val() == "") {
    alert("업태 및 업종을 입력해 주세요!");
    $("input[name='BSST_TPBS']").focus();
    return;
  } else if (!$(".selectList li").hasClass("selected")) {
    alert("기장서비스 이용 여부를 선택해 주세요.");
    $(".selectBox").addClass("active");
    return;
  } else if ($(".interest .checkList > li.active").length == 0) {
    alert("세모리포트 제공 서비스 중 관심있는 내용을 선택해 주세요.");
    return;
  } else if ($("#terms").prop("checked") !== true) {
    alert("개인정보처리방침에 동의해 주세요.");
    return;
  }
  
  var param = {
    TRAN_NO: "SMR_PRMU_TXSV_APPL_C01",
    REQ_DATA: {
      BIZ_NO: busiNumVal,
      BSNN_NM: $.trim($("input[name='BSNN_NM']").val()),
      RPPR_NM: $.trim($("input[name='RPPR_NM']").val()),
      APPL_CNTC: phoneNumVal,
      APPL_LC: $("input[name='APPL_LC']").val(),
      BSST_TPBS: $.trim($("input[name='BSST_TPBS']").val()),
      TAX_CNST_YN: $(".selectList li.selected a").data("use_service"),
      APPL_CATG: funcBitwise(".interest .checkList > li.active", "interest"),
      PRVC_PLCY_YN: $("#terms").attr("data-agree"),
    }
  }

  fn_urlParams(param.REQ_DATA);
  console.log(param)
  semorprtApi.rprtcallAjax(param, function (data) {
    if (data.RSLT_CD == '0000') {
      alert('정상적으로 신청되었습니다.');
      // location.reload();
      
      setTimeout(function () {
        window.scrollTo(0,0)
      }, 100)
    } else {
      alert(data.RSLT_MSG);
    }
  });
})

/**사업자번호, 연락처 인풋 값 취합 */
var fn_sumNumber = function(obj) {
  var arr = [];
  for(let i=0; $(obj).length > i; i++) {
    arr.push($(obj).eq(i).val());
  }
  return arr.join("");
}

/**유입경로 ajax param에 넣어주기 */
var fn_urlParams = function(json) {
  var searchParams = new URLSearchParams(window.location.search);

  for (const urlParam of searchParams) {
    json[`${urlParam[0]}`] = urlParam[1];
  }
  return json;
}

/**실시간 유효성 검사 함수 */
var fn_validation = function() {
  var busiNumVal = fn_sumNumber("input[name='BIZ_NO']")
  var phoneNumVal = fn_sumNumber("input[name='APPL_CNTC']")

  $(".btnSubmit").removeClass("active");

  if (busiNumVal == "" || busiNumVal.length !== 10) {                    
    return;
  } else if ($("input[name='RPPR_NM']").val() == "") {                    
    return;
  } else if ($("input[name='APPL_LC']").val() == "") {                    
    return;
  } else if ($("input[name='BSNN_NM']").val() == "") {                    
    return;
  }  else if (phoneNumVal == "" || phoneNumVal.length <= 10) {                    
    return;
  } else if ($("input[name='BSST_TPBS']").val() == "") {                    
    return;
  } else if (!$(".selectList li").hasClass("selected")) {                    
    return;
  } else if ($(".interest .checkList > li.active").length == 0) {                    
    return;
  } else if ($("#terms").prop("checked") !== true) {                    
    return;
  } else {
    $(".btnSubmit").addClass("active");
  }
}

// 실시간 유효성 검사
$("input[name='BIZ_NO'], input[name='BSNN_NM'], input[name='RPPR_NM'], input[name='APPL_CNTC'], input[name='APPL_LC'], input[name='BSST_TPBS']").on("keyup keypress", function () {
  fn_validation();
})

// 사업자번호 자동포커스
$("input[name='BIZ_NO']").on("keyup", function () {
  if($("input[name='BIZ_NO']").eq(0).val().length == 3) {
    $("input[name='BIZ_NO']").eq(1).focus()

    if($("input[name='BIZ_NO']").eq(1).val().length == 2) {
      $("input[name='BIZ_NO']").eq(2).focus()
    }
  }
})

// 연락처 자동 포커스
$("input[name='APPL_CNTC']").on("keyup", function () {
  if($("input[name='APPL_CNTC']").eq(0).val().length == 3) {
    $("input[name='APPL_CNTC']").eq(1).focus()
    
    if($("input[name='APPL_CNTC']").eq(1).val().length == 4) {
      $("input[name='APPL_CNTC']").eq(2).focus()
    }
  }
})

// 세무 기장서비스 선택
$(".selectList li").on("click", function () {
  $(this).addClass("selected").siblings().removeClass("selected");
  $(".selectBox > a span").text($(this).find("a").text())
  $(".selectBox > a span").css("color", "#111")
  fn_validation();
})
$(".apply #applyForm .useService .selectBox").on('click', function () {
  $(this).toggleClass("active")
})

// 개인정보처리방침
$("#terms").on("click", function () {
  fn_validation();

  if ($(this).prop("checked") == true) {
    $(this).attr("data-agree", "Y");
  } else {
    $(this).attr("data-agree", "N");
  }
})

// 주요 관심사 체크
$(".interest .checkList label").on('click', function() {
  if ($(this).find('input').prop('checked') == true) {
    $(this).parent().addClass("active")
  } else {
    $(this).parent().removeClass("active")
  }

  fn_validation();
})

// apply 섹션으로 스크롤 이동
$(".btnApply, .moveApply").on('click', function () {
  window.scrollTo({ top: $(".apply").offset().top, behavior: 'smooth' });
})

// 개인정보처리방침
$("#openPdf").on('click', function () {
  window.open("../pdf/terms_privacy.pdf", "_blank", "width=640, height=800");
});

/**반각문자 제한 함수 */
fn_chkChar = function (obj) {
  var RegExp = /['"$%&]/gi;	//정규식 구문

  if (RegExp.test(obj.value)) {
    // 특수문자 모두 제거
    obj.value = obj.value.replace(RegExp, '');
  }
}

/**사업자 등록번호 체크 */
function fn_busiValidBizNum(number) {
  var host = window.location.host;
  var subdomain = host.split('.')[0];
  if (subdomain !== 'publ') {
    var numberMap = number.replace(/-/gi, '').split('').map(function (d){
        return parseInt(d, 10);
    });
    
    if (numberMap.length == 10) {
      // 000-00-00000일시 false 반환
      if (numberMap.every(d => d === numberMap[0])) {
        return false;
      }
      
      var keyArr = [1, 3, 7, 1, 3, 7, 1, 3, 5];
      var chk = 0;
      
      keyArr.forEach(function(d, i){
        chk += d * numberMap[i];
      });
      
      chk += parseInt((keyArr[8] * numberMap[8])/ 10, 10);
      return Math.floor(numberMap[9]) === ( (10 - (chk % 10) ) % 10);
    }
    
    return false;
  }

  return true;
}

/**선택된 DOM 비트연산 함수 */
funcBitwise = function (obj, dataName) {
  var bitNum; //신청유형 다중선택 비트연산값

  $(obj).each(function (i) {
    return bitNum |= $(".interest .checkList > li.active").eq(i).data(dataName);
  });
  return bitNum;
}

/**영역 외 클릭시 active 클래스 제거 */
var fn_areaOutClick = function(obj) {
  $(document).click(function (event) {
    var container = $(obj);
    
    if (!container.is(event.target) && !container.has(event.target).length) {
        container.removeClass("active");
    }
  });
}