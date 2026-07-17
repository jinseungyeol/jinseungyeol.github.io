import HeaderTitle from "../components/HeaderTitle";

// 환경설정
const SettingNone = () => {
  return (
    <>
      {/* Title */}
      <HeaderTitle depth="one" title="설정" />
      {/* //Title */}
      {/* Contents */}
      <ul className="boxList">
        <li>
          <div className="listTitArea">
            <div className="left">
              <strong className="listTit">건강보험 인증서</strong>
            </div>
            <div className="right">
              <button className="bodyActiveBtn">등록하기</button>
            </div>
          </div>
          <div className="grayCard">
            <p className="infoTxt">건강보험 EDI 인증서를 등록합니다.</p>
          </div>
        </li>
        {/* 2025-02-06 */}
        <li>
          <div className="listTitArea">
            <div className="left">
              <strong className="listTit">건강보험 비밀번호</strong>
            </div>
            <div className="right">
              <button className="bodyActiveBtn">등록하기</button>
            </div>
          </div>
          <div className="grayCard">
            <p className="infoTxt">건강보험 EDI 나의사업장 비밀번호를 등록합니다.</p>
          </div>
        </li>
        {/* //2025-02-06 */}
        <li>
          <div className="listTitArea">
            <div className="left">
              <strong className="listTit">국민연금 인증서</strong>
            </div>
            <div className="right">
              <button className="bodyActiveBtn">등록하기</button>
            </div>
          </div>
          <div className="grayCard">
            <p className="infoTxt">국민연금 EDI 인증서를 등록합니다.</p>
          </div>
        </li>
        <li>
          <div className="listTitArea">
            <div className="left">
              <strong className="listTit">근로복지공단 인증서</strong>
            </div>
            <div className="right">
              <button className="bodyActiveBtn">등록하기</button>
            </div>
          </div>
          <div className="grayCard">
            <p className="infoTxt">
              근로복지공단 토탈서비스 인증서를 등록합니다.
            </p>
          </div>
        </li>
        <li>
          <div className="listTitArea">
            <div className="left">
              <strong className="listTit">홈택스 인증서</strong>
            </div>
            <div className="right">
              <button className="bodyActiveBtn">등록하기</button>
            </div>
          </div>
          <div className="grayCard">
            <p className="infoTxt">홈택스 인증서를 등록합니다.</p>
          </div>
        </li>
        <li>
          <div className="listTitArea">
            <div className="left">
              <strong className="listTit">위택스 인증서</strong>
            </div>
            <div className="right">
              <button className="bodyActiveBtn">등록하기</button>
            </div>
          </div>
          <div className="grayCard">
            <p className="infoTxt">위택스 인증서를 등록합니다.</p>
          </div>
        </li>
      </ul>
      {/* //Contents */}
    </>
  );
};

export default SettingNone;
