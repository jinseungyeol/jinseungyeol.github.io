var semorprtApi = {
    rprtcallAjax : function (param, callback){
		
		var jsonData = {
            CNTS_CRTS_KEY: "d18b0e32-4f3f-408e-ba27-d106a67ec98b",
            ENC_YN: "N",
            TRAN_NO: param.TRAN_NO,
            REQ_DATA : param.REQ_DATA
        };
        
        
        var hostname    	= location.hostname;    // www.semoreport.com은 운영임을 확인하기 위해 
        var urlParams = new URLSearchParams(window.location.search);
        var isDev = true;                 // 개발여부
        var isUAT = urlParams.get('isUAT'); //UAT 여부
        var ajaxUrl 		= "https://sitsemormgmt.smjb.co.kr/SmrGw.do";
        
        if(hostname=='www.semoreport.com' || hostname=='tax.semoreport.com' || hostname=='m.semoreport.com'){
            isDev = false;
        } 
        
        if (!isDev) {
            // 운영
            ajaxUrl = "https://reportmgmt.appplay.co.kr/SmrGw.do";
        } else if (isUAT == 'Y') {
            // UAT
            ajaxUrl = "https://uatsemormgmt.smjb.co.kr/";
        }
        
        $.ajax({
            type: "POST",
            url: ajaxUrl,
            data: "JSONData="+JSON.stringify(jsonData), // JSONData Parameter값을 셋팅해야 함.
            dataType: "json",
            //contentType : "application/json; charset=UTF-8",
            error: function(data) {
                console.log(data);
            },
            success: function(data) {
                if (typeof callback === 'function') {
                    callback(data);
                }
            }
        });
        
	}
}

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