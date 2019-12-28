export default {
  namespaced: false,
  state: {
    token: localStorage.getItem('user-token') || '',
    status: '',
  },
  getters: {
    isAuthenticated: state => !!state.token,
    authStatus: state => state.status,
  },
  mutations: {

  }
};
