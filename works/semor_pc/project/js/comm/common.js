/**
 * smartPopup Open 함수
 * 
 * @param option
 * @return
 */
function open_smartPop(opt){
    var doc;
    try {
        doc = window.parent;
        doc.smartOpenPop( opt );
    }catch(e){
        smartOpenPop( opt );
    }
}


/**
 * smartPopUp Close 함수
 * 
 * @param clllback
 *            리턴받을 함수
 * @param data
 *            리턴함수에 전달한 JSON DATA
 */
function close_smartPop(callbackFn, data){
    var doc;
    try{
        doc = window.parent;
        doc.smartClosePop(callbackFn , data);
    }catch(e){

        // window.close();
        smartClosePop(callbackFn , data); // smartClosePop
    }
}
