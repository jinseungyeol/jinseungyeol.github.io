/* ver 1.0.2 (2023-06-14) */
// 사업자번호 검증 함수
function rvfn_validation_busiNum(busiNum){
	var chkBusiNum = busiNum.split("-").join("");
	if (!Boolean(chkBusiNum)) {
        return false;
    } else if (chkBusiNum.length !== 10) {
        return false;
    } else{
        return true;
    }
}