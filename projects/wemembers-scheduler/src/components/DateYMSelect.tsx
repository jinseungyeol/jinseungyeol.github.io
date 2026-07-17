
const DateYMSelect = () => {
  return (
    <div className="calHalfYear col4">
      <div className="calHalfYearHeader">
        <button className="prevBtn"></button> {/* 비활성화 시 disabled 2025-02-13 */}
        <p className="year">2024년</p>
        <button className="nextBtn disabled"></button> {/* 비활성화 시 disabled 2025-02-13 */}
      </div>
      <div className="calHalfYearBody">
        {/* 활성화시 active */}
        <button>1월</button>
        <button>2월</button>
        <button className="inActive">3월</button> {/* 2025-02-12 */}
        <button className="inActive">4월</button>
        <button className="inActive">5월</button>
        <button className="inActive">6월</button>
        <button className="inActive">7월</button>
        <button className="inActive">8월</button>
        <button className="inActive">9월</button>
        <button className="inActive">10월</button>
        <button className="inActive">11월</button>
        <button className="inActive">12월</button>
      </div>
      <div className="seletedDateWrap">
        {/* 선택 시 selected 클래스 추가 */}
        <div className="date">연월을 선택해주세요.</div>
      </div>
      <div className="btnWrap">
        <button className="grayBgBtn">취소</button>
        <button className="bodyActiveBtn">저장</button>
      </div>
    </div>
  );
};

export default DateYMSelect;
