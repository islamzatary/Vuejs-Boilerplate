const SHOW_LOADING = 'SHOW_LOADING'
const HIDE_LOADING = 'HIDE_LOADING'
const TOGGLE_LOADING = 'TOGGLE_LOADING'

const state = {
	loading: false
};

const getters = {
  loading: state => state.loading,
};

const mutations = {
  TOGGLE_LOADING (state) {
    state.loading = !state.loading;
  },
  SHOW_LOADING (state) {
    state.loading = true;
  },
  HIDE_LOADING (state) {
    state.loading = false;
  }
};

const actions = {
  toggleLoading({ commit }) {
    commit(TOGGLE_LOADING);
  },
  showLoading({ commit }) {
    commit(SHOW_LOADING);
  },
  hideLoading({ commit }) {
    commit(HIDE_LOADING);
  },
};

export default {
  state,
  getters,
  mutations,
  actions
}