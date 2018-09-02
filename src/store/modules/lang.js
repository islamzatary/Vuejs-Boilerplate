import { i18n } from '@/i18n'
import { Apid } from '@/utilities/Api'
import { router } from '@/router'
import config from '@/config/config'

const SET_LANG = 'SET_LANG'
const CHANGE_LANG = 'CHANGE_LANG'

const state = {
  lang: config.lang.default
};

const getters = {
  lang: state => state.lang
};

const mutations = {
  SET_LANG (state, langPayload) {
    state.lang = langPayload;
  }
};

const actions = {
  setLang({ commit }, langPayload) {
    if (langPayload in i18n.messages) {
      i18n.locale = langPayload;
      commit(SET_LANG, langPayload);
    } else {
      Apid().get(`/static/${langPayload}.json`)
      .then(messages => {
        i18n.mergeLocaleMessage(langPayload, messages.data);
        i18n.locale = langPayload;
        commit(SET_LANG, langPayload);
      })
      .catch(err => {console.log(err);})
    }
  },
  changeLang({ commit }, langPayload) {
    const switchedPath = router.currentRoute.path.replace(state.lang, langPayload);
    router.push({path: switchedPath});
    state.lang = langPayload;
    commit(SET_LANG, langPayload);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}