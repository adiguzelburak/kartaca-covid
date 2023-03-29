import axios from "../../configs/axios";
// import axios from "axios";

const covidService = {
  getStatistics(country) {
    return axios.get(
      "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/total",
      {
        params: { country },
      }
    );
  },
};

export default covidService;
