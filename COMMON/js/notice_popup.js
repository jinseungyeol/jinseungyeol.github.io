// center 팝업
fn_popCenter = function (obj) {
  var thisScrollY = $(window).scrollTop();
  fn_scrollLock(thisScrollY);
  // center 팝업 열기
  $(obj).find(".noticePop").fadeIn();
};

// close
fn_popClose = function(obj) {
  scrollPosY = ($("body").css("top"));
  $(obj).closest(".noticePop").fadeOut(150);
  
  fn_scrollUnlock(scrollPosY);
};

// dim close
fn_popdimClose = function(obj) {
  scrollPosY = $("body").css("top");
  $(obj).closest(".noticePop").fadeOut(150);

  fn_scrollUnlock(scrollPosY);
};

/* 화면 back scroll 고정/해제 */
fn_scrollLock = function(thisScrollY) {
  $("body").css({'overflow':'hidden', 'position':'fixed', 'width':'100%'});
  $("body").css("top", -thisScrollY);
};

// scroll 고정 (화면이 최상단으로 스크롤됨을 방지하기 위함)
fn_scrollUnlock = function(scrollPosY) {
  $("body").css({'overflow':'', 'position':'', 'width':''});
  $(window).scrollTop(Math.abs(parseInt(scrollPosY)));
};

//날짜 비교
fn_isDeadline = function(startDead, endDead) {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
  const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const today = parseInt(year.toString() + month.toString() + day.toString());
  console.log(today, startDead)

  // 서브도메인이 "publ"인 경우
  if (subdomain === 'publ') {
    return false; // 날짜 비교를 수행하지 않음
  }
  
  return today <= startDead || today >= endDead;
}

//셋팅한 쿠키 확인
fn_getCookie = function (cname) {
  return !document.cookie ? "" : document.cookie
  .split(';')
  .find(row => row.trim().startsWith(cname)) //쿠키이름 setCookie() cname과 동일한 값 기입
  ?.split('=')[1];
}

//쿠키 셋팅
fn_setCookie = function(cname, cvalue, exdays) {
  let date = new Date();
  date.setTime(date.getTime() + (exdays * 24 * 60 * 60 * 1000 )); //exdays=1 이면 1일, 7이면 7일
  const expires = "expires=" + date.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires; //getCookie() cname과 동일한 값 기입
}

var setCookieName = 'pop_new_year';
var host = window.location.host;
var subdomain = host.split('.')[0];

$(function () {
  if (!fn_isDeadline(20240201, 20240213) && !fn_getCookie(setCookieName)) {
    $("body").append(`
      <div class="noticePop" style="position: fixed; inset: 0; z-index: 9999999;">
        <div class="notice_dim" onclick="fn_popClose(this); return false;" style="position: absolute; inset: 0; background: rgba(0,0,0,0.7);"></div>
        <div class="noticePopInner" style="width: calc(100% - 40px); max-width: 500px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); border-radius: 20px; overflow: hidden;">
          <div class="areaImg" style="height: 70vh; max-height: 600px; background: url(https://publ.roumit.com/img/pop/pop_notice.png) no-repeat center / cover;"></div>
          <div class="areaBtn" style="position: relative; display: flex; background: #fff; height: 17vw; max-height: 60px;">
            <button type="button" onclick="fn_popClose(this); fn_setCookie('${setCookieName}', true, 1); return false;" style="all: unset; flex: 1; text-align: center; font-size: 18px; cursor: pointer;">하루보지않기</button>
            <p style="position: absolute; left: 50%; transform: translateX(-50%); top: 0; bottom: 0; width: 1px; background: #939393;"></p>
            <button type="button" onclick="fn_popClose(this); return false;" style="all: unset; flex: 1; text-align: center; font-size: 18px; cursor: pointer;">닫기</button>
          </div>
        </div>
      </div>
    `);
    fn_popCenter('.noticePop');
	}
  //END 2월 2일 ~ 2월 12일 팝업 코드
})