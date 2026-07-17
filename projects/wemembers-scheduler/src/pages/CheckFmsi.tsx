import HeaderTitle from "../components/HeaderTitle";
import TitleLine from '../components/TitleLine';
import DaySelectBox from '../components/DaySelectBox';

// 4대보험 고지내역 조회
const CheckFmsi = () => {
  return (
    <>
      {/* Title */}
      <HeaderTitle depth="more" title="4대보험 고지내역 조회" />
      {/* //Title */}
      {/* Contents */}
      <div className="productWrapper">
        <ul className="boxList">
          <li>
            <TitleLine title="매월 수집 일자 선택 (최대 5건)"> {/** 2024-11-05 */}
              <button className="grayBdBtn">초기화</button>
            </TitleLine>
            <DaySelectBox selected={[5, 28]}/>
          </li>
          <li>
            <div className="purpleCard">
              {/* 2024-11-05 */}
              <p className="infoTxt">
                매월 <span className="pointColor">1일, 12일, 24일</span>{" "}
                자동수집을 실행합니다.
              </p>
              <p className="infoTxt">
                (최초 수집은{" "}
                <span className="pointColor">2024-08-01 06시 부터</span> 입니다)
              </p>
              {/* //2024-11-05 */}
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
                    <p>
                      수집시간은{" "}
                      <span className="pointColor fwb">01시 - 06시</span>로
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
                          1일 ~ 20일 :{" "}
                          <span className="pointColor fwb">전월</span> 데이터
                          수집
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="left">
                        <p>
                          22일 ~ 28일 :{" "}
                          <span className="pointColor fwb">당월</span> 데이터
                          수집
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
                          {
                            "국민연금 -> 건강보험 -> 고용/산재보험 순서로 수집됩니다."
                          }
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="left">
                        <p>
                          수집시간 내에 미수집된 경우 4대보험앱 실시간 수집기능
                          이용을 권장드립니다. 수집오류 발생 시 수집 일자를
                          명일로 변경하시면 재수집 하실 수 있습니다. (수집 후
                          원래 일자로 원복 처리 필요)
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
        <div className="checkBox">
          <input type="checkbox" id="apply" />
          <label htmlFor="apply"> {/** 2024-11-05 */}
            등록 테스트(국민연금 제외) 
          </label>
        </div>
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

export default CheckFmsi;
