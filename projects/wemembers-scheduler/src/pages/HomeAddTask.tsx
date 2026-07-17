import HeaderTitle from "../components/HeaderTitle";
import TaskCard from '../components/TaskCard';
import IconHtax from '../assets/images/ico_hometax.png';
import IconWtax from '../assets/images/ico_whTax.png';
import IconTax from '../assets/images/ico_tax.png';

// 홈_수집업무 추가
const HomeAddTask = () => {
  return (
    <>
      {/* Title */}
      <HeaderTitle depth="more" title="수집업무 추가" />
      {/* //Title */}
      {/* Contents */}
      <div className="productWrapper">
        <ul className="addTaskList">
          <li>
            <TaskCard icon={IconHtax} content="부가세 통합자료 조회">
              <button className="bodyActiveBtn">등록하기</button>
            </TaskCard>
          </li>
          <li>
            <TaskCard icon={IconHtax} content="부가세 납부서 조회">
              <button className="bodyActiveBtn">등록하기</button>
            </TaskCard>
          </li>
          <li>
            <TaskCard icon={IconWtax} content="원천세 납부서(국세) 조회">
              <button className="bodyActiveBtn">등록하기</button>
            </TaskCard>
          </li>
          <li>
            <TaskCard icon={IconWtax} content="원천세 납부서(지방세) 조회">
              <button className="bodyActiveBtn">등록하기</button>
            </TaskCard>
          </li>
          <li>
            <TaskCard icon={IconTax} content="사업용 계좌 조회">
              <button className="bodyActiveBtn">등록하기</button>
            </TaskCard>
          </li>
          <li>
            <TaskCard icon={IconTax} content="사업용 신용카드 조회">
              <button className="bodyActiveBtn">등록하기</button>
            </TaskCard>
          </li>
        </ul>
      </div>
      {/* //Contents */}
    </>
  );
};

export default HomeAddTask;
