import PackagesApi from "@/api/packagesApi";

const fetchPackages = async (context, { limit, page }) => {
  try {
    const { data } = await PackagesApi.get(limit, page);
    context.commit("savePackages", data);
    return null;
  } catch (error) {
    console.log(error);
    return error.response.data.message;
  }
}
const fetchPackageByName = async (context, name) => {
  try {
    const { data } = await PackagesApi.getByName(name);
    context.commit("savePackageInfo", { data: data, name: name });
    return null;
  } catch (error) {
    console.log(error);
    context.commit("clearPackageInfo");
    return error.response.data.message;
  }
}

export default {
  fetchPackages,
  fetchPackageByName
};
