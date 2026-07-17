import { useMemo } from 'react';

type DaySelectBoxProps = {
  selected: number[];
  disabled?: number[];
  onSelect?: (day: number) => void;
}

const getDayRange = () => [...Array.from<number>({ length: 31 }).fill(1).map((v, i) => v + i), "말"]; // 2024-11-05

export default function DaySelectBox(props: DaySelectBoxProps) {
  const range = useMemo(() => getDayRange(), []);

  return (
    <div className="grayCard">
      <div className="calGrid">
        {range.map((day) => {
          const isNumber = typeof day === 'number'; // 2024-11-05

          return (
            <button
              // 2024-11-05
              className={`day ${isNumber && props.selected.includes(day) ? 'active' : ''}`}
              key={day}
              disabled={isNumber && props.disabled?.includes(day)}
              onClick={() => isNumber && props.onSelect?.(day)}
              // 2024-11-05
            >{day}</button>
          )
        }
          )}
      </div>
    </div>
  )
}
