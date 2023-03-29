import moment from "moment/moment";
import cn from "../../helpers/cn";

function Card({ title, value, className }) {
  return (
    <div className={cn("px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6", className && className)}>
      <dt className="text-sm font-medium truncate">{title}</dt>
      <dd className="mt-1 text-3xl font-semibold">{value}</dd>
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
      <div className="text-2xl lg:text-5xl font-bold">{country}</div>
      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Card title={"Death"} value={data?.deaths} className={"bg-red-100 text-red-800"}/>
        <Card title={"Confirmed"} value={data?.confirmed} className={"bg-blue-100 text-blue-800"}/>
        <Card title={"Recovered"} value={data?.recovered !== null ? data?.recovered : "Unknown"} className={"bg-green-100 text-green-800"}/>
        <Card title={"Last Reported"} value={timeFormat(data?.lastReported)} className={"bg-yellow-100 text-yellow-800"}/>
        <Card title={"Last Checked"} value={timeFormat(data?.lastChecked)} className={"bg-pink-100 text-pink-800"}/>
      </dl>
    </div>
  )
}
