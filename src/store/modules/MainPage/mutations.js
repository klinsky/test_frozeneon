import Vue from "vue";

const savePackages = (state,  data) => {
  Vue.set(state.packagesTable, "items", data)
}

const showModal = (state) => {
  Vue.set(state, "modal", !state.modal)
}

const toggleLoading = (state) => {
  Vue.set(state, "loading", !state.loading)
}

const clearPackageInfo = (state) => {
  Vue.set(state, "modalInfo", [])
}

const savePackageInfo = (state, { data, name }) => {
  const info = [
    { text: 'Name', value: name },
    { text: 'Rank', value: data.rank },
    { text: 'Total', value: data.total },
  ];
  Vue.set(state, "modalInfo", info)
}

export default {
    savePackages,
    showModal,
    toggleLoading,
    clearPackageInfo,
    savePackageInfo
};
