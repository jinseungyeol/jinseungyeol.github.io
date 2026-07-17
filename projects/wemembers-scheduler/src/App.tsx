import { Outlet } from "react-router-dom"
import AppHeader from "./components/AppHeader"
import Lnb from "./components/Lnb"

function App() {

  return (
    <div className="container">
      {/* <DateHalfYear/> */}
      {/* 로딩 */}
      {/* <Loading>
        <p>건강보험 인증서 검증 중입니다.</p>
        <p>잠시 기다려 주십시오.</p>
      </Loading> */}
      {/*<PopCerti /> /!* 인증서 선택팝업 *!/*/}
      <AppHeader />
      <div className="contents">
        <Lnb />
        <div className="wrapper">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default App
