

const DateHalfYear = () => {
  return (
    <div className="calHalfYear">
      <div className="calHalfYearHeader">
        <button className="prevBtn"></button>
        <p className="year">2024</p>
        <button className="nextBtn"></button>
      </div>
      <div className="calHalfYearBody">
        {/* 활성화시 active */}
        <button>1기예정</button>
        <button>1기확정</button>
        <button>상반기</button>
        <button>2기예정</button>
        <button>2기확정</button>
        <button className="active">하반기</button>
        <button className="fullYear">상반기 + 하반기(연간조회)</button>
      </div>
      <div className="seletedDateWrap">
        {/* 선택 시 selected 클래스 추가 */}
        <div className="date">
          기간을 선택해주세요.
        </div>
      </div>
      <div className="btnWrap">
        <button className="grayBgBtn">취소</button>
        <button className="bodyActiveBtn">저장</button>
      </div>
    </div>
  );
};

export default DateHalfYear;
