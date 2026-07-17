import HeaderTitle from "../components/HeaderTitle";
import Tooltip from "../components/Tooltip";
import IconInfo from '../assets/images/ico_info.svg';

// 환경설정
const Setting = () => {
  return (
    <>
      {/* Title */}
      <HeaderTitle depth="one" title="설정" />
      {/* //Title */}
      {/* Contents */}
      <ul className="boxList">
        <li>
          <div className="listTitArea">
            <div className="left">
              <strong className="listTit">건강보험 인증서</strong>
            </div>
            <div className="right">
              <button className="grayBdBtn">삭제하기</button>
            </div>
          </div>
          <div className="grayCard">
            <table className="tblInput">
              <colgroup>
                <col width="89px" />
                <col width="10px" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th>
                    인증서명 <span className="focusRed">(*)</span>
                  </th>
                  <td>:</td>
                  <td>
                    <div className="searchInput">
                      <span className="data ellipsis">cn=강경연세무회계사무소 인증서00998874343</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    만료일자 <span className="focusRed">(*)</span>
                  </th>
                  <td>:</td>
                  <td>
                    <span className="data">2024-22-08</span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="btnWrap">
              <button className="grayBgBtn">취소</button>
              <button className="bodyActiveBtn">저장</button>
            </div>
          </div>
        </li>
        {/* 2025-02-06 */}
        <li>
          <div className="listTitArea">
            <div className="left">
              <strong className="listTit">건강보험 비밀번호</strong>
            </div>
          </div>
          <div className="grayCard">
            <table className="tblInput">
              <colgroup>
                <col width="89px" />
                <col width="10px" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th>
                    비밀번호{" "}
                    <Tooltip
                      direction="bottom"
                      content={
                        <>
                          <p>
                            건강보험 EDI 나의사업장 <br />
                            조회 시 입력하는 비밀번호를 <br />
                            입력해주세요.
                          </p>
                          <p>
                            ※ 나의사업장 조회가 필요한 <br />
                            경우에만 등록!
                          </p>
                        </>
                      }
                    >
                      <img src={IconInfo} alt="툴팁아이콘"/>
                    </Tooltip>
                  </th>
                  <td>:</td>
                  <td>
                    {/* error 시 error 클래스 추가 */}
                    <input type="password" className="error" placeholder="비밀번호를 입력하세요!"/>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="btnWrap">
              <button className="grayBgBtn">취소</button>
              <button className="bodyActiveBtn">저장</button>
            </div>
          </div>
        </li>
        {/* //2025-02-06 */}
        <li>
          <div className="listTitArea">
            <div className="left">
              <strong className="listTit">국민연금 인증서</strong>
            </div>
            <div className="right">
              <button className="grayBdBtn">삭제하기</button>
            </div>
          </div>
          <div className="grayCard">
            <table className="tblInput">
              <colgroup>
                <col width="89px" />
                <col width="10px" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th>
                    인증서명 <span className="focusRed">(*)</span>
                  </th>
                  <td>:</td>
                  <td>
                    <div className="searchInput">
                      <input type="text" className="ellipsis" />
                      <button className="blackBgBtn">인증서 검색</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    만료일자 <span className="focusRed">(*)</span>
                  </th>
                  <td>:</td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <th>
                    관리번호{" "}
                    <Tooltip
                      direction="bottom"
                      content={<p>국민연금 EDI 로그인시,<br/>입력하는 국민연금 관리번호를<br/>입력해주세요.</p>}
                    >
                      <img src={IconInfo} alt="툴팁아이콘"/>
                    </Tooltip>
                  </th>
                  <td>:</td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="btnWrap">
              <button className="grayBgBtn">취소</button>
              <button className="bodyActiveBtn">저장</button>
            </div>
          </div>
        </li>
        <li>
          <div className="listTitArea">
            <div className="left">
              <strong className="listTit">근로복지공단 인증서</strong>
            </div>
            <div className="right">
              <button className="grayBdBtn">삭제하기</button>
            </div>
          </div>
          <div className="grayCard">
            <table className="tblInput">
              <colgroup>
                <col width="89px" />
                <col width="10px" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th>
                    인증서명 <span className="focusRed">(*)</span>
                  </th>
                  <td>:</td>
                  <td>
                    <div className="searchInput">
                      <input type="text" className="ellipsis" />
                      <button className="blackBgBtn">인증서 검색</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    만료일자 <span className="focusRed">(*)</span>
                  </th>
                  <td>:</td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <th>
                    사업자번호{" "}
                    <Tooltip
                      direction="bottom"
                      content={<p>근로복지공단 로그인시,<br/>입력하는 사업자 번호를<br/>입력해주세요.</p>}
                    >
                      <img src={IconInfo} alt="툴팁아이콘"/>
                    </Tooltip>
                  </th>
                  <td>:</td>
                  <td>
                    <input
                      type="text"
                      className="error"
                      placeholder="근로복지공단 사업자번호를 확인해주세요."
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="btnWrap">
              <button className="grayBgBtn">취소</button>
              <button className="bodyActiveBtn">저장</button>
            </div>
          </div>
        </li>
        <li>
          <div className="listTitArea">
            <div className="left">
              <strong className="listTit">홈택스 인증서</strong>
            </div>
            <div className="right">
              <button className="grayBdBtn">삭제하기</button>
            </div>
          </div>
          <div className="grayCard">
            <table className="tblInput">
              <colgroup>
                <col width="89px" />
                <col width="10px" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th>
                    인증서명 <span className="focusRed">(*)</span>
                  </th>
                  <td>:</td>
                  <td>
                    <div className="searchInput">
                      <span className="data ellipsis">cn=강경연세무회계사무소 인증서00998874343</span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    만료일자 <span className="focusRed">(*)</span>
                  </th>
                  <td>:</td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  {/* 2024-11-05 */}
                  <th>
                    관리번호{" "}
                    <Tooltip
                      direction="bottom"
                      content={<p>홈택스 로그인시,<br/>관리번호를 입력하는 인증서일 경우<br/>입력이 필요합니다.</p>}
                    >
                      <img src={IconInfo} alt="툴팁아이콘"/>
                    </Tooltip>
                  </th>
                  {/* //2024-11-05 */}
                  <td>:</td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <th>관리번호PW</th>
                  <td>:</td>
                  <td>
                    <input type="password" className="error" placeholder="비밀번호를 확인해주세요."/>
                  </td>
                </tr>
                <tr>
                  <th>부서사용자ID</th>
                  <td>:</td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
                <tr>
                  <th>부서사용자PW</th>
                  <td>:</td>
                  <td>
                    <input type="password" className="error" placeholder="비밀번호를 확인해주세요."/>
                  </td>
                </tr>
                <tr>
                  {/* 2024-11-05 */}
                  <th>등록일자</th>
                  <td>:</td>
                  <td>
                    <span className="data ellipsis">
                      <em>2024-07-22 11:22</em> /
                      <span title='김지혜(wetax1김지혜wetax1김지혜)'>김지혜(wetax1김지혜wetax1김지혜)</span>
                    </span>
                  </td>
                  {/* //2024-11-05 */}
                </tr>
              </tbody>
            </table>
            <div className="referTxt">
              <p>[ 부서사용자 계정 자동수집 권장사항 ]</p>
              <span>
                등록한 부서사용자 계정은 위멤버스 자동수집 전용으로
                권장드립니다.
              </span>
            </div>
            <div className="btnWrap">
              <button className="grayBgBtn">취소</button>
              <button className="bodyActiveBtn">저장</button>
            </div>
          </div>
        </li>
        <li>
          <div className="listTitArea">
            <div className="left">
              <strong className="listTit">위택스 인증서</strong>
            </div>
            <div className="right">
              <button className="grayBdBtn">삭제하기</button>
            </div>
          </div>
          <div className="grayCard">
            <table className="tblInput">
              <colgroup>
                <col width="89px" />
                <col width="10px" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th>
                    인증서명 <span className="focusRed">(*)</span>
                  </th>
                  <td>:</td>
                  <td>
                    <div className="searchInput">
                      <input type="text" className="ellipsis" />
                      <button className="blackBgBtn">인증서 검색</button>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th>
                    만료일자 <span className="focusRed">(*)</span>
                  </th>
                  <td>:</td>
                  <td>
                    <input type="text" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </li>
        <li>
          <div className="listTitArea">
            <div className="left">
              <strong className="listTit">위멤버스 계정</strong>
            </div>
            <div className="right">
              <button className="grayBdBtn">로그아웃</button>
            </div>
          </div>
          <div className="grayCard">
            <table className="tblInput">
              <colgroup>
                <col width="89px" />
                <col width="10px" />
                <col />
              </colgroup>
              <tbody>
                <tr>
                  <th>아이디</th>
                  <td>:</td>
                  <td>
                    <p className="data">wemembers90</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </li>
      </ul>
      {/* //Contents */}
    </>
  );
};

export default Setting;
