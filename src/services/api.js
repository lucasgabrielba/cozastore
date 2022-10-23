import axios from "axios";

export default axios.create({
  baseURL: `https://rest-api-cozastore.herokuapp.com/`,
});
