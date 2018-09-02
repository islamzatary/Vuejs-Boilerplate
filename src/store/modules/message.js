const ALERT = 'ALERT'
const SNACKBAR = 'SNACKBAR'
const CLOSE_SNACKBAR = 'CLOSE_SNACKBAR'

const state = {
  alert: {},
  snackbar: {}
};

const getters = {
  alert: state => state.alert,
  snackbar: state => state.snackbar
};

const mutations = {
  ALERT(state, alertPayload) {
    state.alert = {
      val: alertPayload.val || true,
      text: alertPayload.text || '',
      type: alertPayload.type || 'success',
      color: alertPayload.color,
      icon: alertPayload.icon,
      outline: alertPayload.outline || false,
      dismissible: alertPayload.dismissible || true,
      transition: alertPayload.transition || 'scale-transition'
    }
  },
  SNACKBAR(state, snackbarPayload) {
    const {color = 'green',
      timeout = 6000,
      visible = true,
      top = false,
      left = false,
      right = false,
      bottom = true,
      text = '',
      close = false} = snackbarPayload;
    state.snackbar = {
      color,
      timeout,
      visible,
      top,
      left,
      right,
      bottom,
      text,
      close
    }
  },
  CLOSE_SNACKBAR(state) {
    state.snackbar.visible = false;
  }
};

const actions = {
  alert({ commit }, options) {
    commit(ALERT, options);
  },
  snackbar({ commit }, options) {
    commit(SNACKBAR, options);
  },
  closeSnackbar({ commit }) {
    commit(CLOSE_SNACKBAR);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
