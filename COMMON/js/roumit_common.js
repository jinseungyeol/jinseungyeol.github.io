/** 공통 JS **/

// 사장님용 신청폼 이동
fn_moveConsultForm = function (routeCode) {
    var host = window.location.host;
    var subdomain = host.split('.')[0];

    if (subdomain == 'www' || subdomain == 'm' || subdomain == 'tax') {
        // 운영일 때
        window.open(`https://www.semoreport.com/html/owner.html?PATH_CD=${routeCode}`);
        return false;
    } else {
        // 개발또는 로컬일 때
        window.open(`https://publ.smjb.co.kr/SEMO2_0/SEMOR_HP_V2/html/owner.html?PATH_CD=${routeCode}`);
        return false;
    }
};

// 나의 세무사에게 요청하기 이동
fn_moveTaxApply = function (routeCode) {
    var host = window.location.host;
    var subdomain = host.split('.')[0];

    if (subdomain == 'www' || subdomain == 'm' || subdomain == 'tax') {
        // 운영일 때
        window.open(`https://www.semoreport.com/html/taxApply.html?PATH_CD=${routeCode}`);
        return false;
    } else {
        // 개발또는 로컬일 때
        window.open(`https://publ.smjb.co.kr/SEMO2_0/SEMOR_HP_V2/html/taxApply.html?PATH_CD=${routeCode}`);
        return false;
    }
};

// center 팝업
popCenter = function(obj){
    var winH = $(window).height();
    var maxH = (winH * 0.8);
    var thisScrollY = $(window).scrollTop();
    
    // scrollLock(thisScrollY);
    
    
    // center 팝업 열기
    $(obj).find(".centerLayer").fadeIn();
};

// 하단 슬라이드팝업
slidePop = function(obj) {
    var thisScrollY = $(window).scrollTop();
    var $slideInner = $(obj).find(".slidePop .popInner");

    // 스크롤 고정
    scrollLock(thisScrollY);
    
    // 하단 슬라이드 팝업열기
    $(obj).find(".slidePop").fadeIn(150);
    setTimeout(function(){
        $slideInner.css("transform", "translate3d(0, 0, 0)");
    }, 400);
    
}

// close
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

// 숫자 카운트 함수
randomNum = function(selector, maxNum, result) {
    $({
        val: 0
    }).animate({
        val: maxNum
    }, {
        duration: 1200, // 속도
        step: function () {
            var num = numberWithCommas(Math.floor(this.val));
            $(selector).text(num);
        },
        complete: function () {
            var num = result;
            $(selector).text(num);
        }
    });

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
}

// Top버튼 함수
funcGoToTop = function (obj) {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 50) {
            $(obj).addClass("active");
        } else {
            $(obj).removeClass("active");
        }
    });

    $(obj).on('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

//날짜 비교
isDeadline = function(startDead, endDead) {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours(); // 시
    const today = parseInt(year.toString() + month.toString() + day.toString() + hours.toString());
    return today <= startDead || today >= endDead;
}
    
//셋팅한 쿠키 확인
getCookie = function(cname) {
    return !document.cookie ? "" : document.cookie
    .split(';')
    .find(row => row.trim().startsWith(cname)) //쿠키이름 setCookie() cname과 동일한 값 기입
    ?.split('=')[1];
}

//쿠키 셋팅
setCookie = function(cname, cvalue, exdays) {
    let date = new Date();
    date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000 )); //exdays=1 이면 1일, 7이면 7일
    const expires = "expires=" + date.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires; //getCookie() cname과 동일한 값 기입
}

// 반각문자 제한 함수
fn_chkChar = function (obj) {
    var RegExp = /['"$%&]/gi;	//정규식 구문

    if (RegExp.test(obj.value)) {
        // 특수문자 모두 제거
        obj.value = obj.value.replace(RegExp, '');
    }
}

// 사업자 등록번호 체크
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