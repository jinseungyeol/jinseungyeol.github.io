import IconLogo from '../assets/images/logo_wemembers.svg';

// 로그인
const Login = () => {
  return (
    <>
      <div className="loginInfo">
        <img src={IconLogo} alt="위멤버스로고" />
        <div className="grayCard">Wemembers 계정으로 로그인</div>
        <p>
          <span>PC가 실행된 상태에서 설정된 값에따라</span>
          <span>신고자료를 자동으로 수집 저장합니다.</span>
        </p>
      </div>
      <div className="loginInputBox">
        <div className="id">
          <label>아이디</label>
          <div className="inputWrap">
            {/* error클래스 추가시 에러 */}
            <input type="text" placeholder="아이디를 입력하세요." />
            <button className="deleteBtn"></button>
          </div>
        </div>
        <div className="password">
          <label>비밀번호</label>
          <div className="inputWrap">
            {/* error클래스 추가시 에러 */}
            <input
              type="password"
              className="error"
              placeholder="잘못된 비밀번호 입니다."
            />
            <button className="deleteBtn"></button>
          </div>
        </div>
      </div>
      <div className="fixedBtm">
        <div className="btnWrap">
          <button className="activeBtn">
            <span>로그인</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
