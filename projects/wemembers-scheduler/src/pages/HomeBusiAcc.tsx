import HeaderTitle from "../components/HeaderTitle";

// 사업용 계좌 조회
const HomeBusiAcc = () => {
  return (
    <>
      {/* Title */}
      <HeaderTitle depth="more" title="사업용 계좌 조회" />
      {/* //Title */}
      {/* Contents */}
      <div className="productWrapper">
        <div className="termSelect">
          <strong className="listTit">수집내용 안내</strong>
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
                      수임처앱 사업용계좌 등록현황 데이터를 자동 수집합니다.
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

export default HomeBusiAcc;
