(() => {

  let mapEle = document.getElementById('roumit_map');
  let mapOptions = {
    center: new kakao.maps.LatLng(37.526938, 126.904021),
    level: 3
  };

  let roumitMap = new kakao.maps.Map(mapEle, mapOptions);

  // 마커가 표시될 위치입니다 
  let markerPosition  = new kakao.maps.LatLng(37.526938, 126.904021); 

  // 마커를 생성합니다
  let marker = new kakao.maps.Marker({
      position: markerPosition
  });

  // 마커가 지도 위에 표시되도록 설정합니다
  marker.setMap(roumitMap);
  
  // 마커 클릭시 길찾기 이동
  kakao.maps.event.addListener(marker, 'click', function(){window.open('http://map.kakao.com/link/to/로움아이티, 37.526938, 126.904021', '_blank')})

  let fadeDelayEffect = function (ele, addClass, time, time2) {
    for (let i = 0; i < ele.length; i++ ) {
      setTimeout(function() {
        ele[i].classList.add(addClass);
      },time + (time2 * i));
    };
  }


  // 사업카드 슬라이드
  let businessSwiperOptions = {
    slidesPerView: 1,
    loop: true,
    spaceBetween: 20,
    navigation: {
        nextEl: '.business_card .swiper-button-next',
        prevEl: '.business_card .swiper-button-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4,
        loop: false,
      }
    }
  };
  
  // 제휴사 슬라이드
  let partnersSwiperOptions = {
    slidesPerView: 'auto',
    freemode: true,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false
    },
    speed: 4000
  };
  
  // 인터렉션
  let yOffset = 0; // window.pageYOffset 대신 쓸 변수
  let prevScrollHeight = 0; // 현재 스크롤 위치(yOffset)보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합
  let currentScene = 0; // 현재 활성화된( 눈 앞에 보고 있는 )씬(section) 
  let enterNewScene = false; //새로운 씬 시작된 순간 true
  let acc = 0.1;
  let delayedYOffset = 0;
  let rafId;
  let rafState;

  const sceneInfo = [
    {
      //0
      type: "normal",
      scrollHeight: 0,
      objs: {
        wrap: document.querySelector("#section_0"),
        inner: document.querySelector(".main_inner"),
        bgImg: document.querySelector("#section_0 .visual_bg"),
      },
      values: {
        bgImg_scale: [1, 6.7]
      }
    },
    {
      //1
      type: "sticky",
      heightNum: 3.4,
      scrollHeight: 0,
      objs: {
        wrap: document.querySelector("#section_1"),
        inner: document.querySelector(".slogan_inner"),
        messageA: document.querySelector("#section_1 .sticky_elem.txt01"),
        messageB: document.querySelector("#section_1 .sticky_elem.txt02"),
        messageC: document.querySelector("#section_1 .sticky_elem.txt03"),
        messageD: document.querySelector("#section_1 .sticky_elem.txt04"),
      },
      values: {
        messageA_opacity_in: [0, 1, { start: 0.07, end: 0.17 }],
				messageB_opacity_in: [0, 1, { start: 0.27, end: 0.37 }],
				messageC_opacity_in: [0, 1, { start: 0.47, end: 0.57 }],
				messageD_opacity_in: [0, 1, { start: 0.67, end: 0.77 }],
				messageA_translateY_in: [20, 0, { start: 0.07, end: 0.17 }],
				messageB_translateY_in: [20, 0, { start: 0.27, end: 0.37 }],
				messageC_translateY_in: [20, 0, { start: 0.47, end: 0.57 }],
				messageD_translateY_in: [20, 0, { start: 0.67, end: 0.77 }],
				messageA_opacity_out: [1, 0, { start: 0.22, end: 0.27 }],
				messageB_opacity_out: [1, 0, { start: 0.42, end: 0.47 }],
				messageC_opacity_out: [1, 0, { start: 0.62, end: 0.67 }],
				messageD_opacity_out: [1, 0, { start: 0.82, end: 0.87 }],
				messageA_translateY_out: [0, -20, { start: 0.22, end: 0.27 }],
				messageB_translateY_out: [0, -20, { start: 0.42, end: 0.47 }],
				messageC_translateY_out: [0, -20, { start: 0.62, end: 0.67 }],
				messageD_translateY_out: [0, -20, { start: 0.82, end: 0.87 }]
      }
    },
    {
      //2
      type: "normal",
      scrollHeight: 0,
      objs: {
        wrap: document.querySelector("#section_2"),
        inner: document.querySelector(".about_inner"),
        aboutDescTit: document.querySelector("#section_2 .about_desc_tit"),
        aboutDescTxt: document.querySelectorAll("#section_2 .about_desc_txt"),
        mockupImg: document.querySelectorAll("#section_2 .about_mockup_img")
      }
    },
    {
      //3
      type: "normal",
      scrollHeight: 0,
      objs: {
        wrap: document.querySelector("#section_3"),
        inner: document.querySelector(".history_inner"),
        sectionTit: document.querySelector("#section_3 .section_tit"),
        historyList: document.querySelectorAll("#section_3 .history_intro_list li")
      }
    },
    {
      //4
      type: "normal",
      scrollHeight: 0,
      objs: {
        wrap: document.querySelector("#section_4"),
        inner: document.querySelector(".notice_inner"),
        noticeList: document.querySelectorAll("#section_4 .notice_list li")
      }
    },
    {
      //5
      type: "normal",
      scrollHeight: 0,
      objs: {
        wrap: document.querySelector("#section_5"),
        inner: document.querySelector(".business_inner"),
        businessCard: document.querySelector(".business_card"),
        btnBusinessSlide: document.querySelector(".business_card_btn_wrap"),
        partnersTit: document.querySelector(".business_partners .section_tit"),
        partnersList: document.querySelector(".partners_list"),
      }
    },
    {
      //6
      type: "normal",
      scrollHeight: 0,
      objs: {
        wrap: document.querySelector("#section_6"),
        inner: document.querySelector(".contact_inner"),
        contactBoard: document.querySelector("#section_6 .contact_board"),
        roumitMap: document.querySelector("#section_6 .roumit_map")
      }
    }
  ]

  // 레이아웃 세팅
  function setLayout() {
    document.querySelector(".nav_dot").style.transform = "translate3d("+52.8125+"px, 0, 0)";
    for ( let i = 0; i < sceneInfo.length; i++ ) {
      if ( sceneInfo[i].type === "sticky" ) {
        sceneInfo[i].scrollHeight = sceneInfo[i].heightNum * window.innerHeight;
      } else if ( sceneInfo[i].type === "normal" ) {
        sceneInfo[i].scrollHeight = sceneInfo[i].objs.inner.offsetHeight + window.innerHeight * 0.3;
      }
      sceneInfo[i].objs.wrap.style.height = `${sceneInfo[i].scrollHeight}px`;
    }
  }

  // 계산함수
  function calcValues(values, currentYOffset) {
    let rv;
    const scrollHeight = sceneInfo[currentScene].scrollHeight;
    const scrollRatio = currentYOffset / scrollHeight; //현재 씬에서 스크롤된 범위 비율 계산
    
    if ( values.length === 3 ) {
      //start ~ end 사이에 애니메이션 실행
      const partScrollStart = values[2].start * scrollHeight;
      const partScrollEnd = values[2].end * scrollHeight;
      const partScrollHeight = partScrollEnd - partScrollStart;
      
      if ( currentYOffset >= partScrollStart && currentYOffset <= partScrollEnd ) {
        rv = (currentYOffset - partScrollStart) / partScrollHeight * (values[1] - values[0]) + values[0];
      } else if ( currentYOffset < partScrollStart ) {
        rv = values[0];
      } else if ( currentYOffset > partScrollEnd ) {
        rv = values[1];
      }
    } else {
      rv = scrollRatio * (values[1] - values[0]) + values[0];
    }

    return rv; // return을 해줘야 playAnimation 함수에서 사용 가능
  }

  // 애니메이션 함수
  function playAnimation() {
    const objs = sceneInfo[currentScene].objs;
    const values = sceneInfo[currentScene].values;
    const currentYOffset = yOffset - prevScrollHeight;
    const scrollHeight = sceneInfo[currentScene].scrollHeight;
    const scrollRatio = currentYOffset / scrollHeight; 
    console.log(currentScene)
    switch (currentScene) {
      case 0:
        objs.bgImg.style.transform = `scale(${calcValues(values.bgImg_scale, currentYOffset)})`;
        document.querySelector("html").classList.add("x_hidden");

        break;

      case 1:
        if (scrollRatio >= 0.99) {

          sceneInfo[2].objs.aboutDescTit.classList.add("ani_ltr");

          fadeDelayEffect(sceneInfo[2].objs.aboutDescTxt, "ani_ltr", 0, 250);
          fadeDelayEffect(sceneInfo[2].objs.mockupImg, "ani_btt_translateY_minus_50p", 900, 150);
        }
        sceneInfo[0].objs.bgImg.style.transform = `scale(${sceneInfo[0].values.bgImg_scale[1]})`;

        break;
      
      case 2:
        // 2 play
        if ( window.innerWidth > 767 ) {
          sceneInfo[0].objs.bgImg.style.transform = `scale(1)`;
          document.querySelector("html").classList.add("x_hidden");
        }

        objs.aboutDescTit.classList.add("ani_ltr");
          
        fadeDelayEffect(objs.aboutDescTxt, "ani_ltr", 0, 250);
        fadeDelayEffect(objs.mockupImg, "ani_btt_translateY_minus_50p", 900, 150);
        
        if (scrollRatio >= 0.9) {
          fadeDelayEffect(sceneInfo[3].objs.historyList, "ani_btt_translateY", 0, 150);
        }

        break;

      case 3:
        // 3 play
        fadeDelayEffect(objs.historyList, "ani_btt_translateY", 0, 150);
        document.querySelector("html").classList.remove("x_hidden");

        if ( scrollRatio >= 0.9 ) {
          fadeDelayEffect(sceneInfo[4].objs.noticeList, "ani_btt_translateY", 0, 150);
        }

        break;

      case 4:
        // 4 play
        
        for (let i = 0; i < objs.noticeList.length; i++ ) {
          setTimeout(function() {
            objs.noticeList[i].classList.add("ani_btt_translateY");
          },150 * i);
        };

        if ( scrollRatio >= 0.85 ) {
          sceneInfo[5].objs.businessCard.classList.add("ani_btt_translateY");
        }

        break;  

      case 5:
        // 5 play
        objs.businessCard.classList.add("ani_btt_translateY");

        if ( scrollRatio >= 0.35 ) {
          objs.partnersTit.classList.add("ani_btt_translateY");
        }

        if ( scrollRatio >= 0.8 ) {
          sceneInfo[6].objs.contactBoard.classList.add("ani_btt_translateY");
          setTimeout(function() {
            mapEle.classList.add("ani_btt_translateY");
          },350)
        }

        break;
        
      case 6:
        // 6 play

        break;
    }
  }

  // 스크롤함수
  function scrollLoop() {
    enterNewScene = false;
    prevScrollHeight = 0; //값이 누적되는걸 막기위해

    
    for ( let i = 0; i < currentScene; i++ ) {
      // prevScrollHeight = prevScrollHeight + sceneInfo[i].scrollHeight; 위아래 같은식
      prevScrollHeight += sceneInfo[i].scrollHeight;
    } 

    if ( yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight ) {
      enterNewScene = true;

      if ( currentScene < sceneInfo.length -1 ) {
        currentScene++;
      }
      document.body.setAttribute('id', `show_scene_${currentScene}`);

    }

    if ( yOffset < prevScrollHeight ) {
      enterNewScene = true;
      if ( currentScene === 0 ) return; //IOS 사파리 스크롤 바운스 효과시 currentScene이 마이너스가 되는것 방지
      currentScene--;
      document.body.setAttribute('id', `show_scene_${currentScene}`);
    }

    if (enterNewScene === true) return;

    playAnimation();

    
  }

  // GNB 애니메이션
  let dataSection = $("[data-section]");
  let getSection = function( slug ) {
    let currentSection = dataSection.filter(function() {
      return slug == $(this).data("section");
    });

    return currentSection;
  }

  let currentGnb = function( ) {
    let nowScroll = $(window).scrollTop();

    $(".gnb").find("a").each(function() {
      var slug = $(this).data("slug");
      currentSection = getSection( slug );

      let start = currentSection.offset().top;
      let end = start + currentSection.height();

      if ( nowScroll > start && nowScroll < end ) {
        $(".gnb").find("a").removeClass("is_focus").filter($(this).addClass("is_focus"));

        let prevWidth = 0;
        $(this).parent().prevAll().find("a").each(function(){
          prevWidth  += $(this).parent().width();
        });
        
        let prevSum = prevWidth + ($(this).parent().index() * 40) + $(this).parent().width() + 2;
        $(".nav_dot").css("transform", "translate3d("+prevSum+"px, 0, 0)");
      }
    })
  };

  $('.gnb').find("a").click(function( event ) {
    event.preventDefault();
    let slug = $(this).data("slug");
    currentSection = getSection( slug );

    let posY = currentSection.offset().top;
    if ( window.innerWidth < 768 ) {
      $("html, body").animate({ scrollTop: posY - 61 });
    } else {
      $("html, body").animate({ scrollTop: posY + 1 });
    }
  });

  $(".header_logo").click(function(event) {
    event.preventDefault();
    $("html, body").animate({ scrollTop: 0 });
  })

  if( window.innerWidth < 768 ) {
    $(".header_inner .check_area").click(function() {
      $(this).children().toggleClass("is_active");
      $(".nav, .overlay_gnb").toggleClass("is_active");
      $("html").toggleClass("not_scroll");
    })
    
    $(".gnb_list .gnb").click(function() {
      $(".nav, .btn_hamburger, .overlay_gnb").removeClass("is_active");
      $("html").removeClass("not_scroll");
    })
  }
  

  // 공지사항팝업
  $("#section_4 .notice_list li").find(".btn_notice_view").click(function() {
    let index = $(this).parents("#section_4 .notice_list li").index();
    $(".overlay.notice").eq(index).addClass("is_show").siblings().removeClass("is_show");
    $("html").addClass("not_scroll");
  })

  // 이용약관
  $(".btn_terms").click(function() {
    $(".overlay.terms").addClass("is_show");
    $("html").addClass("not_scroll");
  })

  // 개인정보 처리방침
  $(".btn_privacy").click(function() {
    $(".overlay.privacy").addClass("is_show");
    $("html").addClass("not_scroll");
  })
  
  // 팝업 닫기
  $(".btn_close").click(function() {
    $(".overlay").removeClass("is_show");
    $("html").removeClass("not_scroll");
  })
  
  
  setLayout();

  // 로드이벤트
  window.addEventListener('load', () => {
    setTimeout(() => {
      $(".nav_dot").css("transform", "translate3d("+52.8125+"px, 0, 0)");
      scrollTo(0, 0);
    }, 20)
    
    // 슬라이드
    new Swiper(".business_card", businessSwiperOptions);
    new Swiper(".business_partners", partnersSwiperOptions);


    // 스크롤이벤트
    window.addEventListener('scroll', () => {
      yOffset = window.pageYOffset;
      scrollLoop();
      currentGnb();

      if (!rafState) {
				rafId = requestAnimationFrame(loop);
				rafState = true;
			}
    })

    function loop() {
      delayedYOffset = delayedYOffset + (yOffset - delayedYOffset) * acc;
      
      if (!enterNewScene) {
        const currentYOffset = delayedYOffset - prevScrollHeight;
        const objs = sceneInfo[currentScene].objs;
        const values = sceneInfo[currentScene].values;
        const scrollHeight = sceneInfo[currentScene].scrollHeight;
        const scrollRatio = currentYOffset / scrollHeight;

        switch (currentScene) {
          case 1:
            if (scrollRatio <= 0.19) {
              // in
              objs.messageA.style.opacity = calcValues(values.messageA_opacity_in, currentYOffset);
              objs.messageA.style.transform = `translateY(${calcValues(values.messageA_translateY_in, currentYOffset)}%)`;
            } else {
              // out
              objs.messageA.style.opacity = calcValues(values.messageA_opacity_out, currentYOffset);
              objs.messageA.style.transform = `translateY(${calcValues(values.messageA_translateY_out, currentYOffset)}%)`;
            }
          
            if (scrollRatio <= 0.39) {
              // in
              objs.messageB.style.opacity = calcValues(values.messageB_opacity_in, currentYOffset);
              objs.messageB.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_in, currentYOffset)}%, 0)`;
            } else {
              // out
              objs.messageB.style.opacity = calcValues(values.messageB_opacity_out, currentYOffset);
              objs.messageB.style.transform = `translate3d(0, ${calcValues(values.messageB_translateY_out, currentYOffset)}%, 0)`;
            }

            if (scrollRatio <= 0.59) {
              // in
              objs.messageC.style.opacity = calcValues(values.messageC_opacity_in, currentYOffset);
              objs.messageC.style.transform = `translate3d(0, ${calcValues(values.messageC_translateY_in, currentYOffset)}%, 0)`;
            } else {
              // out
              objs.messageC.style.opacity = calcValues(values.messageC_opacity_out, currentYOffset);
              objs.messageC.style.transform = `translate3d(0, ${calcValues(values.messageC_translateY_out, currentYOffset)}%, 0)`;
            }

            if (scrollRatio <= 0.79) {
              // in
              objs.messageD.style.opacity = calcValues(values.messageD_opacity_in, currentYOffset);
              objs.messageD.style.transform = `translate3d(0, ${calcValues(values.messageD_translateY_in, currentYOffset)}%, 0)`;
            } else {
              // out
              objs.messageD.style.opacity = calcValues(values.messageD_opacity_out, currentYOffset);
              objs.messageD.style.transform = `translate3d(0, ${calcValues(values.messageD_translateY_out, currentYOffset)}%, 0)`;
            }
            break;
        }
      }

			rafId = requestAnimationFrame(loop);

			if (Math.abs(yOffset - delayedYOffset) < 1) {
				cancelAnimationFrame(rafId);
				rafState = false;
			}
		}

    // 리사이즈이벤트
    window.addEventListener('resize', () => {
      if ( window.innerWidth >= 768 && 1200 >= window.innerWidth ){
        window.location.reload();
      } else if ( window.innerWidth >= 1400 ) {
        window.location.reload();
      }
    });

    window.addEventListener('orientationchange', () => {
      scrollTo(0, 0);
      setTimeout(() => {
        window.location.reload();
      }, 500);
    })

  });
    
})()

