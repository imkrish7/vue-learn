import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		logedin: localStorage.getItem('Authorization') ? true : false,
	},
	mutations: {
		setLogin(state) {
			state.logedin = true;
		},
		setLogout(state) {
			state.logedin = false;
		},
	},
	actions: {
		getLogedin({ commit }, params) {
			let url = 'http://127.0.0.1:3333/login';
			let requestObj = {
				url: url,
				method: 'POST',
				data: JSON.stringify(params),
				headers: { 'Content-Type': 'application/json' },
			};
			return axios(requestObj)
				.then(response => {
					// console.log(response);
					localStorage.setItem('Authorization', response.data.token.token);
					commit('setLogin');
					return response;
				})
				.catch(error => {
					console.log(error);
				});
		},
	},
});
