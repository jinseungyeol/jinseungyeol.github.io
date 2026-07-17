import IconInfo from "../assets/images/ico_info_blue.svg";
import IconError from "../assets/images/ico_info_red.svg";
import IconImport from "../assets/images/ico_info_yellow.svg";

interface IToastProps {
  type: string;
  text: string;
}

const Toast = ({ type, text }: IToastProps) => {
  return (
    <div className="toast">
      <div className="inner">
        {type === "info" ? <img src={IconInfo} /> : null}
        {type === "import" ? <img src={IconImport} /> : null}
        {type === "error" ? <img src={IconError} /> : null}
        <p className="toastMsg">{text}</p>
      </div>
    </div>
  );
};

export default Toast;
