import React, {
  useState,
  useRef,
  useEffect,
  ReactNode,
  ReactElement,
} from "react";
import { createPortal } from 'react-dom';

// TooltipProps 인터페이스 정의
interface TooltipProps {
  children: ReactElement;
  content: ReactNode;
  direction: "top" | "bottom" | "left" | "right";
}

const Tooltip: React.FC<TooltipProps> = ({ children, content, direction }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState<React.CSSProperties>(
    {}
  );
  const [tooltipWidth, setTooltipWidth] = useState<number>(0);

  const hoverDomRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const calculateTooltipPosition = () => {
    if (hoverDomRef.current && tooltipRef.current) {
      const rect = hoverDomRef.current.getBoundingClientRect();
      const tooltipStyles: React.CSSProperties = {};

      switch (direction) {
        case "top":
          tooltipStyles.left = rect.left + rect.width / 2 - tooltipWidth / 2;
          tooltipStyles.top = rect.top - tooltipRef.current.offsetHeight - 10; // 여백 추가
          break;
        case "bottom":
          tooltipStyles.left = rect.left + rect.width / 2 - tooltipWidth / 2;
          tooltipStyles.top = rect.bottom + 10; // 여백 추가
          break;
        case "left":
          tooltipStyles.left = rect.left - tooltipWidth - 10; // 여백 추가
          tooltipStyles.top =
            rect.top + rect.height / 2 - tooltipRef.current.offsetHeight / 2;
          break;
        case "right":
          tooltipStyles.left = rect.right + 10; // 여백 추가
          tooltipStyles.top =
            rect.top + rect.height / 2 - tooltipRef.current.offsetHeight / 2;
          break;
        default:
          break;
      }

      setTooltipPosition(tooltipStyles);
    }
  };

  useEffect(() => {
    if (isHovered && tooltipRef.current) {
      setTooltipWidth(tooltipRef.current.offsetWidth);
      calculateTooltipPosition();
    }
  }, [isHovered, hoverDomRef.current]);

  useEffect(() => {
    // 마운트 시 툴팁 위치 재계산
    if (isHovered) {
      calculateTooltipPosition();
    }
  }, [tooltipWidth, direction]);

  // hoverDom에 onMouseEnter와 onMouseLeave 이벤트를 추가
  const hoverElement = React.cloneElement(
  children,
    {
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      ref: hoverDomRef,
    } as React.HTMLProps<HTMLElement>
  );

  const portalRoot = createPortal(
    <div className={`tooltip active ${direction}`} style={tooltipPosition} ref={tooltipRef}>
      {content}
    </div>,
    document.getElementById('root') as HTMLDivElement,
  );

  return (
    <>
      {hoverElement}
      {isHovered && portalRoot}
    </>
  );
};

export default Tooltip;
