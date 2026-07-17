import { useState } from "react";
import { Link } from "react-router-dom";
import Tooltip from "./Tooltip";
import IconHome from "../assets/images/ico_home_white.svg";
import IconLookup from "../assets/images/ico_lookup_white.svg";
import IconSetting from "../assets/images/ico_settings_white.svg";

const Lnb = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <div className="lnbWrapper">
        <nav>
          <ul>
            <li
              className={activeIndex === 0 ? "active" : ""}
              onClick={() => handleClick(0)}
            >
              <Tooltip direction="right" content="홈">
                <Link to="/output">
                  <img src={IconHome} alt="홈" />
                </Link>
              </Tooltip>
            </li>
            <li
              className={activeIndex === 1 ? "active" : ""}
              onClick={() => handleClick(1)}
            >
              <Tooltip direction="right" content="업무 설정">
                <Link to="/output/setting/cdrWorkSet">
                  <img src={IconLookup} alt="업무 설정" />
                </Link>
              </Tooltip>
            </li>
            <li
              className={activeIndex === 2 ? "active" : ""}
              onClick={() => handleClick(2)}
            >
              <Tooltip direction="right" content="환경 설정">
                <Link to="/output/setting">
                  <img src={IconSetting} alt="환경 설정" />
                </Link>
              </Tooltip>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Lnb;
