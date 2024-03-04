$(document).ready(function () {
    
    $('.sec_3_slider').bxSlider({
        auto: true,
        speed: 500,
        pause: 3000,
        mode: 'horizontal',
        autoControls: false,
        pager: true,
        preventDefaultSwipeY: false,
        hideControlOnEnd: false,
        infiniteLoop: true,
        controls: false,
        moveSlides: 0,
        autoHover: true,
        autoDelay: 5000,
      
    });

    $("#naverBlog").attr("target", "_blank");
    $("#kakao").attr("target", "_blank");
    $("#request").attr("target", "_blank");
    $("#download").attr("target", "_blank");
    $("#center").attr("target", "_blank");
    $("#customer").attr("target", "_blank");
    $(".btm_button.send").attr("target", "_blank");
    
    

    $("#use_terms").click(function () { //이용약관 열기
      // $(".terms_use_bg").fadeIn();
      window.open("pdf/kt_terms.pdf", "_blank", "width=640, height=800");
    });
    $(".terms_title > i").click(function () { //이용약관 닫기
        $(".terms_use_bg").fadeOut();
    });
    $("#indi_terms").click(function () { //이용약관 열기
      // $(".terms_indi_bg").fadeIn();
      window.open("pdf/kt_privacy_20231122.pdf", "_blank", "width=640, height=800");
    });
    $(".terms_title > i").click(function () { //이용약관 닫기
        $(".terms_indi_bg").fadeOut();
    });
    $("#pay_stub2 i.del").click(function () { //이용약관 닫기
        $("#pay_stub2").fadeOut();
    });
    $("#thanksgiving i.del").click(function () { //이용약관 닫기
        $("#thanksgiving").fadeOut();
    });

    $(document).click(function (e) { // 이용약관 배경 터치 닫기
        if ($(".terms_use_bg, .terms_indi_bg").is(e.target)) {
            $(".terms_use_bg, .terms_indi_bg").fadeOut();

        }
    });


    var layer = $('.modal_popup');
    var btnClose = $('.btn-del_btn > i');
	var edate= new Date("2017/11/27 08:00:00"); 
    //추석 날짜 비교
  function isDeadline() {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()+1 < 10 ? `0 + ${date.getMonth()+1}` : date.getMonth()+1
    const day = date.getDate()
    const today = parseInt(year.toString() + month.toString() + day.toString())
    return today <= 20211226 || today >= 20220122
  }

  
  //쿠키확인
  function getCookie() {
    return !document.cookie ? "" : document.cookie
      .split('; ')
      .find(row => row.startsWith('brif_one_off_popup'))
      ?.split('=')[1];

  } 
  //팝업닫기
  function closePopup() {
    //다시 보지 않기 확인
    if(document.querySelector('#pay_stub_input2').checked) {
      //쿠키 셋팅
      let date = new Date();
      date.setTime(date.getTime() + (7 * 24 * 60 * 60 * 1000 )); 
      const expires = "expires=" + date.toUTCString();
      document.cookie = "brif_one_off_popup=true; " + expires + "; path=/";
    } 

    $("#pay_stub2").hide();
  }

  if(!isDeadline() && !getCookie()) {
    $("#pay_stub2").show();
  } else {
    $("#pay_stub2").hide();
  }

  $(".kt_event_top_r").click(function(){
    closePopup();
  });

  $(".pay_stub").click(function(){
    window.open('https://blog.naver.com/ktsemogage/222601637144')
  });

    //팝업닫기
    // function closePopup() {
    //     //다시 보지 않기 확인
    //     if(document.querySelector('#pay_stub_input').checked) {
    //       //쿠키 셋팅
    //       let date = new Date();
    //       date.setTime(date.getTime() + (5000 * 24 * 60 * 60 * 1000 ));
    //       const expires = "expires=" + date.toUTCString();
    //       document.cookie = "one_off_popup=true; " + expires + "; path=/";
    //     } 
    //     document.querySelector('#pay_stub').classList.remove('on')
    //   }



    // var getCookie = function (cname) {
    //     var name = cname + "=";
    //     var ca = document.cookie.split(';');
    //     for(var i=0; i<ca.length; i++) {
    //         var c = ca[i];
    //         while (c.charAt(0)==' ') c = c.substring(1);
    //         if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
    //     }
    //     return "";
    // }

    // // 24시간 기준 쿠키 설정하기  
    // var setCookie = function (cname, cvalue, exdays) {
    //     var todayDate = new Date();
    //     todayDate.setTime(todayDate.getTime() + (exdays*24*60*60*1000));    
    //     var expires = "expires=" + todayDate.toUTCString(); // UTC기준의 시간에 exdays인자로 받은 값에 의해서 cookie가 설정 됩니다.
    //     document.cookie = cname + "=" + cvalue + "; " + expires;
    // }

    // var couponClose = function(){
    //     if($("#pay_stub_input2").is(":checked") == true){
    //         setCookie("close","Y",1);   //기간( ex. 1은 하루, 7은 일주일)
    //     }
    //     $("#pay_stub2").fadeOut();
    // }
    
    // var cookiedata = document.cookie;
    // if(cookiedata.indexOf("close=Y") < 0){
    //     $("#pay_stub2").show();
    // }else{
    //     $("#pay_stub2").hide();
    // }
    // $("#pay_stub_input2").click(function(){
    //     couponClose();
    // });

});

