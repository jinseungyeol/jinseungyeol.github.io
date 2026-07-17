import IconNps from '../assets/images/ico_nps.png';
import IconHtax from '../assets/images/ico_hometax.png';
import IconWhTax from '../assets/images/ico_whTax.png'; {/* 2024-12-23 */ }
import IconInfoGray from '../assets/images/ico_info_gray.svg'; 

// 자동 수집
const AutoCollect = () => {
  return (
    <>
      {/* Contents */}
      <div className="productWrapper">
        <div className="listTitArea">
          {/* 2024-12-23 */}
          <div className="qmWrap">
            <strong className="listTit">
              자동 수집 
            </strong>
            <div className="qm">
              <img src={IconInfoGray} alt="툴팁아이콘" />
              <div className="qmPop">
                <div className="qmPopInner">
                  <div className="tail"></div>
                  <div className="qmPopCont">
                    <div className="productWrap">
                      <div className="titArea">
                        <div className="left">
                          <p className="bulTit">
                            수집시간은 아래와 같이 설정됩니다.
                          </p>
                        </div>
                      </div>
                      <div className="tblType01">
                        <div className="tblCont">
                          <table>
                            <colgroup>
                              <col width="150px" />
                              <col width="120px" />
                            </colgroup>
                            <thead>
                              <tr>
                                <th>
                                  <p className="tit">구분</p>
                                </th>
                                <th className='taCenter'>
                                  <p className="tit">수집시간</p>
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>4대보험 고지내역</td>
                                <td className='pointColor taCenter'>01시 ~ 06시</td>
                              </tr>
                              <tr>
                                <td>원천세 납부서(위택스)</td>
                                <td className='pointColor taCenter'>01시 ~ 06시</td>
                              </tr>
                              <tr>
                                <td>원천세 납부서(홈택스)</td>
                                <td className='pointColor taCenter'>06시 ~ 09시</td>
                              </tr>
                              <tr>
                                <td>부가세 통합자료</td>
                                <td className='pointColor taCenter'>06시 ~ 24시</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <p className="grayInfoTxt">
                        홈택스 업무가 중복등록인 경우, 원천세납부서 수집 완료 후 부가세자료 수집이 시작됩니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* //2024-12-23 */}
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
                <button className="grayBdBtn">삭제하기</button>
              </div>
            </div>
          </li>
          {/* 2024-12-23 */}
          <li>
            <div className="whiteCard">
              <div className="name">
                <img src={IconWhTax} alt="원천세" />
                <span className="selectDate ellipsis">
                  원천세 납부서 조회
                  <span className="pointColor">
                      (<em title="1, 3, 7, 10, 14일">1, 3, 7, 10, 14일 </em>
                  </span>
                </span>
                <span className="pointColor">)</span>
              </div>
              <div className="buttonArea">
                <button className="grayBdBtn">삭제하기</button> {/* 비활성화 시 grayBgBtn 클래스로 교체 */}
              </div>
            </div>
          </li>
          {/* //2024-12-23 */}
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
                <span className="selectDate ellipsis">부가세 통합자료 조회</span>
              </div>
              <div className="buttonArea">
                <button className="bodyActiveBtn">등록하기</button>
              </div>
            </div>
          </li>
          {/* 2025-02-11 */}
          <li>
            <div className='whiteCard'>
              <div className="name">
                <img src={IconNps} alt="4대보험" />
                <span className="selectDate ellipsis">
                  4대보험 고지내역 조회
                  <span className="pointColor">
                      (<em>익일 01시</em>
                  </span>
                </span>
                <span className="pointColor">)</span>
              </div>
              <div className="buttonArea">
                <button className="grayBdBtn">삭제하기</button>
              </div>
            </div>
          </li>
          {/* //2025-02-11 */}
        </ul>
      </div>
      {/* //Contents */}
    </>
  );
};

export default AutoCollect;