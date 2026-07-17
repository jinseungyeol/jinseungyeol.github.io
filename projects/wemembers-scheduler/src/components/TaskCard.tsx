import { ReactNode } from 'react';

type TaskCardProps = {
  icon: string;
  content: string;
  children?: ReactNode;
}

export default function TaskCard(props: TaskCardProps) {
  return (
    <div className="whiteCard">
      <div className="name">
        <img src={props.icon} alt="업무 로고" />
        <span>{props.content}</span>
      </div>
      <div className="buttonArea">
        {props.children}
      </div>
    </div>
  )
}
