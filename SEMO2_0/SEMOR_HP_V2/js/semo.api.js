/** 세모 ExtnGate API 호출을 위한 공통 js **/

var semoApi = {
	
	callAjax : function (param, callback){
		
		var jsonData = {};
		
		jsonData.API_KEY 	= "dc2f1a58-a232-6727-88b7-75b69439b661";
		jsonData.ENC_YN  	= "N";
		jsonData.API_ID  	= param.API_ID;
		jsonData.REQ_DATA  	= param.REQ_DATA;

		var hostname    	= location.hostname;    // www.semojangbu.com은 운영임을 확인하기 위해 
        var urlParams = new URLSearchParams(window.location.search);
        var isDev = true;                 // 개발여부
        var isUAT = urlParams.get('isUAT'); //UAT 여부
        var ajaxUrl = "https://sit.smjb.co.kr/ExtnGate.do"; // 최초 개발 url 
        

        if(hostname=="www.semoreport.com" ){
            isDev = false;
        } 
        
        if (!isDev) {
            // 운영
            ajaxUrl = "https://api.smjb.co.kr/ExtnGate.do";
        } else if (isUAT == 'Y') {
            // UAT
            ajaxUrl = "https://uatsemormgmt.smjb.co.kr/";
        }

		
		$.ajax({
            type: "POST",
            url: ajaxUrl,
            data: JSON.stringify(jsonData),
            dataType: "text",
            contentType : "application/json; charset=UTF-8",
            error: function(data) {
              	// console.log('통신실패!!'+data);
            },
            success: function(data) {
				if (typeof callback === 'function') {
					callback(JSON.parse(data));
				}
				
            }
        });

	}
	
}

var semorprtApi = {
    rprtcallAjax : function (param, callback){
		
		var jsonData = {
            CNTS_CRTS_KEY: "d18b0e32-4f3f-408e-ba27-d106a67ec98b",
            ENC_YN: "N",
            TRAN_NO: param.TRAN_NO,
            REQ_DATA : param.REQ_DATA
        };
        
        var hostname    	= location.hostname;    // www.semoreport.com은 운영임을 확인하기 위해 
        var urlParams       = new URLSearchParams(window.location.search);
        var isDev           = true;                 // 개발여부
        var isUAT           = urlParams.get('isUAT'); //UAT 여부
        var ajaxUrl 		= "https://sitsemormgmt.smjb.co.kr/SmrGw.do"; // 최초 개발 url 
        
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

        $('body').addClass('loading');

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
                    $('body').removeClass('loading');
                }
            }
        });
        
	}
}

