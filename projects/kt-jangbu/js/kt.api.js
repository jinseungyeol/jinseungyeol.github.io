/** 세모 ExtnGate API 호출을 위한 공통 js **/

var semoApi = {
	
	callAjax : function (param, callback){
		
		var jsonData = {};
		
		jsonData.API_KEY 	= "dc2f1a58-a232-6727-88b7-75b69439b661";
		jsonData.ENC_YN  	= "N";
		jsonData.API_ID  	= param.API_ID;
		jsonData.REQ_DATA  	= param.REQ_DATA;

		var hostname    	= location.hostname;    // www.semojangbu.com은 운영임을 확인하기 위해 
        var isDev       	= true;                 // 개발여부
		//var ajaxUrl 		= "https://sit.smjb.co.kr/ExtnGate.do"; // 최초 개발 url 
		var ajaxUrl 		= "https://uat.smjb.co.kr/ExtnGate.do"; // 최초 개발 url (임시로 개발보다는 UAT로 호출)
        
        if(hostname=="www.semojangbu.com"){
            isDev = false;
        } 
        
        if(!isDev){
            ajaxUrl = "https://api.smjb.co.kr/ExtnGate.do";
        }

		
		$.ajax({
            type: "POST",
            url: ajaxUrl,
            data: JSON.stringify(jsonData),
            dataType: "text",
            contentType : "application/json; charset=UTF-8",
            error: function(data) {
              	console.log('통신실패!!'+data);
            },
            success: function(data) {
				if (typeof callback === 'function') {
					callback(JSON.parse(data));
				}
				
            }
        });

	}
	
}
