const SET_LAYOUT = 'SET_LAYOUT'

const state = {
	layout: 'app-layout'
};

const getters = {
    layout (state) {
        return state.layout
    }
};

const mutations = {
    SET_LAYOUT (state, payload) {
        state.layout = payload
    }
};


export default {
  state,
  getters,
  mutations
}