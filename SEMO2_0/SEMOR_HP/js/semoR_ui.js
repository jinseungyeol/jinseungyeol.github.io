var isMobile = false; // 기본은 PC

$(function () {
    isMobile = fn_check_mobile();
    
    // Top버튼 함수
    funcGoToTop = function () {
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 50) {
                $('.areaFloatingBtn.btnTop').addClass("active");
            } else {
                $('.areaFloatingBtn.btnTop').removeClass("active");
            }
        });
        $('.areaFloatingBtn.btnTop a').on('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    scrollodometer = $(".countList").offset().top - 500;   
    fn_taxCnt();
})

/* 화면 back scroll 고정/해제 */
scrollLock = function(thisScrollY) {
    $("body").css({'overflow':'hidden', 'position':'fixed', 'width':'100%'});
    $("body").css("top", -thisScrollY);
};

// scroll 고정 (화면이 최상단으로 스크롤됨을 방지하기 위함)
scrollUnlock = function(scrollPosY) {
    $("body").css({'overflow':'', 'position':'', 'width':''});
    $(window).scrollTop(Math.abs(parseInt(scrollPosY)));
};

// center 팝업
popCenter = function(obj){
    var winH = $(window).height();
    var maxH = (winH * 0.8);
    var thisScrollY = $(window).scrollTop();
    var maxTotalH = maxH - 135;
    var $cTarget = $(obj).find(".centerLayer .popInner");
    
    scrollLock(thisScrollY);
    
    // 최대 높이 지정 23-02-24 삭제
    // $cTarget.css({"max-height": maxH});
    
    // center 팝업 열기
    $(obj).find(".centerLayer").fadeIn();
};

// pop close
popClose = function(obj) {
    var $popWrap = $(obj).closest(".popWrap");
    var $slidePopInner = $(".slidePop .popInner");
    scrollPosY = ($("body").css("top"));

    if ($popWrap.hasClass("slidePop")) {
        $slidePopInner.css({ "transform": "translate3d(0, 100%, 0)"});
        setTimeout(function () {
            $popWrap.fadeOut(150);
        },400)
    } else {
        $popWrap.fadeOut(150);
    }
    
    scrollUnlock(scrollPosY);
};

// dim close
popdimClose = function(obj) {
    scrollPosY = $("body").css("top");
    var $popWrap = $(obj).closest(".popWrap");
    var $slidePopInner = $(".slidePop .popInner");

    if ($popWrap.hasClass("slidePop")) {
        $slidePopInner.css("transform", "translate3d(0, 100%, 0)");
        setTimeout(function () {
            $popWrap.fadeOut(150);
        },400)
    } else {
        $popWrap.fadeOut(150);
    }

    scrollUnlock(scrollPosY);
};

// 스크롤 시 헤더 변경
$(window).on('scroll', function () {
    if ($(this).scrollTop() > 50) {
        $(".header").addClass("active");
    } else {
        $(".header").removeClass("active");
    }
})

//날짜 비교
isDeadline = function(startDead, endDead) {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const day = date.getDate() + 1 < 10 ? `0${date.getDate()}` : date.getDate();
    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(); // 시
    const today = parseInt(year.toString() + month.toString() + day.toString() + hours.toString());
    console.log(today, endDead)
    return today <= startDead || today >= endDead;
}
    
//셋팅한 쿠키 확인
getCookie = function() {
    return !document.cookie ? "" : document.cookie
    .split(';')
    .find(row => row.trim().startsWith('popup_voucher'))
    ?.split('=')[1];
} 

//셋팅한 쿠키 확인
getCookie2 = function() {
    return !document.cookie ? "" : document.cookie
    .split(';')
    .find(row => row.trim().startsWith('pop_thanksGiving'))
    ?.split('=')[1];
}

//쿠키 셋팅
setCookie = function () {
    let date = new Date();
    date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000 ));
    const expires = "expires=" + date.toUTCString();
    document.cookie = "popup_voucher=true; " + expires + "; path=/";
}

//쿠키 셋팅
setCookie2 = function () {
    let date = new Date();
    date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000 ));
    const expires = "expires=" + date.toUTCString();
    document.cookie = "pop_thanksGiving=true; " + expires + "; path=/";
}

// 선택된 DOM 비트연산 함수
funcBitwise = function (obj, dataName) {
    var bitNum; //신청유형 다중선택 비트연산값

    $(obj).each(function (i) {
        return bitNum |= $(".serviceList li.active").eq(i).data(dataName);
    });
    return bitNum;
}

// 반각문자 제한 함수
fn_chkChar = function (obj) {
    var RegExp = /['"$%&]/gi;	//정규식 구문

    if (RegExp.test(obj.value)) {
        // 특수문자 모두 제거
        obj.value = obj.value.replace(RegExp, '');
    }
}

// 사업자번호 검증
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

// 영역 외 클릭시 active 클래스 제거
function fn_areaOutClick(obj) {
    $(document).click(function (event) {
        var container = $(obj);

        if (!container.is(event.target) && !container.has(event.target).length) {
            container.removeClass("active");
        }
    });
}

function fn_taxCnt() {
    var param = {};
    // 공통부
    param.TRAN_NO = "SMR_SEMO_RPRT_STTS_R01"; // ESMR_SEMO_RPRT_STTS_R01 [세모리포트 가입현황] Ajax 호출
    // 개별부 REQ_DATA
    param.REQ_DATA = {};
    semorprtApi.rprtcallAjax(param, function (data) {
        if (data.RSLT_CD == '0000') {
            TOT_TXOF_CNT = data.RESP_DATA.TOT_TXOF_CNT; // 세무사 가입수
            R_BZAQ_CNT = data.RESP_DATA.R_BZAQ_CNT; // 수입처 가입수

            // 가입수 현황 스크롤 이벤트 처리
            if (isMobile) {
                $('.odometer1').html(numberToKorean(TOT_TXOF_CNT)); //세무사 가입수
                $('.odometer2').html(numberToKorean(R_BZAQ_CNT)); // 수입처 가입수
            } else {

                // 가입수 현황 스크롤 이벤트 처리
                $(window).on('scroll', function () {
                    if (scrollodometer < $(window).scrollTop()) {
                        $('.odometer1').html(numberToKorean(TOT_TXOF_CNT)); //세무사 가입수
                        $('.odometer2').html(R_BZAQ_CNT); // 수입처 가입수
                    }
                });
            }
        } else {
            // 가입수 스크롤 이벤트 처리
            $(window).on('scroll', function () {
                if (scrollodometer < $(window).scrollTop()) {
                    $('.odometer1').html(0); // 세무사 가입수
                    $('.odometer2').html(0); // 수입처 가입수
                }
            });
        }
        //console.log((TOT_TXOF_CNT));
    });
} // End fn_taxCnt

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

// 금액 한글 변환 함수
function numberToKorean(number) {
    var intNumber = +number;
    var inputNumber = intNumber < 0 ? false : intNumber;
    var unitWords = ['', '만', '억', '조', '경'];
    var splitUnit = 10000;
    var splitCount = unitWords.length;
    var resultArray = [];
    var resultString = '';

    for (var i = 0; i < splitCount; i++) {
        var unitResult = (inputNumber % Math.pow(splitUnit, i + 1)) / Math.pow(splitUnit, i);
        unitResult = Math.floor(unitResult);
        if (unitResult > 0) {
            resultArray[i] = unitResult;
        }
    }
    for (var i = 0; i < resultArray.length; i++) {
        if (!resultArray[i]) continue;
        resultString = String(resultArray[i]) + unitWords[i] + resultString;
    }
    return resultString;
} // End numberToKorean