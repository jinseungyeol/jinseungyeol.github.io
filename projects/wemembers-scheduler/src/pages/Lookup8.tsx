import DateHalfYear from "../components/DateHalfYear";
import HeaderTitle from "../components/HeaderTitle";
import IconTsDown from '../assets/images/ico_ts_down.svg';
import { useState } from "react";

// 부가세 통합자료 조회
const CheckVat2 = () => {
  const [toggleHalfYear, setToggleHalfYear] = useState(false);
  const [toggleBusi, setToggleBusi] = useState(false);
  const [toggleTax, setToggleTax] = useState(false);
  
  return (
    <>
      {/* Title */}
      <HeaderTitle depth="more" title="부가세 통합자료 조회" />
      {/* //Title */}
      {/* Contents */}
      <div className="vatOverview"> {/* 2024-11-27 */}
        <div className="termSelect">
          <strong className="listTit">수집 기간 선택</strong>
          {/* selected 클래스 추가시 검정텍스트로 변경됨 */}
          <div className="dropdownWrap">
            <button className="selectBtn" onClick={() => {setToggleHalfYear(!toggleHalfYear)}}>
              <span>수집할 기간을 선택해주세요.</span>
              <img
                src={IconTsDown}
                className="tsDown"
                alt="아래화살표"
              />
            </button>
            {toggleHalfYear && <DateHalfYear/>}
          </div>
        </div>
        <div className="termSelect">
          <strong className="listTit">구분 선택</strong>
          {/* selected 클래스 추가시 검정텍스트로 변경됨 */}
          <div className="dropdownWrap">
            <button className="selectBtn"  onClick={() => {setToggleBusi(!toggleBusi)}}>
              <span>사업자 구분을 선택해주세요.</span>
              <img
                src={IconTsDown}
                className="tsDown"
                alt="아래화살표"
              />
            </button>
            {/* 사업자 구분 필터 */}
            {toggleBusi && <div className="lyFilter">
              <div className="all">
                <label className="cktxt">
                  <input type="checkbox" />
                  전체선택
                </label>
              </div>
              <ul className="filterList">
                <li>
                  <label className="cktxt">
                    <input type="checkbox" />
                    법인
                  </label>
                </li>
                <li>
                  <label className="cktxt">
                    <input type="checkbox" />
                    개인
                  </label>
                </li>
                <li>
                  <label className="cktxt">
                    <input type="checkbox" />
                    미지정
                  </label>
                </li>
              </ul>
              <div className="areaBtn">
                {/* 선택시 bodyActiveBtn 클래스로 교체 */}
                <button type='button' className="grayBgBtn"><span>선택 없음</span></button>
              </div>
            </div>}
            {/* //사업자 구분 필터 */}
          </div>
        </div>
        <div className="termSelect">
          <strong className="listTit">과세유형 선택</strong>
          {/* selected 클래스 추가시 검정텍스트로 변경됨 */}
          <div className="dropdownWrap">
            <button className="selectBtn"  onClick={() => {setToggleTax(!toggleTax)}}>
              <span>사업자 과세유형을 선택해주세요.</span>
              <img
                src={IconTsDown}
                className="tsDown"
                alt="아래화살표"
              />
            </button>
            {/* 사업자 구분 필터 */}
            {toggleTax && <div className="lyFilter">
              <div className="all">
                <label className="cktxt">
                  <input type="checkbox" />
                  전체선택
                </label>
              </div>
              <ul className="filterList">
                <li>
                  <label className="cktxt">
                    <input type="checkbox" />
                    과세
                  </label>
                </li>
                <li>
                  <label className="cktxt">
                    <input type="checkbox" />
                    간이
                  </label>
                </li>
                <li>
                  <label className="cktxt">
                    <input type="checkbox" />
                    면세
                  </label>
                </li>
                <li>
                  <label className="cktxt">
                    <input type="checkbox" />
                    기타
                  </label>
                </li>
                <li>
                  <label className="cktxt">
                    <input type="checkbox" />
                    단체
                  </label>
                </li>
                <li>
                  <label className="cktxt">
                    <input type="checkbox" />
                    휴업
                  </label>
                </li>
                <li>
                  <label className="cktxt">
                    <input type="checkbox" />
                    폐업
                  </label>
                </li>
                <li>
                  <label className="cktxt">
                    <input type="checkbox" />
                    간이(세계발행)
                  </label>
                </li>
                <li>
                  <label className="cktxt">
                    <input type="checkbox" />
                    확인요청
                  </label>
                </li>
                <li>
                  <label className="cktxt">
                    <input type="checkbox" />
                    미지정
                  </label>
                </li>
              </ul>
              <div className="areaBtn">
                {/* 선택시 bodyActiveBtn 클래스로 교체 */}
                <button type='button' className="grayBgBtn"><span>선택 없음</span></button>
              </div>
            </div>}
            {/* //사업자 구분 필터 */}
          </div>
        </div>
        <ul className="boxList">
          <li className="ctResult">
            <div className="grayCard">
              <ul className="dotList">
                <li>
                  <div className="left">
                    <p>수집일에 PC가 종료되거나 절전 상태인 경우 수집이 제한됩니다.</p>
                  </div>
                </li>
                <li>
                  <div className="left">
                    <p>수집 시간은 익일 <span className="pointColor">06시 ~ 24시</span>로 자동 설정됩니다. (홈택스 점검으로 23시 59분까지 수집 후 종료됩니다.)</p>
                  </div>
                </li>
                <li>
                  <div className="left">
                    <p>
                      부가세앱 홈택스 통합자료 조회메뉴에서 조회하는 전체 데이터를 자동 수집 합니다.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
        {/* 2024-11-27 */}
        <div className="toggleArea">
          <div className="listTitArea">
            <div className="left">
              <strong className="listTit">세금계산서 합계표 조회 항목 선택</strong>
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
                <input type="checkbox" id="monthTally" />
                <label htmlFor="monthTally"> 세금계산서 월 별 집계 포함</label>
              </div>
            </li>
            <li>
              <div className="checkBox">
                <input type="checkbox" id="statement" />
                <label htmlFor="statement"> 세금계산서 명세서(PDF) 포함</label>
              </div>
            </li>
            <li>
              <div className="checkBox">
                <input type="checkbox" id="salesClient" />
                <label htmlFor="salesClient">
                  세금계산서 매출/매입처별 명세 포함
                  <p className="pointColor mgt8">※ 수집 시간이 다소 소요될 수 있습니다.</p>
                </label> 
              </div>
            </li>
          </ul>
        </div>
        {/* //2024-11-27 */}
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

export default CheckVat2;
