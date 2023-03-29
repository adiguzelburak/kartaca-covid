import moment from "moment/moment";
import cn from "../../helpers/cn";
import { Link } from "react-router-dom";
import { MyRouter } from "../router";

function Card({ title, value, className }) {
  console.log(value)
  return (
    <div className={cn("px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6", className && className)}>
      <dt className="text-sm font-medium truncate">{title}</dt>
      <dd className="mt-1 text-3xl font-semibold">{value !== undefined ? value : "-"}</dd>
    </div>
  )
}

export default function Stats({ data, country }) {
  function timeFormat(date) {
    const formattedDate = moment(date).format('DD/MM/YYYY HH:mm');
    return formattedDate;
  }


  return (
    <div className="my-10">
      <div className="flex items-center justify-between mb-10">
        <Link to={MyRouter.HOME}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </Link>
        <div className="text-5xl font-bold text-center">{country}</div>
        <div></div>
      </div>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
        <Card title={"Death"} value={data?.deaths} className={"bg-red-200 text-red-800"} />
        <Card title={"Confirmed"} value={data?.confirmed} className={"bg-blue-200 text-blue-800"} />
        <Card title={"Recovered"} value={data?.recovered !== null ? data?.recovered : "Unknown"} className={"bg-green-200 text-green-800"} />
        <Card title={"Last Reported"} value={timeFormat(data?.lastReported)} className={"bg-yellow-200 text-yellow-800"} />
        <Card title={"Last Checked"} value={timeFormat(data?.lastChecked)} className={"bg-purple-200 text-purple-800"} />
      </dl>
    </div >
  )
}
