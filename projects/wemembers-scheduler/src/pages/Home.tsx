import Toast from "../components/Toast";
import HeaderTitle from "../components/HeaderTitle";
import DatePicker from '../components/DatePicker';
import { useState } from 'react';

// 홈
const Home = () => {
  const [logDate, setLogDate] = useState(new Date());

  return (
    <>
      {/* type= info, error, import로 분류 */}
      <Toast type="info" text="정보메세지입니다"></Toast>
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
                <DatePicker value={logDate} onChange={(date) => setLogDate(date)} />
              </div>
            </div>
            <div className="grayCard">
              <ul className="dotList">
                <li>
                  <div className="left">
                    <p>4대보험 고지내역 (2024년 07월)</p>
                  </div>
                  <div className="right">
                    <button className="grayBdBtn">수집종료</button>
                  </div>
                </li>
                <li>
                  <div className="left">
                    <p>4대보험 고지내역 (2024년 07월)</p>
                  </div>
                  <div className="right">
                    <p className="state focusRed">[ 수집실패 ]</p>
                  </div>
                </li>
                <li>
                  <div className="left">
                    <p>4대보험 고지내역 (2024년 07월)</p>
                  </div>
                  <div className="right">
                    <p className="state">(06시 ~ 24시)</p>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li className="ctResult">
            <div className="listTitArea">
              <div className="left">
                <strong className="listTit">수집결과 메세지</strong>
              </div>
            </div>
            <div className="grayCard">
              <ul className="dotList">
                <li>
                  <div className="left">
                    <p>
                      2024-07-26 14:06:25{" "}
                      <span className="fwb">고용/산재 보험 수집 완료</span>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="left">
                    <p>
                      2024-07-26 14:06:25{" "}
                      <span className="fwb">고용/산재 보험 수집 완료</span>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="left">
                    <p>
                      2024-07-26 14:06:25{" "}
                      <span className="fwb">고용/산재 보험 수집 완료</span>
                    </p>
                  </div>
                </li>
                <li>
                  <div className="left">
                    <p>
                      2024-07-26 14:06:25{" "}
                      <span className="fwb">고용/산재 보험 수집 완료</span>
                    </p>
                  </div>
                </li>
              </ul>
              {/* 2025-02-06 */}
              <div className="ctResultBox">
                <div className="item">
                  <ul className="dotList">
                    <li>
                      <div className="left">
                        <p>2024-12-13 01:01:25 4대보험 자료 수집에 실패하였습니다.</p>
                      </div>
                    </li>
                    <li>
                      <div className="left">
                        <p>사유 :</p>
                        <p>설정에 등록된 건강보험 비밀번호로 로그인 실패하였습니다.</p>
                        <p>설정에 등록된 비밀번호를 확인해 주세요. </p>
                        <p>서비스 문의 : 1670-1211 </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              {/* //2025-02-06 */}
              <div className="ctResultBox">
                <div className="item">
                  <strong>[ 부가세 APP 저장 결과 ]</strong>
                  <ul className="dotList">
                    <li>
                      <div className="left">
                        <p>
                          전체 : <span className="fwb">707건</span> | 정상 :{" "}
                          <span className="fwb">707건</span> | 오류 :{" "}
                          <span className="fwb">0건</span>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="item">
                  <strong>[ 부가세 수집 결과 ]</strong>
                  <ul className="dotList">
                    <li>
                      <div className="left">
                        <p>
                          전체 : <span className="fwb">707건</span> | 정상 :{" "}
                          <span className="fwb">707건</span> | 오류 :{" "}
                          <span className="fwb">0건</span>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="left">
                        <p>
                          2024-07-26 21:47:25{" "}
                          <span className="fwb">부가세 자료 수집 완료</span>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="left">
                        <p>
                          2024-07-26 06:01:25{" "}
                          <span className="fwb">부가세 자료 수집 시작</span>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* 2024-11-07 */}
                <div className="item">
                  <strong>4대보험 고지내역 (2024년 07월)</strong>
                  <ul className="dotList">
                    <li>
                      <div className="left">
                        {/* 2025-02-06 */}
                        <p>사유 :</p>
                        <p>PC가 종료되어 자동수집이 종료 및 실패하였습니다. </p>
                        {/* //2025-02-06 */}
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="item">
                  <strong>[4대보험 수집 결과]</strong>
                  <ul className="dotList">
                    <li>
                      <div className="left">
                        <p>
                          고용/산재보험 : <span className="fwb">707건</span> | 정상 :{" "}
                          <span className="fwb">707건</span> | 오류 :{" "}
                          <span className="fwb">0건</span> | 미수집 :{" "}
                          <span className="fwb">6건</span>
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="left">
                        <p>
                          2024-07-26 06:01:25{" "}
                          <span className="fwb">고용/산재보험 수집이 완료되었습니다.</span>
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                {/* //2024-11-07 */}
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

export default Home;
