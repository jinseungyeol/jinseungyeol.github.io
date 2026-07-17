import IconNps from '../assets/images/ico_nps.png';
import IconHtax from '../assets/images/ico_hometax.png';

// 자동 수집
const AutoCollect2 = () => {
  return (
    <>
      {/* Contents */}
      <div className="productWrapper">
        <div className="listTitArea">
          <strong className="listTit">매월 자동 수집</strong>
        </div>
        <ul className="addTaskList">
          <li>
            <div className="whiteCard">
              <div className="name">
                <img src={IconNps} alt="4대보험" />
                <span className="selectDate ellipsis">
                  4대보험 고지내역 조회
                  <span className="pointColor">
                      (<em title="21,22,23,24일">21,22,23,24일</em>
                  </span>
                </span>
                <span className="pointColor">)</span>
              </div>
              <div className="buttonArea">
                <button className="grayBdBtn">삭제하기</button>
              </div>
            </div>
          </li>
          <li>
            <div className="whiteCard">
              <div className="name">
                <img src={IconHtax} alt="부가세" />
                <span className="selectDate ellipsis">
                  부가세 통합자료 조회
                  <span className="pointColor">
                      (<em title="21,22일">21,22일</em>
                  </span>
                </span>
                <span className="pointColor">)</span>
              </div>
              <div className="buttonArea">
                <button className="bodyActiveBtn">등록하기</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="productWrapper">
        <div className="listTitArea">
          <strong className="listTit">일회성 수집</strong>
        </div>
        <ul className="addTaskList">
          <li>
            <div className="whiteCard">
              <div className="name">
                <img src={IconHtax} alt="부가세" />
                <span className="selectDate ellipsis">
                  부가세 통합자료 조회
                  <span className="pointColor">
                      (<em title="익일 6시">익일 6시</em>
                  </span>
                </span>
                <span className="pointColor">)</span>
              </div>
              <div className="buttonArea">
                <button className="grayBdBtn">삭제하기</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/* //Contents */}
    </>
  );
};

export default AutoCollect2;