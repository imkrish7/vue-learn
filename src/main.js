import Vue from 'vue';
import App from './App.vue';
import router from './Routes';
import store from './store';
Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
	if (to.matched.some(record => record.meta.requiresAuth)) {
		if (!store.state.logedin) {
			next({ path: '/login' });
		} else {
			next();
		}
	} else {
		next();
	}
});

new Vue({
	render: h => h(App),
	store,
	router,
}).$mount('#app');
