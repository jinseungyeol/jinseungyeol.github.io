import HeaderTitle from "../components/HeaderTitle";
import IconTsDown from '../assets/images/ico_ts_down.svg';

// 부가세 통합자료 조회
const HomeVatData = () => {
  return (
    <>
      {/* Title */}
      <HeaderTitle depth="more" title="부가세 통합자료 조회" />
      {/* //Title */}
      {/* Contents */}
      <div className="productWrapper">
        <div className="termSelect">
          <strong className="listTit">수집 기간 선택</strong>
          {/* selected 클래스 제거시 회색 텍스트 */}
          <button className="selectBtn selected">
            <span>2024-07-26</span>
            <img src={IconTsDown} className="tsDown" alt="아래화살표" />
          </button>
        </div>
        <ul className="boxList">
          <li className="ctResult">
            <div className="grayCard">
              <ul className="dotList">
                <li>
                  <div className="left">
                    <p>수집일에 PC가 종료될 시 수집이 제한됩니다.</p>
                  </div>
                </li>
                <li>
                  <div className="left">
                    <p>
                      부가세앱 홈택스 통합자료 조회메뉴에서 조회하는 전체
                      데이터를 자동 수집 합니다.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="left">
                    <p>
                      홈택스 점검으로 인해 23시 55분까지 수집 후 종료됩니다.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        <div className="fixedBtm">
          <div className="btnWrap">
            {/* 활성화시 disabled클래스 제거 */}
            <button className="activeBtn disabled">
              <span>수집 시작</span>
            </button>
          </div>
        </div>
      </div>
      {/* //Contents */}
    </>
  );
};

export default HomeVatData;
