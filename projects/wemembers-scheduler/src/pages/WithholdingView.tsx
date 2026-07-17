import DaySelectBox from "../components/DaySelectBox";
import HeaderTitle from "../components/HeaderTitle";

// 원천세 납부서 조회
const WithholdingView = () => {

  return (
    <>
      {/* Title */}
      <HeaderTitle depth="more" title="원천세 납부서 조회" />
      {/* //Title */}
      {/* Contents */}
      <div className="productWrapper">
        <ul className="boxList">
          <li>
            <div className="listTitArea">
              <div className="left">
                <strong className="listTit">
                  매월 수집 일자 선택 ( 최대 5건 )
                </strong>
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
                매월 <span className="pointColor">1, 3, 7, 10, 14일</span>{" "}
                자동수집을 실행합니다.
              </p>
              <p className="infoTxt">
                (최초 수집은{" "}
                <span className="pointColor">2024-08-01 01시 부터</span> 입니다)
              </p>
            </div>
          </li>
          <li className="fmsiResult">
            <div className="grayCard">
              <ul className="dotList">
                <li>
                  <div className="left">
                    <p>수집일에 PC가 종료되거나 절전 상태인 경우 수집이 제한됩니다.</p>
                  </div>
                </li>
                <li>
                  <div className="left">
                    <p>수집시간은 아래와 같이 자동설정됩니다.</p>
                  </div>
                </li>
                <li>
                  <div className="left">
                    <p>
                      위택스 : <span className="pointColor fwb">01시 - 06시 </span>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="left">
                    <p>
                      홈택스 : <span className="pointColor fwb">06시 - 09시 </span>
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
                          수집일 기준 <span className="pointColor fwb">D - 1개월</span>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="left">
                        <p>
                          수집일자를 최대 5건까지 중복으로 설정할 수 있습니다.
                        </p>
                        <p>
                          Ex) 1, 3, 7, 10, 14일 최대 설정시 매월 설정된 일자에 01시부터 원천세 납부서를 자동으로 수집합니다.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="left">
                        <p>
                          홈택스 다른 업무와 중복 등록된 경우 홈택스 중복로그인으로 인하여 시간 내에 수집이 불가할 수 있습니다.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="left">
                        <p>
                          서비스 문의 : 1670-1211
                        </p>
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

export default WithholdingView;
