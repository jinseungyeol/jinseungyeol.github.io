import HeaderTitle from "../components/HeaderTitle";
import IconTsDown from '../assets/images/ico_ts_down.svg';
import DateYMSelect from "../components/DateYMSelect";
import Tooltip from "../components/Tooltip";
import { useState } from "react";
import IconInfo from '../assets/images/ico_info.svg';

// 4대보험 고지내역 조회( 수집할 연월 선택 )
const FourIns = () => {
  const [toggleHalfYear, setToggleHalfYear] = useState(false);
  
  return (
    <>
      {/* Title */}
      <HeaderTitle depth="more" title="4대보험 고지내역 조회" />
      {/* //Title */}
      {/* Contents */}
      <div className="vatOverview"> {/* 2024-11-27 */}
        <div className="termSelect">
          <strong className="listTit">수집할 연월 선택</strong>
          {/* selected 클래스 추가시 검정텍스트로 변경됨 */}
          <div className="dropdownWrap">
            <button className="selectBtn" onClick={() => {setToggleHalfYear(!toggleHalfYear)}}>
              <span>수집할 연월을 선택해주세요.</span>
              <img
                src={IconTsDown}
                className="tsDown"
                alt="아래화살표"
              />
            </button>
            {toggleHalfYear && <DateYMSelect/>}
          </div>
        </div>
        <ul className="boxList">
          <li className="ctResult">
            <div className="grayCard" style={{height: 'auto'}}>
              <ul className="dotList">
                <li>
                  <div className="left">
                    <p>수집일에 PC가 종료되거나 절전 상태인 경우 수집이 제한됩니다.</p>
                  </div>
                </li>
                <li>
                  <div className="left">
                    <p>수집 시간은 익일 <span className="pointColor">익일 01시 ~ 06시</span>로 자동 설정됩니다.</p>
                  </div>
                </li>
                <li>
                  <div className="left">
                    <p>국민연금 -{">"} 건강보험 -{">"} 고용/산재보험 순서로 수집됩니다.</p>
                  </div>
                </li>
                <li>
                  <div className="left">
                    <p>
                      수집시간 내에 미수집된 경우 4대보험앱 실시간 수집기능 이용을 권장드립니다. (단, 국민연금은 01시 ~ 06시 사이에 수집 가능하여 실시간 수집 이용이 불가합니다.)
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
          </li>
        </ul>
        {/* 2025-02-27 */}
        <div className="toggleArea">
          <div className="listTitArea">
            <div className="left">
              <strong className="listTit">국민연금 고지내역 선택</strong>
            </div>
            <div className="right">
              <label className="switch">
                <input type="checkbox"></input>
                <div className="slider"></div>
              </label>
            </div>
          </div>
          <ul className="checkList">
            <li>
              <div className="checkBox">
                <input type="radio" id="monthTally" name="npnd" />
                <label htmlFor="monthTally">
                  두루누리 미적용 (1차) {""}
                  <Tooltip
                    direction="bottom"
                    content={
                      <p>
                        국민연금에서 2차내역 고지되기 전<br />
                        1차 내역을 미리 조회하실 수 있습니다.<br />
                        (두루누리 지원금 미적용)
                      </p>}
                  >
                    <img src={IconInfo} alt="툴팁아이콘"/>
                  </Tooltip>
                </label>
                
              </div>
            </li>
            <li>
              <div className="checkBox">
                <input type="radio" id="statement" name="npnd"/>
                <label htmlFor="statement"> 두루누리 적용 (2차)</label>
              </div>
            </li>
          </ul>
        </div>
        {/* //2025-02-27 */}
        <div className="fixedBtm">
          <div className="btnWrap">
            {/* 활성화시 disabled클래스 제거 */}
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

export default FourIns;
