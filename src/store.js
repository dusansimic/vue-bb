import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		loggedIn: false,
		userData: {}
	},
	mutations: {
		login (state) {
			state.loggedIn = true
		},
		logout (state) {
			state.loggedIn = false
			state.userData = {}
		}
	},
	actions: {
		addUserData ({state}, userData) {
			state.userData = userData
		}
	},
	plugins: [createPersistedState()]
})
