/** 세모 ExtnGate API 호출을 위한 공통 js **/

var semoApi = {
	
	callAjax : function (param, callback){
		
		var jsonData = {};
		
		// 포트폴리오 데모 빌드 — 실제 키·엔드포인트는 제거됨 (호출 시 통신 실패가 정상)
		jsonData.API_KEY 	= "";
		jsonData.ENC_YN  	= "N";
		jsonData.API_ID  	= param.API_ID;
		jsonData.REQ_DATA  	= param.REQ_DATA;

		var ajaxUrl 		= "";

		
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
