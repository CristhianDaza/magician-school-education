export default {
  namespaced: true,
  state: {
    isError: null
  },
  mutations: {
    SET_ERROR (state, payload) {
      state.isError = payload
    }
  }
}
