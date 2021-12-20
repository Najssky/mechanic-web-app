import Vue from "vue";
import Vuex from "vuex";
import cookieHelper from "../helpers/cookieHelper";
import parseJwt from "../helpers/parseJwt";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		user: null,
	},
	getters: {
		user: (state) => state.user,
		isLogged: (state) => !!state.user,
		isAdmin: (state) => !!state.user && state.user.role === "Admin",
		isEmployee: (state) => !!state.user && state.user.role === "Employee",
		isUser: (state) => !!state.user && state.user.role === "User"
	},
	mutations: {
		storeUser(state, user) {
			state.user = user;
		},
		storeFullname(state, fullname) {
			state.user.Fullname = fullname;
		}
	},
	actions: {
		setSession({ commit }, token) {
			commit("storeUser", parseJwt(token));
			cookieHelper.setSessionCookie(token);
		},
		setFullName({ commit }, fullname) {
			commit("storeFullname", fullname);
		},
		restoreSession({ dispatch, state }) {
			if (cookieHelper.hasSessionCookie() && state.user === null) {
				dispatch("setSession", cookieHelper.getSessionCookie());
			}
		},
		destroySession({ commit }) {
			commit("storeUser", null);
			cookieHelper.deleteSessionCookie();
		}
	}
});
