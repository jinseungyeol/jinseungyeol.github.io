(() => {

	let yOffset = 0; // window.scrollY 대신 쓸 변수
	let prevScrollHeight = 0; // 현재 스크롤 위치(yOffset)보다 이전에 위치한 스크롤 섹션들의 스크롤 높이값의 합
	let currentScene = 0; // 현재 활성화된(눈 앞에 보고있는) 씬(scroll-section)
	let enterNewScene = false; // 새로운 scene이 시작된 순간 true
	let acc = 0.2;
	let delayedYOffset = 0;
	let rafId;
	let rafState;

	const sceneInfo = [
		{
			// 0
			scrollHeight: document.querySelector('.main').offsetHeight,
			objs: {
        mainBgTxt: document.querySelector('.mainBgTxt'),
        mainTitBox: document.querySelector('.mainTitBox'),
        basic: document.querySelector('.basic'),
        scrolling: document.querySelector('.scrolling'),
        decorationBox: document.querySelector('.decorationBox'),
			},
			values: {
        basic_opacity_out: [1, 0, { start: 0.1, end: 0.2 }],
        mainTitBox_opacity_out: [1, 0, { start: 0.3, end: 0.5 }],
        decorationBox_translateY: [0, 500, { start: 0.1, end: 0.5 }],
				mainBgTxt_opacity_out: [1, 0, { start: 0.2, end: 0.5 }],
        scrolling_opacity_in: [0, 1, { start: 0.25, end: 0.35 }]
			}
		},
		{
			// 1
			scrollHeight: document.querySelector('.about').offsetHeight
		},
		{
			// 2
			scrollHeight: document.querySelector('.experience').offsetHeight,
			objs: {
				hireBg : document.querySelector('.hire .bg')
			},
      values: {
        hireBg_translateX: [-100, 0, { start: 0.85, end: 0.94 }]
			}
		}
	];

	// 모바일
	function isMobile() {
		const userAgent = navigator.userAgent.toLowerCase();
		return /android|iphone|ipod|blackberry|iemobile|opera mini/.test(userAgent);
	}

	// 테블릿
	function isTablet() {
		const userAgent = navigator.userAgent.toLowerCase();
		return /ipad|tablet|playbook|silk/.test(userAgent) || 
					(isMobile() && screen.width >= 600); // 화면 크기 조건 추가
	}

  // 클래스 딜레이 추가 함수
  function applyClass(showGroup, action) {
    document.querySelectorAll(`[data-show=${showGroup}]`).forEach((item, index) => {
      setTimeout(() => {
        item.classList[action]('show'); // 각 요소에 클래스 제거
      }, index * 150);
    });
  }

	function setLayout() {

		yOffset = window.scrollY;

		let totalScrollHeight = 0;
		for (let i = 0; i < sceneInfo.length; i++) {
			totalScrollHeight += sceneInfo[i].scrollHeight;
			if (totalScrollHeight >= yOffset) {
				currentScene = i;
				break;
			}
		}
		document.body.setAttribute('id', `show-scene-${currentScene}`);
	}

	function calcValues(values, currentYOffset) {
		let rv;
		// 현재 씬(스크롤섹션)에서 스크롤된 범위를 비율로 구하기
		const scrollHeight = sceneInfo[currentScene].scrollHeight;
		const scrollRatio = currentYOffset / scrollHeight;

		if (values.length === 3) {
			// start ~ end 사이에 애니메이션 실행
			const partScrollStart = values[2].start * scrollHeight;
			const partScrollEnd = values[2].end * scrollHeight;
			const partScrollHeight = partScrollEnd - partScrollStart;

			if (currentYOffset >= partScrollStart && currentYOffset <= partScrollEnd) {
				rv = (currentYOffset - partScrollStart) / partScrollHeight * (values[1] - values[0]) + values[0];
			} else if (currentYOffset < partScrollStart) {
				rv = values[0];
			} else if (currentYOffset > partScrollEnd) {
				rv = values[1];
			}
		} else {
			rv = scrollRatio * (values[1] - values[0]) + values[0];
		}

		return rv;
	}

	function playAnimation() {
		const objs = sceneInfo[currentScene].objs;
		const values = sceneInfo[currentScene].values;
		const currentYOffset = yOffset - prevScrollHeight;
		const scrollHeight = sceneInfo[currentScene].scrollHeight;
		const scrollRatio = currentYOffset / scrollHeight;

		switch (currentScene) {
			case 0:
        objs.basic.style.opacity = calcValues(values.basic_opacity_out, currentYOffset);
        objs.scrolling.style.opacity = calcValues(values.scrolling_opacity_in, currentYOffset);
				objs.mainTitBox.style.opacity = calcValues(values.mainTitBox_opacity_out, currentYOffset);
        objs.mainBgTxt.style.opacity = calcValues(values.mainBgTxt_opacity_out, currentYOffset);
        objs.decorationBox.style.transform = `translate3d(0,-${calcValues(values.decorationBox_translateY, currentYOffset)}px,0)`;

        if (scrollRatio <= 0.62) {
          applyClass('ab','remove');
        } else {
          applyClass('ab','add');
        } 

				break;

			case 1:
        applyClass('ab','add');
          
        if (scrollRatio >= 0.07) {
          applyClass('wk','add');
        } else {
          applyClass('wk','remove');
        } 
        
				if (scrollRatio >= 0.47) {
          applyClass('ex','add');
        } else {
          applyClass('ex','remove');
        } 

				

				break;
			case 2:
        applyClass('wk','add');

				if (scrollRatio >= 0.65) {
          applyClass('ex','remove');
          
        } else {
          applyClass('ex','add');
        }

        if (scrollRatio >= 0.85) {
          applyClass('hr','add');
        } else {
          applyClass('hr','remove');
        }
        objs.hireBg.style.transform = `translate3d(${calcValues(values.hireBg_translateX, currentYOffset)}%, 0,0)`;

				break;
		}
	}

	function scrollLoop() {
		enterNewScene = false;
		prevScrollHeight = 0;

		for (let i = 0; i < currentScene; i++) {
			prevScrollHeight += sceneInfo[i].scrollHeight;
		}

		if (yOffset < prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
			document.body.classList.remove('scroll-effect-end');
		}

		if (yOffset > prevScrollHeight + sceneInfo[currentScene].scrollHeight) {
			enterNewScene = true;
			if (currentScene === sceneInfo.length - 1) {
				document.body.classList.add('scroll-effect-end');
			}
			if (currentScene < sceneInfo.length - 1) {
				currentScene++;
			}
			document.body.setAttribute('id', `show-scene-${currentScene}`);
		}

		if (yOffset < prevScrollHeight) {
			enterNewScene = true;
			// 브라우저 바운스 효과로 인해 마이너스가 되는 것을 방지(모바일)
			if (currentScene === 0) return;
			currentScene--;
			document.body.setAttribute('id', `show-scene-${currentScene}`);
		}

		if (enterNewScene) return;

		playAnimation();
	}

	// function loop() {
	// 	delayedYOffset = delayedYOffset + (yOffset - delayedYOffset) * acc;

  //   // 일부 기기에서 페이지 끝으로 고속 이동하면 body id가 제대로 인식 안되는 경우를 해결
  //   // 페이지 맨 위로 갈 경우: scrollLoop와 첫 scene의 기본 캔버스 그리기 수행
  //   if (delayedYOffset < 1) {
  //     scrollLoop();
  //   }
  //   // 페이지 맨 아래로 갈 경우: 마지막 섹션은 스크롤 계산으로 위치 및 크기를 결정해야할 요소들이 많아서 1픽셀을 움직여주는 것으로 해결
  //   if ((document.body.offsetHeight - window.innerHeight) - delayedYOffset < 1) {
  //     let tempYOffset = yOffset;
  //     scrollTo(0, tempYOffset - 1);
  //   }

	// 	rafId = requestAnimationFrame(loop);

	// 	if (Math.abs(yOffset - delayedYOffset) < 1) {
	// 		cancelAnimationFrame(rafId);
	// 		rafState = false;
	// 	}
	// }

	window.addEventListener('load', () => {
    setLayout(); // 중간에 새로고침 시, 콘텐츠 양에 따라 높이 계산에 오차가 발생하는 경우를 방지하기 위해 beforeLoad 클래스 제거 전에도 확실하게 높이를 세팅하도록 한번 더 실행
    document.body.classList.remove('beforeLoad');
    setLayout();

		// 중간에서 새로고침 했을 경우 자동 스크롤로 제대로 그려주기
    let tempYOffset = yOffset;
    let tempScrollCount = 0;
    if (tempYOffset > 0) {
      let siId = setInterval(() => {
        scrollTo(0, tempYOffset);
        tempYOffset += 5;

        if (tempScrollCount > 20) {
          clearInterval(siId);
        }
        tempScrollCount++;
      }, 20);
    }

    window.addEventListener('scroll', () => {
      // alert('scroll')
      yOffset = window.scrollY;
      scrollLoop();

      // if (!rafState) {
      //   rafId = requestAnimationFrame(loop);
      //   rafState = true;
      // }
    });

    let isTabPressed = false;

    // Tab 키가 눌렸는지 확인
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Tab') {
        isTabPressed = true;
      }
    });

    // focusin 이벤트 핸들러
    document.addEventListener('focusin', (e) => {
      // 포커스가 이동한 요소
      const focusedElement = e.target;

      // Tab 키가 눌렸을 때만 동작
      if (isTabPressed && (focusedElement.tagName === 'A' || focusedElement.hasAttribute('tabindex'))) {
        const elementRect = focusedElement.getBoundingClientRect();
        const elementTop = elementRect.top + window.scrollY;

        // 현재 뷰포트 높이 확인
        const viewportHeight = window.innerHeight;

        // 화면 중앙 근처로 이동 (적절히 조정 가능)
        const targetScrollPosition = elementTop - viewportHeight / 3;

        // 부드럽게 스크롤  
        window.scrollTo({
          top: targetScrollPosition,
          behavior: 'smooth'
        });
      }
    });

    // Tab 키 상태 초기화 (다른 키를 누를 때)
    document.addEventListener('keyup', (e) => {
      if (e.key === 'Tab') {
        isTabPressed = false;
      }
    });

    window.addEventListener('resize', () => {
			if (!isTablet() && !isMobile()) {
				//모바일, 테블릿기기가 아닐때만 새로고침
				window.location.reload();
			}
    });

    window.addEventListener('orientationchange', () => {
    scrollTo(0, 0);
    setTimeout(() => {
      window.location.reload();
    }, 500);
    });

    document.querySelector('.loadingWrap').addEventListener('transitionend', (e) => {
      document.body.removeChild(e.currentTarget);
    });

	});

})();
