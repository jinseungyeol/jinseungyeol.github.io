import DaySelectBox from "../components/DaySelectBox";
import HeaderTitle from "../components/HeaderTitle";

const CheckVat = () => {

  return (
    <>
      {/* Title */}
      <HeaderTitle depth="more" title="부가세 통합자료 조회" />
      {/* //Title */}
      {/* Contents */}
      <div className="productWrapper">
        <ul className="boxList">
          <li>
            <div className="listTitArea">
              <div className="left">
                <strong className="listTit">
                  매월 수집 일자 선택 ( 최대 5건 ) {/** 2024-11-05 */}
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
                매월 <span className="pointColor">1, 12, 24일</span>{" "}
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
                {/* 2024-11-05 */}
                <li>
                  <div className="left">
                    <p>수집일에 PC가 종료되거나 절전 상태인 경우 수집이 제한됩니다.</p>
                  </div>
                </li>
                <li>
                  <div className="left">
                    <p>
                      수집시간은{" "}
                      <span className="pointColor fwb">06시 - 24시</span>로
                      자동설정됩니다. (홈택스 점검으로 23시 59분까지 수집 후 종료됩니다.)
                    </p>
                  </div>
                </li>
                {/* //2024-11-05 */}
              </ul>
              <div className="ctResultBox">
                <div className="item">
                  <strong>[ 자료수집 기준 ]</strong>
                  <ul className="dotList">
                    <li>
                      <div className="left">
                        <p>
                          1월 :{" "}
                          <span className="pointColor fwb">전년도 하반기</span>{" "}
                          데이터 수집
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="left">
                        <p>
                          2월 ~ 4월 :{" "}
                          <span className="pointColor fwb">1기(예정)</span>{" "}
                          데이터 수집
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="left">
                        <p>
                          5월 ~ 7월 :{" "}
                          <span className="pointColor fwb">금년도 상반기</span>{" "}
                          데이터 수집
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="left">
                        <p>
                          8월 ~ 10월 :{" "}
                          <span className="pointColor fwb">2기(예정)</span>{" "}
                          데이터 수집
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="left">
                        <p>
                          11월 ~ 12월 :{" "}
                          <span className="pointColor fwb">금년도 하반기</span>{" "}
                          데이터 수집
                        </p>
                      </div>
                    </li>
                    <li className="spacing">
                      <div className="left">
                        <p>
                          등록 테스트 체크박스를 선택하시면 정상 등록 여부를
                          확인하실 수있습니다. (홈메뉴)
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="left">
                        <p>
                          부가세앱 홈택스 통합자료 조회 메뉴에서 조회하는 전체
                          데이터를 자동으로 수집합니다.
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="left">
                        {/* 2024-11-05 */}
                        <p>
                          수집일자를 최대 5건까지 중복으로 설정 할 수 있습니다.
                          <br />
                          Ex) 1일, 12일, 20, 21, 25일 설정시 매월 설정된 일자에 06시부터
                          부가세자료를 자동으로 수집합니다.
                        </p>
                        {/* //2024-11-05 */}
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

export default CheckVat;
