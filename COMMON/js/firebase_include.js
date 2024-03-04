// 오늘날짜 추출
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
var day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
var hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
var minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
var today = parseInt(year.toString() + month.toString() + day.toString() + hours.toString() + minutes.toString());

// 서브도메인 추출
var host = window.location.host;
var subdomain = host.split('.')[0];

if (subdomain == 'publ') {
  // 스크립트 태그 생성
  var scriptTag = document.createElement('script');
  var firstScriptTag = document.getElementsByTagName('script')[0];

  scriptTag.src = `/COMMON/js/firebase_login.js?${today}`;
  scriptTag.setAttribute('type', 'module');

  //스크립트 삽입
  firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag); 
} 