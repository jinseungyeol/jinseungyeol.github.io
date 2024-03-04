/**
 * 세모리포트 폼 신청서 API 호출을 위한 공통 js
 */

var semoApi = {
	
	callAjax : function (param, callback){
		
		var hostname    	= location.hostname;    // www.semoreport.com은 운영임을 확인하기 위해 
        var isDev       	= true;                 // 개발여부
		var ajaxUrl			= "https://uat.smjb.co.kr/ExtnGate.do";
		var sendJsonData;
		var svcCd			= "SEMO_HP";
		
		if (hostname=="www.semojangbu.com" || hostname=="www.ionesoho.co.kr"  || hostname=="www.nhsoho.co.kr"  || hostname=="www.xn--or3b2no4ee3j.com"){
			// 세모장부 
			isDev = false;
		} else if(hostname=='www.semoreport.com'){
			// 세모리포트 
            isDev = false;
			svcCd = "SEMROR_HP"
		}

		// 세모장부 기본 API URL
        if(!isDev){
            ajaxUrl = "https://api.smjb.co.kr/ExtnGate.do";
        }
		
		// 세모장부 기본 JSON 값 셋팅
		var jsonData = {
            API_KEY: 	"dc2f1a58-a232-6727-88b7-75b69439b661",
            ENC_YN:  	"N",
            API_ID:  	param.API_ID,
            REQ_DATA : 	param.REQ_DATA
		};
		sendJsonData	= JSON.stringify(jsonData);


		//서비스 코드가 없으면 세모장부 / NH소상공인파트너 / KT 사장님 장부비서로 본다. (기본값 사용)
		if(svcCd =="SEMROR_HP"){
			ajaxUrl			= "https://sitsemormgmt.smjb.co.kr/SmrGw.do";
			
			if(!isDev){
				ajaxUrl = "https://reportmgmt.appplay.co.kr/SmrGw.do";
			}

			// JSON 값 셋팅
			jsonData = {
				CNTS_CRTS_KEY: "d18b0e32-4f3f-408e-ba27-d106a67ec98b",
				ENC_YN: "N",
				TRAN_NO: param.TRAN_NO,
				REQ_DATA : param.REQ_DATA
			};

			sendJsonData = "JSONData="+JSON.stringify(jsonData);
		}
		
		$.ajax({
            type: "POST",
            url: ajaxUrl,
            data: sendJsonData,	// JSONData Parameter값을 셋팅해야 함. 
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

