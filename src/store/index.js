import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import lang from '@/store/modules/lang'
import message from '@/store/modules/message'
import loading from '@/store/modules/loading'
import layout from '@/store/modules/layout'

Vue.use(Vuex)

export const store = new Vuex.Store({
	plugins: [createPersistedState({
		paths: ['lang']
	})],
	modules: {
		message,
		lang,
		loading,
		layout
	}
})
