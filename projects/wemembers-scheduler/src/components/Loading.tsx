import React from "react";
import { SyncLoader } from "react-spinners";

interface ILoadingProps {
  children?: React.ReactNode;
}

const Loading = ({ children }: ILoadingProps) => {
  return (
    <div className="popWrap loading">
      <div className="dim"></div>
      <div className="loadingInner">
        <SyncLoader margin={3} size={10} color="#fff" />
        <div className="loadingTxt">{children}</div>
      </div>
    </div>
  );
};

export default Loading;
