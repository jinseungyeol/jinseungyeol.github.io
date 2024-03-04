$(function() {
    $(document).ready(function () {
        // container 높이 세팅
        $(window).on("resize", function () {
            $(".container").css("min-height", window.innerHeight);
        }).trigger("resize");

        // 하단 고정버튼 있을때 하단 여백세팅
        if ($(".wrapper").find(".areaBtmFixed").length == 1) {
            var fixBtnHeight = $(".areaBtmFixed").outerHeight(true);
            $(".container").css("padding-bottom", fixBtnHeight + "px");
        }

        // 상단 여백 세팅 함수
        contPdtDetect = function () {
            if ($(".wrapper").find(".header").length == 1 || $(".wrapper").find(".areaTopFixed").length == 1) {
                var headerHeight = $(".header").outerHeight(true);
                var fixTopHeight = $(".areaTopFixed").outerHeight(true);

                if (fixTopHeight == undefined) fixTopHeight = 0;

                $(".container").css("padding-top", headerHeight + fixTopHeight + "px");
            }
        }

        contPdtDetect();

        // 슬라이드 토글 세팅 ( 처음부터 슬라이드를 펼쳐야 할땐 html의 해당 accordionToggle 클래스에 active )
        $(".accordionToggle").each(function () {
            var $slideContent = $(this).siblings(".accordionToggleWrap");
            
            if ($(this).hasClass("active")) {
                $slideContent.stop().slideDown();
            } else {
                $slideContent.stop().slideUp();
            }
        })

        // 이벤트 배너 스와이퍼 슬라이드
        if ($(".bannerList li").length > 1) {
            var eventSwiper = new Swiper(".areaBanner", {
                slidesPerView: 'auto',
                spaceBetween: 20
            });
        }

        // tax_ictx_003 종소세 회색배경 최소높이 세팅
        if ($(".ictxList").length) {
            var winH = $(window).height();
            var topMenuHeight = $(".topMenu").outerHeight(true);
            var selectHeight = $(".areaSelect").outerHeight(true);
            var tabHeight = $(".ictxTab").outerHeight(true);

            $(".ictxList").css("min-height", winH - (topMenuHeight + selectHeight + tabHeight) + "px");
        }

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
        $(this).siblings(".accordionToggleWrap").stop().slideToggle();
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
        $(this).find(".formHolder").addClass("active").parents(".formWrap.radio").siblings().find(".formHolder").removeClass("active");
    })

    /* 화면 back scroll 고정/해제 */
	scrollLock = function(obj, thisScrollY) {
		$(obj).find(".dim").fadeIn();
		$("body").css({'overflow':'hidden', 'position':'fixed', 'width':'100%'});
        $("body").css("top", -thisScrollY);
	};

    // center 팝업
	popCenter = function(obj){
		var winH = $(window).height();
		var maxH = (winH * 0.7);
		var maxTotalH = maxH - 147;
		var $cTarget = $(obj).find(".centerLayer .popInner");
        var $cTargetImg = $(obj).find(".centerLayer .imgWelcome");

        scrollLock(obj);
        
		// 최대 높이 지정
		$cTarget.css({"max-height": maxH});
        $cTarget.find(".popCont").css("max-height", maxTotalH);
        
		// center 팝업 열기
		$(obj).find(".centerLayer").show();
        $cTarget.css("left", Math.max(($(window).width() - $cTarget.outerWidth()) / 2) + "px");

        // 웰컴팝업 예외처리
        $cTargetImg.css("left", $cTarget.offset().left);
        $cTargetImg.css("top", $cTarget.offset().top - $cTargetImg.height() + 20);
    };

    // 하단 슬라이드팝업
    slidePop = function(obj) {
		var thisScrollY = $(window).scrollTop();
        var $slideInner = $(obj).find(".slidePop .popInner");

		scrollLock(obj, thisScrollY);
        $(obj).find(".slidePop").show();
		setTimeout(function(){
            $slideInner.css("transform", "translate3d(0, 0, 0)");
        }, 100);
        
    }
    
    // close
	popClose = function(obj) {
        var $popWrap = $(obj).closest(".popWrap");
		var $slidePopInner = $(".slidePop .popInner");
        scrollPosY = ($("body").css("top"));

		if ($popWrap.hasClass("slidePop")) {
            $slidePopInner.css("transform", "translate3d(0, 100%, 0)");
            setTimeout(function () {
                $popWrap.fadeOut();
            },300)
        } else {
            $popWrap.fadeOut();
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
                $popWrap.fadeOut();
            },300)
        } else {
            $popWrap.fadeOut();
        }

		scrollUnlock(scrollPosY);
	};
    
    // scroll 고정 (화면이 최상단으로 스크롤됨을 방지하기 위함)
	scrollUnlock = function(scrollPosY) {
		$("body").css({'overflow':'', 'position':'', 'width':''});
        $(window).scrollTop(parseInt(Math.abs(scrollPosY))); 
    };

    // 용도선택팝업 active
    $(".popWrap .accSelectList > li").on('click', function () {
        var $accSelectList = $(this).parent();

        if ($accSelectList.hasClass('purchase') || $accSelectList.hasClass('deposit') || $accSelectList.hasClass('withdraw')) {
            $(this).addClass('active').siblings().removeClass('active');
        }
    })
})