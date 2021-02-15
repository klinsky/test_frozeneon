const getPackagesTable = (state) => state.packagesTable;
const isShowModal = (state) => state.modal;
const getModalInfo = (state) => state.modalInfo;
const getLoading = (state) => state.loading;

export default {
  getPackagesTable,
  isShowModal,
  getModalInfo,
  getLoading,
};
