import axios from "axios";

const options = {
  headers: {
    "X-RapidAPI-Key": "9bdbb81d18msh2460061d42a009cp1e2d94jsnc01b9972f90a",
    "X-RapidAPI-Host": "covid-19-coronavirus-statistics.p.rapidapi.com",
  },
};

const instance = axios.create(options);

export default instance;
