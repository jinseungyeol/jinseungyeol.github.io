import HeaderTitle from "../components/HeaderTitle";
import DaySelectBox from "../components/DaySelectBox";

// 사업용 신용카드 조회
const CheckBusiCard = () => {

  return (
    <>
      {/* Title */}
      <HeaderTitle depth="more" title="사업용 신용카드 조회" />
      {/* //Title */}
      {/* Contents */}
      <div className="productWrapper">
        <ul className="boxList">
          <li>
            <div className="listTitArea">
              <div className="left">
                <strong className="listTit">매월 수집 일자 선택</strong>
              </div>
              <div className="right">
                <button className="grayBdBtn">초기화</button>
              </div>
            </div>
            <DaySelectBox selected={[5, 28]}/>
          </li>
          <li>
            <div className="purpleCard">
              <p className="infoTxt">
                매월 <span className="pointColor">1일, 12일, 24일</span>{" "}
                자동수집을 실행합니다.
              </p>
              <p className="infoTxt">
                (최초 수집은{" "}
                <span className="pointColor">2024-08-01 06시 부터</span> 입니다)
              </p>
            </div>
          </li>
          <li className="fmsiResult">
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
                      수집시간은{" "}
                      <span className="pointColor fwb">06시 - 24시</span>로
                      자동설정됩니다.
                    </p>
                  </div>
                </li>
              </ul>
              <div className="ctResultBox">
                <div className="item">
                  <strong>[ 자료수집 기준 ]</strong>
                  <ul className="dotList">
                    <li>
                      <div className="left">
                        <p>
                          수집 일자 시점{" "}
                          <span className="pointColor fwb">최신 데이터</span>{" "}
                          수집
                        </p>
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
                        <p>서비스 문의 : 1670-1211</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
        <div className="fixedBtm">
          <div className="btnWrap">
            {/* 활성화 시 disabled 클래스 제거 */}
            <button className="activeBtn disabled">
              <span>저장</span>
            </button>
          </div>
        </div>
      </div>
      {/* //Contents */}
    </>
  );
};

export default CheckBusiCard;
