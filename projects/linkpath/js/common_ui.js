// 퍼블리셔 JS 처리
var topBannerSwiper; // 241021 탑 배너 추가
var btmBannerSwiper; // 241021 LNB 하단 슬라이드 추가

$(function () {
  // a태그 # 처리
  $(document).on('click', 'a[href="#"]', function (e) {
    e.preventDefault();
  });

  // 리사이즈 처리
  $(window).resize('resize', function () {
    if ($(document).outerWidth() < 1400) {
      $('.header').removeClass('active');
    } else {
      $('.header').addClass('active');
    }
  });

  // 241021 햄버거버튼 fold
  $('.btnLnbToggle').on('click', function () {
    if($('.header').hasClass('active')) {
			$('.header').removeClass('active hover')
    } else {
      $('.header').addClass('active');
    }
  });

  // 241021 lnb mouseover 이벤트
  $('.lnb').mouseover(function (e) { 
    if (!$('.header').hasClass('active') && e.target !== document.querySelector('.btnLnbToggle')) {
      $('.header').addClass('hover');
    }
  });

  // 241021 lnb mouseleave 이벤트
  $('.lnb').mouseleave(function() {
    if ($('.header').hasClass('hover')) {
      $('.header').removeClass('hover');
    }
  });

  // 241021 탑 배너 추가
  topBannerSwiper = new Swiper('.topBanner', {
    direction: "vertical",
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    }
  });

  // 241021 LNB 하단 슬라이드 추가
  btmBannerSwiper = new Swiper('.btmBanner', {
    effect: 'fade',
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      type: "fraction",
      clickable: true,
    },
  });

  // 셀렉트박스 active
  $('.selectTaget').on('click', function () {
    const parent = $(this).parent();

    // 'readonly' 클래스가 없고, '.quarter' 클래스가 없는 경우에만 실행
    if (
      !$(this).parents('.calWrap').hasClass('readonly') ||
      $(this).parents('.quarter').length === 0
    ) {
      if (!parent.hasClass('readonly')) {
        parent.toggleClass('active');
      }
    }

    if (parent.hasClass('active') && $(this).parents('.dataTable').length > 0) {
      // 모든 .select-container 중에서 가장 높은 z-index 값을 찾음
      let maxZIndex = Math.max.apply(
        null,
        $('.selectBox')
          .map(function () {
            return parseInt($(this).css('z-index')) || 1;
          })
          .get()
      );

      parent.css('z-index', maxZIndex + 1);
    }
  });

  // lnb 매인메뉴 active
  $('.mainMenu').on('click', function () {
    if ($(this).parent().hasClass('active')) { 
      $(this).parent().removeClass('active');
      $(this).siblings('.subMenuList').stop().slideUp('fast');
    } else {
      $(this).parent().addClass('active');
      $(this).siblings('.subMenuList').stop().slideDown('fast');
    }
  })

  // lnb 하위메뉴 active
  $('.subMenuList > li').on('click', function () {
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $(this).parents('li').siblings().find('.subMenuList > li').removeClass('active');
  })

  // 상세 박스 toggle
  $('.searchBar .detailBtn').on('click', function () {
    $(this).parents('.detailBox').toggleClass('active');
  });

  // 탭메뉴 active
  $('.bodyTabMenu button').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
  })

  // 그리드 탭메뉴 active
  $('.gridTabWrap .gridTabBox .tabList li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
  })

  // indicator 처리
  var $indicatorItem = $('.indicator .indicatorList > li');

  //해당 요소에 호버 시
  $indicatorItem.on('mouseenter', function(e) {
    $(this).addClass('hover');

    // 현재 요소의 이전 및 다음 요소를 가져옴
    var $prevItem = $(this).prev('li');
    var $nextItem = $(this).next('li');
    
    // 현재 요소에 prev 또는 next 클래스 추가
    if ($prevItem.length && $prevItem.hasClass('active')) {
      $(this).addClass('next');
    }
    if ($nextItem.length && $nextItem.hasClass('active')) {
      $(this).addClass('prev');
    }
    
    if ($(this).index() == $indicatorItem.length - 1 || $indicatorItem.eq($indicatorItem.length - 1).hasClass('active')) {
      $('.indicator').addClass('invert');
    } else {
      $('.indicator').removeClass('invert');
    }
  });

  // 해당 요소에서 마우스가 떠날 때
  $indicatorItem.on('mouseleave', function () {
    $indicatorItem.removeClass('hover prev next');

    if ($(this).index() == $indicatorItem.length - 1 && !$(this).hasClass('active')) {
      $indicatorItem.parents('.indicator').removeClass('invert');
    }
  });
  $indicatorItem.on('click', function () {
    $(this).removeClass('hover next prev');
    $(this).addClass('active').siblings().removeClass('active hover next prev');

    if ($(this).index() == $indicatorItem.length - 1) {
      $('.indicator').addClass('invert');
    } else {
      $('.indicator').removeClass('invert');
    }
  })

  $('.indicator').mouseover(function() {
    $('.indicator').addClass('down');
  })
  $('.indicator').mouseleave(function() {
    $('.indicator').removeClass('down');
  })

  // indicator : 상태필터메뉴
  $('.statusMenuList > li').on('click', function (e) {
    e.stopPropagation();
    $(this).parents('li').addClass('active').siblings().removeClass('active prev next');
    $(this).parents('li').removeClass('hover next prev');
    $(this).addClass('active');
    $(this).siblings().removeClass('active')
  });


  // 슬라이드 토글 세팅 ( 처음부터 슬라이드를 펼쳐야 할땐 html의 해당 accordionToggle 클래스에 active 추가 ) - 2025-03-11
  $(".accordionToggle").each(function () {
    var $slideContent = $(this).siblings(".accordionToggleWrap");
    $slideContent.stop().slideToggle($(this).hasClass("active"));
  }).on("click", function () {
      $(this).toggleClass("active");
      $(this).siblings(".accordionToggleWrap").stop().slideToggle(200);
  });

  // 인풋 입력 체크
  $(".selectBox input:not([readonly])").on('keyup', function () {
    if ($(this).val() !== '' && $(this).siblings(".deleteBtn").length > 0) {
      $(this).addClass("inputed");
    } else {
      $(this).removeClass("inputed");
    }
  });

  // 인풋 입력삭제
  $(".selectBox .deleteBtn").on('click', function () {
    $(this).siblings('input').val("");
    $(this).siblings('input').focus();
    $(this).siblings('input').removeClass('inputed')
  });

  // 인증서 비밀번호 show hide
  $('.toggleShowBtn').on('click', function () {
    $(this).toggleClass("show");
  });

  // 알림 show hide
  $(".header .inner .right > ul > li .alarmWrap .noticeBtn").on('click', function () {
    $(this).parent().toggleClass("active");
  });

  // 메모입력 팝업 show hide
  $(".slideRightPopWrap .popTit [class^='titleWrap'] .popCloseBtn").on('click', function () { 
    $(this).parents('.slideRightPopWrap').removeClass('active');
  })
})

