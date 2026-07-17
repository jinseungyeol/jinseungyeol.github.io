import IconSchedule from '../assets/images/ico_schedule.svg';

// 예약 설정하기
const WorkSettingsPage = () => {
  return (
    <>
      <div className="WorkSettingsPage">
        <p className="visualTxt">위멤버스 데이터 자동 수집!</p>
        <div className="cdrVisualBox">
          <img src={IconSchedule} alt="캘린더" />
        </div>
        <p className="infoTxt">
          <span>4대보험, 홈택스 통합자료 조회등</span>
          <span>원하는 날짜에 데이터를 자동으로 수집합니다.</span>
        </p>
      </div>
      <div className="fixedBtm">
        <div className="btnWrap">
          <button className="activeBtn">
            <span>예약 설정하기</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default WorkSettingsPage;
