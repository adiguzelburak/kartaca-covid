import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { covidActions } from "../redux/covid/covidSlice";
import Stats from "../components/Stats";

export default function DetailPage() {
  const dispatch = useDispatch();
  const { country } = useParams();
  const countryData = useSelector(state => state.covid.statistic[country]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (country) {
      setIsLoading(true)
      dispatch(covidActions.getStatisticsRequest({ country, onSuccess: () => setIsLoading(false), onFailure: () => setIsLoading(false) }));
    }
  }, [country]);

  return (<div className="max-w-7xl px-2 lg:px-4 xl:px-6 mx-auto">
    {!countryData && isLoading ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-32 h-96 animate-spin flex justify-center items-center mx-auto">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
      : <Stats data={countryData} country={country} />}
  </div>);
}
