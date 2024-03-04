// 시간 추출
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

// 공통 스크립트 태그 삽입
var scriptTag = document.createElement('script');
var firstScriptTag = document.getElementsByTagName('script')[0];

if (subdomain == 'www' || subdomain == 'm' || subdomain == 'tax') {
  scriptTag.src = `https://publ.roumit.com/js/roumit_common.js?${today}`;
} else {
  scriptTag.src = `https://publ.smjb.co.kr/COMMON/js/roumit_common.js?${today}`;
}

firstScriptTag.parentNode.insertBefore(scriptTag, firstScriptTag);

// 공통 CSS 태그 삽입
var linkTag = document.createElement('link');
var firstLinkTag = document.getElementsByTagName('link')[0];
linkTag.rel = "stylesheet";

if (subdomain == 'www' || subdomain == 'm' || subdomain == 'tax') {
  linkTag.href = `https://publ.roumit.com/css/roumit_common.css?${today}`;
} else {
  linkTag.href = `https://publ.smjb.co.kr/COMMON/css/roumit_common.css?${today}`;
}
firstLinkTag.parentNode.insertBefore(linkTag, firstLinkTag);