/* 화면 back scroll 고정/해제 */
var scrollLock = function(thisScrollY) {
  $("body").css({'overflow':'hidden', 'position':'fixed', 'width':'100%'});
  $("body").css("top", -thisScrollY);
};

// center 팝업
var popCenter = function(obj){
  var winH = $(window).height();
  var maxH = (winH * 0.95);
  var thisScrollY = $(window).scrollTop();
  var maxTotalH = maxH - 150;
  var $cTarget = $(obj).find(".popInner");
    
  scrollLock(thisScrollY);
      
  $cTarget.css({"max-height": maxH});
      
  // center 팝업 열기
  $(obj).fadeIn();
  $cTarget.find(".popCont").css("max-height", maxTotalH);
};
  
// popClose
var popClose = function(obj) {
  var $popWrap = $(obj).closest(".popWrap");
  scrollPosY = ($("body").css("top"));
  $popWrap.fadeOut(150);
      
  scrollUnlock(scrollPosY);
};
	
// dim close
var popdimClose = function(obj) {
  scrollPosY = $("body").css("top");
  var $popWrap = $(obj).closest(".popWrap");
  $popWrap.fadeOut(150);

  scrollUnlock(scrollPosY);
};
  
// scroll 고정 (화면이 최상단으로 스크롤됨을 방지하기 위함)
var scrollUnlock = function(scrollPosY) {
  $("body").css({'overflow':'', 'position':'', 'width':''});
  $(window).scrollTop(Math.abs(parseInt(scrollPosY)));
};

// 토스트팝업
var toastOpen = function (dom) { 
  // 새로운 .toast 요소 생성
  var toast = $(`
    <div class="toast">
      <div class="inner">
        ${dom}
      </div>
    </div>
  `);

  // body에 추가
  $('body').append(toast);

  // 'active' 클래스 추가
  setTimeout(function () {

    toast.addClass('active');
  }, 100)

  // 3초 후 'active' 클래스 제거하고, 요소 삭제
  setTimeout(function () {
    toast.removeClass('active');

    // 애니메이션 후 요소 삭제
    setTimeout(function () {
      toast.remove();
    }, 300);
  }, 3000);
}