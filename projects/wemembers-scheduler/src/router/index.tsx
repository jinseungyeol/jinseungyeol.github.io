import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import HomeAddTask from "../pages/HomeAddTask";
import HomeBusiAcc from "../pages/HomeBusiAcc";
import HomeBusiCard from "../pages/HomeBusiCard";
import HomeLocalTax from "../pages/HomeLocalTax";
import HomeNaTax from "../pages/HomeNaTax";
import HomeNone from "../pages/HomeNone";
import HomeVatData from "../pages/HomeVatData";
import HomeVatPay from "../pages/HomeVatPay";
import Login from "../pages/Login";
import WorkSettingsPage from "../pages/WorkSettingsPage";
import CdrWorkSet from "../pages/CdrWorkSet";
import CheckBusiAcc from "../pages/CheckBusiAcc";
import CheckBusiCard from "../pages/CheckBusiCard";
import CheckFmsi from "../pages/CheckFmsi";
import CheckVat from "../pages/CheckVat";
import AutoCollect from "../pages/Lookup7";
import CheckVat2 from "../pages/Lookup8";
import AutoCollect2 from "../pages/Lookup9";
import Setting from "../pages/Setting";
import SettingNone from "../pages/SettingNone";
import WithholdingView from "../pages/WithholdingView";
import FourIns from "../pages/FourIns";
import OutputList from "../pages/OutputList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <OutputList />,
  },
  {
    path: "/output",
    element: <App />, // 여기서만 header, Lnb 포함된 레이아웃
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "home/addTask",
        element: <HomeAddTask />,
      },
      {
        path: "lookup/busiAcc",
        element: <HomeBusiAcc />,
      },
      {
        path: "lookup/busiAcc2",
        element: <CheckBusiAcc />,
      },
      {
        path: "lookup/busiCard",
        element: <HomeBusiCard />,
      },
      {
        path: "lookup/busiCard2",
        element: <CheckBusiCard />,
      },
      {
        path: "lookup/localTax",
        element: <HomeLocalTax />,
      },
      {
        path: "lookup/naTax",
        element: <HomeNaTax />,
      },
      {
        path: "home/none",
        element: <HomeNone />,
      },
      {
        path: "lookup/vatData",
        element: <HomeVatData />,
      },
      {
        path: "lookup/vatPay",
        element: <HomeVatPay />,
      },
      {
        path: "lookup/vatInquiry",
        element: <CheckVat />,
      },
      {
        path: "lookup/vatInquiryTerm",
        element: <CheckVat2 />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "setting/reservation",
        element: <WorkSettingsPage />,
      },
      {
        path: "setting/cdrWorkSet",
        element: <CdrWorkSet />,
      },
      {
        path: "lookup/fmsi",
        element: <CheckFmsi />,
      },
      {
        path: "clt/auto",
        element: <AutoCollect />,
      },
      {
        path: "clt/autoMonth",
        element: <AutoCollect2 />,
      },
      {
        path: "setting",
        element: <Setting />,
      },
      {
        path: "setting/none",
        element: <SettingNone />,
      },
      {
        path: "lookup/wht",
        element: <WithholdingView />,
      },
      {
        path: "fourIns",
        element: <FourIns />,
      },
    ],
  },
],
  {
    // vite.config.ts의 base와 항상 일치시키기 위해 import.meta.env.BASE_URL을 쓴다.
    // 하드코딩하면 배포 경로가 바뀔 때 한쪽만 어긋난다.
    basename: import.meta.env.BASE_URL,
  }
);

export default router;
