import { useState } from "react";

const PopCerti = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="popWrap certi">
      <div className="popInner">
        <div className="popHeader">
          <div className="left">
            <h1>인증서 선택</h1>
          </div>
          <div className="right">
            <button className="popCloseBtn"></button>
          </div>
        </div>
        <div className="popCont">
          <div className="productWrap">
            <div className="titArea">
              <div className="left">
                <p className="bulTit">
                  4대보험에서 사용하는 인증서를 선택해주세요.
                </p>
              </div>
            </div>
            <div className="tblType01">
              <div className="tblHead">
                <table>
                  <colgroup>
                    <col width="43%" />
                    <col />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <th>
                        <p className="tit">인증서명</p>
                      </th>
                      <th>
                        <p className="tit">인증서 종류</p>
                      </th>
                      <th>
                        {/* up클래스 추가시 화살표 rotate */}
                        <button className="sortBtn">
                          <p className="tit">만료일자</p>
                        </button>
                      </th>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="tblCont">
                {/* 리스트가 있을때 */}
                <table>
                  <colgroup>
                    <col width="43%" />
                    <col />
                    <col />
                  </colgroup>
                  <tbody>
                    <tr>
                      <td>
                        <div className="radioWrap ellipsis">
                          <input
                            className="certiRadio"
                            id="name01"
                            name="certiName"
                            type="radio"
                          />
                          <label htmlFor="name01">
                            스타세무회계(29754)0003681201706134110000000
                          </label>
                        </div>
                      </td>
                      <td>전자세금융</td>
                      <td>2024-00-00</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="radioWrap ellipsis">
                          <input
                            className="certiRadio"
                            id="name02"
                            name="certiName"
                            type="radio"
                          />
                          <label htmlFor="name02">
                            이민기()000368120170613411000
                          </label>
                        </div>
                      </td>
                      <td>은행개인</td>
                      <td>2024-00-00</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="radioWrap ellipsis">
                          <input
                            className="certiRadio"
                            id="name03"
                            name="certiName"
                            type="radio"
                          />
                          <label htmlFor="name03">
                            강경연()000368120170613411000
                          </label>
                        </div>
                      </td>
                      <td>은행개인</td>
                      <td>2024-00-00</td>
                    </tr>
                    <tr>
                      <td>
                        <div className="radioWrap ellipsis">
                          <input
                            className="certiRadio"
                            id="name04"
                            name="certiName"
                            type="radio"
                          />
                          <label htmlFor="name04">
                            강경연세무회계사(25183)0003681201706134110000000
                          </label>
                        </div>
                      </td>
                      <td>전자세금융</td>
                      <td>2024-00-00</td>
                    </tr>
                    <tr></tr>
                    <tr></tr>
                    <tr></tr>
                  </tbody>
                </table>
                {/* //리스트가 있을때 */}
                {/* 리스트가 없을때 */}
                <div className="listNone">
                  <p>PC에 저장된 인증서가 없습니다.</p>
                </div>
                {/* //리스트가 없을때 */}
              </div>
            </div>
          </div>
          <div className="productWrap">
            <p className="bulTit">인증서 비밀번호</p>
            <div className="inputWrap">
              {/* error 클래스 추가시 에러 */}
              <input type="text" placeholder="암호는 대소문자를 구분합니다." />
              <button
                onClick={togglePassword}
                className={
                  //show 클래스로 분기처리
                  showPassword ? "passwordToggleBtn show" : "passwordToggleBtn"
                }
              ></button>
            </div>
          </div>
        </div>
        <div className="popBtnWrap">
          <div className="btnWrap">
            <button className="grayBgBtn">취소</button>
            <button className="bodyActiveBtn">저장</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopCerti;
