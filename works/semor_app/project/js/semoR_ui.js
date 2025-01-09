$(function() {
    $(document).ready(function () {
        // container 높이 세팅
        $(window).on("resize", function () {
            $(".container").css("min-height", window.innerHeight);
        }).trigger("resize");

        // 하단 고정버튼 있을때 하단 여백세팅
        if ($(".wrapper").find(".areaBtmFixed").length > 0) {
            setTimeout(()=>{
                var fixBtnHeight = $(".areaBtmFixed:visible").outerHeight(true);
                $(".container").css("padding-bottom", fixBtnHeight + "px");
            },100);
        }

        // 상단 여백 세팅 함수
        contPdtDetect = function () {
            if ($(".wrapper").find(".header").length > 0 || $(".wrapper").find(".areaTopFixed").length > 0) {
                var headerHeight = $(".header").outerHeight(true);
                var fixTopHeight = $(".areaTopFixed").outerHeight(true);

                if (fixTopHeight == undefined) fixTopHeight = 0;
                if (headerHeight == undefined) headerHeight = 0;

                $(".container").css("padding-top", headerHeight + fixTopHeight + "px");
            }
        }
        contPdtDetect();

        // 슬라이드 토글 세팅 ( 처음부터 슬라이드를 펼쳐야 할땐 html의 해당 accordionToggle 클래스에 active 추가 )
        $(".accordionToggle").each(function () {
            var $slideContent = $(this).siblings(".accordionToggleWrap");
            
            if ($(this).hasClass("active")) {
                $slideContent.stop().slideDown();
            } else {
                $slideContent.stop().slideUp();
            }
        })
        
        // tax_ictx_003 종소세 회색배경 최소높이 세팅
        if ($(".ictxList").length) {
            var winH = $(window).height();
            var topMenuHeight = $(".topMenu").outerHeight(true);
            var selectHeight = $(".areaSelect").outerHeight(true);
            var tabHeight = $(".ictxTab").outerHeight(true);

            $(".ictxList").css("min-height", winH - (topMenuHeight + selectHeight + tabHeight) + "px");
        }

        // infoArea 뱃지 있을 때 영역 세팅
        setBadge = function () {
            $(".infoArea").each(function () {
                if ($(this).children().hasClass("areaBadge") ) {
                    var badgeHeight = $(this).find(".areaBadge").height();
                    var icoWidth = $(this).find(".ico").width();

                    $(this).css("padding-top", badgeHeight);

                    if ($(this).find(".ico").length > 0) {
                        $(this).find(".areaBadge").css("left", icoWidth + 12);
                    }
                }
            });
        }
        setBadge();

        // 인풋 값 체크
        $(".inputList input:not([readonly])").each(function () {
            if ($(this).val() !== '') {
                $(this).addClass("inputed");
            } else {
                $(this).removeClass("inputed");
            }
        });

    });

    

    // 슬라이드토글
    $(".accordionToggle").on("click", function () {
        $(this).toggleClass("active");
        $(this).siblings(".accordionToggleWrap").stop().slideToggle(200);
    });

    // 탭메뉴
    $(".tabMenuList > li").on("click", function () {
        $(this).addClass("active").siblings().removeClass("active");
    });

    // 가로 스크롤 텝메뉴
    $(".scrollTabList > li").on('click', function () {
        $(this).addClass("active").siblings().removeClass("active");
    });

    // 인풋 입력 체크
    $(".inputList input:not([readonly])").keyup(function () {
        if ($(this).val() !== '') {
            $(this).addClass("inputed");
        } else {
            $(this).removeClass("inputed");
        }
    });

    // 체크박스
    $(".formHolder label.check").on("click", function () {
        $(this).parents(".formHolder").toggleClass("active");
    });

    // 팝업 라디오박스
    $(".formWrap.radio").on('click', function () {
        $(this).find(".formHolder").addClass("active")
        $(this).siblings().find(".formHolder").removeClass("active");
    })

    /* 화면 back scroll 고정/해제 */
	scrollLock = function(thisScrollY) {
		$("body").css({'overflow':'hidden', 'position':'fixed', 'width':'100%'});
        $("body").css("top", -thisScrollY);
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
		$cTarget.css({"max-height": maxH});
        
		// center 팝업 열기
		$(obj).find(".centerLayer").fadeIn();
        // $cTarget.css("left", Math.max(($(window).width() - $cTarget.outerWidth()) / 2) + "px");

        // popCont max-height 세팅
        if ($(obj).find(".centerLayer").hasClass("notice")) {
            // 웰컴팝업 케이스
            var cTargetmaxH = $cTarget.height();
            var titH = $cTarget.find(".popTit").outerHeight(true);
            var btnH = $cTarget.find(".popBtnWrap").outerHeight(true);
            $cTarget.find(".popCont").css("max-height", cTargetmaxH - (titH + btnH));
            
            // $cTarget.find(".popCont").css("max-height", 215);  //23-03-14 고정값해제
        } else {
            $cTarget.find(".popCont").css("max-height", maxTotalH);
        }
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
    
    // scroll 고정 (화면이 최상단으로 스크롤됨을 방지하기 위함)
	scrollUnlock = function(scrollPosY) {
		$("body").css({'overflow':'', 'position':'', 'width':''});
        $(window).scrollTop(Math.abs(parseInt(scrollPosY)));
    };

    // 용도선택팝업 active
    $(".popWrap .accSelectList > li").on('click', function () {
        var $accSelectList = $(this).parent();

        if ($accSelectList.hasClass('purchase') || $accSelectList.hasClass('deposit') || $accSelectList.hasClass('withdraw')) {
            $(this).addClass('active').siblings().removeClass('active');
        }
    })

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
})