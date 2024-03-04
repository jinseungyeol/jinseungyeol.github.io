// 하단팝업 
function popUpShow() { // 팝업 띄우기
    $(".popup_toast_bg").fadeIn();
    $(".popup_toast.set_pd_aus").show().animate({
        bottom: "0"
    });
}
function popupHide() { // 팝업 사라지기
    $(".popup_toast_bg").fadeOut();
    $(".popup_toast.set_pd_aus").show().animate({bottom: "-100%"});
}
function popupBgHide() { // 배경터치시 사라지기
    $(document).click(function (e) {
        if ($(".popup_toast_bg").is(e.target)) {
            $(".popup_toast_bg").fadeOut();
            $(".popup_toast.set_pd_aus").show().animate({bottom: "-100%"});

        }
    });
}

function popup_bottom(){
    
    
}


// 하단팝업 만드는 로직

function cf_select_popup(title, hidden_id, text_id, code, callback) {

    if ($('#cf_select_popup').length > 0) {
        $('#cf_select_popup').remove();
    }

    if (callback == "" || callback == "undefined") {
        callback = "cf_select_popup_callback";
    }

    var popup_html = "<div class=\"popup_toast_bg\" id=\"cf_select_popup\" style=\"display:none;\"><div class=\"popup_toast set_pd_aus\">"
    popup_html += "<div class=\"popup_toast_head\"><div class=\"popup_toast_tit\" id=\"cf_select_popup_tit\">" + title + "</div>";
    popup_html += "<i class=\"ico_cen popup_toast_close\" id=\"cf_select_popup_close\" onclick=\"cf_select_popup_close()\"></i></div>";
    popup_html += "<div class=\"bank_account_list\" id=\"popup_list\"><ul></ul></div></div></div>";

    $("body").append(popup_html);


    for (var key in codeList) {


        $('#cf_select_popup').find('ul').append("<li id=" + key + " onclick=\"" + callback + "('" + hidden_id + "','" + text_id + "','" + key + "')\"><p class=\"ellipsis\"><span class=\"ellipsis\">" + codeList[key] + "</span></p></li>");

        //공통 CSS 때문에 강제로 CSS 적용
        $("#popup_list li p span").css("font-size", "unset");
        $("#popup_list li p span").css("line-height", "unset");
        $("#popup_list li p span").css("letter-spacing", "unset");
        $("#popup_list li p span").css("text-align", "unset");
        $("#popup_list li p span").css("color", "#222222");
        $("#popup_list li p span").css("font-family", "Noto Sans KR");
        $("#popup_list li p span").css("margin-bottom", "0");
    }

    popUpShow();
}

/**
 * 셀렉트 팝업 닫기
 */
function cf_select_popup_close() {
    $("#cf_select_popup").fadeOut();
    $("#cf_select_popup").animiate({
        bottom: "-100%"
    }).hide(2000);
}

/**
 * 셀렉트 팝업 콜백
 */
function cf_select_popup_callback(hidden_id, text_id, code) {

    if (hidden_id != "" && hidden_id != "undefined") {
        $("#" + hidden_id).val(code);
    }
    if (text_id != "" && text_id != "undefined") {

        $("#" + text_id).val($("#" + code + " p span").text());
    }

    $('#cf_select_popup').hide();
}



// 이벤트 페이지 페이드 효과 

function fadeRight() {
    $(".cont_bg").on("scroll", function () {
        const trigger = new ScrollTrigger.default();
        trigger.add('[data-trigger]');
    })
}

// 아코디언 메뉴 (한개 열리면 한개는 닫히는 메뉴, 직원관리)

function listOneShow() {
    $(".income_list_title").click(function () {
        $(this).next().slideToggle();
        var $thisParent = $(this).parent();
        if ($thisParent.siblings().children(".income_list_wrap").css("display", "none") == true) {
            $thisParent.siblings().children(".income_list_wrap").slideUp();
        }
    });
};

// 알림 팝업

function alretPopupFade() {
    $(".popup_bg.alert .btm_button > span").click(function () {
        $(".popup_bg.alert").fadeOut();
    });
    $(document).click(function (e) {
        if ($(".popup_bg.alert").is(e.target)) {
            $(".popup_bg.alert").fadeOut();
        }
    });
}


// 숫자증가 (금액증가)

var memberCountConTxt = 296842;
  $({ val : 0 }).animate({ val : memberCountConTxt }, {
   duration: 1500, // 속도
  step: function() {
    var num = numberWithCommas(Math.floor(this.val));
    $("#number1").text(num);
  },
  complete: function() {
    var num = numberWithCommas(Math.floor(this.val));
    $("#number1").text(num);
  } 
});

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}




function mainContentSlide(){
    $(".my_cont_cell").click(function(){
        $(this).children(".my_num_wrap").slideToggle();
    });
}

function buttonClickAcion(){

    $('.wrap.staff .btm_button > span').on({
        'touchstart': function () {
            $(this).addClass('active');
        },
        'touchend': function () {
            $(this).removeClass('active');
        }
    });
      

}

function staffSlideUpDown(){ //직원관리 메인 리스트 슬라이드 업 다운
    $('.staff_list_title').click(function(){
        $(this).siblings().slideToggle();
        $(this).children("i").toggleClass("down");

    });
}






if($(".common_search_box").css("display","block")){
    $(".staff_wrapper.main .staff_list").css({paddingTop:"113px", maxHeight:"calc(100vh - 232px)"});
} else{
    $(".staff_wrapper.main .staff_list").css({paddingTop:"64px", maxHeight:"calc(100vh - 181px)"});
}
