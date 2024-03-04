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

var isMobile = fn_check_mobile();

// 모바일일 때
if (!isMobile) {
  window.location.href = "https://www.semoreport.com/pdf/" + DEFAULT_URL;
}