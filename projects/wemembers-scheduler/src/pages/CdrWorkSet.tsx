import HeaderTitle from "../components/HeaderTitle";
import IconNps from '../assets/images/ico_nps.png';
import IconHtax from '../assets/images/ico_hometax.png';
import IconTax from '../assets/images/ico_tax.png';

// 업무설정
const CdrWorkSet = () => {
  return (
    <>
      {/* Title */}
      <HeaderTitle depth="one" title="업무설정" />
      {/* //Title */}
      {/* Contents */}
      <div className="productWrapper">
        <ul className="addTaskList">
          <li>
            <div className="whiteCard">
              <div className="name">
                <img src={IconNps} alt="4대보험" />
                <span>
                  4대보험 고지내역 조회
                  <span className="pointColor">(24일)</span>
                </span>
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
                <span>
                  부가세 통합자료 조회
                  <span className="pointColor">(1, 12, 24일)</span>
                </span>
              </div>
              <div className="buttonArea">
                <button className="grayBdBtn">삭제하기</button>
              </div>
            </div>
          </li>
          <li>
            <div className="whiteCard">
              <div className="name">
                <img src={IconTax} alt="사업용 계좌 조회" />
                <span>사업용 계좌 조회</span>
              </div>
              <div className="buttonArea">
                <button className="bodyActiveBtn">등록하기</button>
              </div>
            </div>
          </li>
          <li>
            <div className="whiteCard">
              <div className="name">
                <img
                  src={IconTax}
                  alt="사업용 신용카드 조회"
                />
                <span>사업용 신용카드 조회</span>
              </div>
              <div className="buttonArea">
                <button className="bodyActiveBtn">등록하기</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      {/* //Contents */}
    </>
  );
};

export default CdrWorkSet;
