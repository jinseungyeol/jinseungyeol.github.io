$(function () {
  // 탑버튼 쇼/하이드
  $(window).scroll(function () {
    if ($(this).scrollTop() > 30) {
      $("body").addClass("active");
    } else {
      $("body").removeClass("active");
    }
  });

  // 탑버튼
  $('.areaFloatingBtn.btnTop a').on('click', function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // 호버 시 미리보기
  $(".pId a").hover(
    function () {
      var url = $(this).attr("href");
      $("body").append('<div id="preview"><iframe src="' + url + '" frameBorder="0"></iframe></div>');
    },
    function () {
      $("#preview").remove();
    }
  );

  // 링크이동
  $(".pId a").on('click', function (e) {
    e.preventDefault();
    var devLink = $(this).attr('href');
    window.open(`worklist/html/preview.html?frameChannel=${devLink}`);
  });

  // 쿼리스트링으로 iframe 경로 넣어주기
  insertIframeURL();
});

// 쿼리스트링으로 iframe 경로 넣어주기
function insertIframeURL() {
    var urlParams = new URLSearchParams(window.location.search);
    var frameChannel = urlParams.get('frameChannel');
  $('iframe').attr('src', `../../${frameChannel}`);
};