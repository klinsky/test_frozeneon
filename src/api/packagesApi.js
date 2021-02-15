import axios from "@/axios";


export default class PackagesApi {
  
  static async get(limit, page) {
    return await axios.get(`/v1/stats/packages?limit=${limit}&page=${page}`);
  }
  static async getByName(name) {
    return await axios.get(`/v1/package/npm/${name}/stats`);
  }
}