// pages/OutputList.tsx
import { Link } from "react-router-dom"
import styles from "../styles/intro.module.scss";

interface IOutputItemsProps {
  category?: string;
  path: string;
  name: string;
  remark?: string;
}

const outputItems: IOutputItemsProps[] = [
  {category:'home' ,path: "", name: "홈"},
  {path: "home/none", name: "홈", remark: "데이터 없을 때"},
  {path: "home/addTask", name: "수집업무 추가"},
  {category: 'lookup(조회)', path: "lookup/busiAcc", name: "사업용 계좌 조회", remark: "수집내용 안내"},
  {path: "lookup/busiAcc2", name: "사업용 계좌 조회", remark : "수집 일자 선택"},
  {path: "lookup/busiCard", name: "사업용 신용카드 조회", remark: "수집내용 안내"},
  {path: "lookup/busiCard2", name: "사업용 신용카드 조회", remark: "매월 수집 일자 선택"},
  {path: "lookup/wht", name: "원천세 납부서 조회"},
  {path: "lookup/localTax", name: "원천세 납부서(지방세)조회"},
  {path: "lookup/naTax", name: "원천세 납부서(국세)조회"},
  {path: "lookup/vatData", name: "부가세 통합자료 조회"},
  {path: "lookup/vatPay", name: "부가세 납부서 조회"},
  {path: "lookup/vatInquiry", name: "부가세 통합자료 조회", remark : "수집 일자 선택"},
  {path: "lookup/vatInquiryTerm", name: "부가세 통합자료 조회", remark: "수집 기간 선택"},
  {path: "lookup/fmsi", name: "4대보험 고지내역 조회"},
  {category:'login', path: "login", name: "로그인"},
  {category:'setting', path: "setting", name: "설정"},
  {path: "setting/none", name: "설정 등록하기"},
  {path: "setting/reservation", name: "예약설정하기"},
  {path: "setting/cdrWorkSet", name: "업무설정"},
  {category: "clt(수집)", path: "clt/auto", name: "자동수집"},
  {path: "clt/autoMonth", name: "매월 자동 및 일회성 수집"},
]

function OutputList() {
  return (
    <div className={"container "+ styles.output}>
      <div className="wrapper">
        <h1 className={styles.title}>HTML 마크업 페이지 (스케쥴러)</h1>
        <table className={styles.table}>
          <colgroup>
            <col width="33%"/>
            <col width="33%"/>
            <col width="33%"/>
          </colgroup>
          <thead>
            <tr>
              <th>구분</th>
              <th>제목</th>
              <th>비고</th>
            </tr>
          </thead>
          <tbody>
            {outputItems.map(item => (
              <tr key={item.path}>
                <td>{item.category}</td>
                <td>
                  <Link to={`/output/${item.path}`} target="_blank" className="text-blue-500 underline">
                    {item.name}
                  </Link>
                </td>
                <td>
                  <span>{item.remark}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OutputList