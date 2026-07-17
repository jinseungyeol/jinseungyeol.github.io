import HeaderTitle from "../components/HeaderTitle";
import IconTsDown from '../assets/images/ico_ts_down.svg';

// 홈
const HomeNone = () => {
  return (
    <>
      {/* Title */}
      <HeaderTitle depth="one" title="홈" />
      {/* //Title */}
      {/* Contents */}
      <div className="homeWrapper"> {/* 2024-11-07 */}
        <ul className="boxList">
          <li className="ctTask">
            <div className="listTitArea">
              <div className="left">
                <strong className="listTit">오늘의 수집 업무</strong>
              </div>
              <div className="right">
                {/* selected 클래스 제거시 회색 텍스트 */}
                <button className="selectBtn selected">
                  <span>2024-07-26</span>
                  <img src={IconTsDown} className="tsDown" alt="아래화살표" />
                </button>
              </div>
            </div>
            <div className="grayCard">
              <div className="listNone">
                <p>예약수집 목록이 없습니다.</p>
              </div>
            </div>
          </li>
          <li className="ctResult">
            <div className="listTitArea">
              <div className="left">
                <strong className="listTit">수집결과 메세지</strong>
              </div>
            </div>
            <div className="grayCard">
              <div className="listNone">
                <p>실행 대기중입니다.</p>
              </div>
            </div>
          </li>
        </ul>
        {/* 2024-11-07 수집업무추가 버튼 삭제 */}
      </div>
      {/* //Contents */}
    </>
  );
};

export default HomeNone;
