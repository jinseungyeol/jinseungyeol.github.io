import { forwardRef } from "react";
import { ko } from "date-fns/locale/ko";
import ReactDatePicker from "react-datepicker";
import IconTsDown from "../assets/images/ico_ts_down.svg";

type CustomInputProps = {
  value?: string;
  onClick?: () => void;
};

type DatePickerProps = {
  value: Date;
  maxDate?: Date;
  onChange: (date: Date) => void;
};

const CustomInput = forwardRef<HTMLButtonElement, CustomInputProps>(
  (props, ref) => (
    <button className="selectBtn selected" ref={ref} onClick={props.onClick}>
      <span>{props.value}</span>
      <img src={IconTsDown} className="tsDown" alt="아래화살표" />
    </button>
  )
);
CustomInput.displayName = "CustomInput";

export default function DatePicker(props: DatePickerProps) {
  return (
    <>
      <ReactDatePicker
        customInput={<CustomInput />}
        dateFormat="yyyy-MM-dd"
        dateFormatCalendar="yyyy년 LLLL"
        locale={ko}
        maxDate={props.maxDate}
        selected={props.value}
        popperPlacement="bottom-end"
        onChange={(date) => props.onChange(date ?? new Date())}
      >
        <div className="seletedDateWrap">
          {/* 선택 시 selected 클래스 */}
          <div className="date selected">시작 : 2024년 7월 20일 </div>
          <div className="date">종료일을 선택해주세요</div>
        </div>
        <div className="btnWrap">
          <button className="grayBgBtn">취소</button>
          <button className="bodyActiveBtn">저장</button>
        </div>
      </ReactDatePicker>
    </>
  );
}
