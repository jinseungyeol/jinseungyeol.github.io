import { ReactNode } from 'react';

type TitleLineProps = {
  title: string;
  children?: ReactNode;
};

export default function TitleLine(props: TitleLineProps) {
  return (
    <div className="listTitArea">
      <div className="left">
        <strong className="listTit">{props.title}</strong>
      </div>
      <div className="right">
        {props.children}
      </div>
    </div>
  )
}
