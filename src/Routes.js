import Vue from 'vue';
import VueRouter from 'vue-router';
// component
import HelloWorld from './components/HelloWorld.vue';
import HelloWorld2 from './components/HelloWorld2.vue';
import HelloWorld3 from './components/HelloWorld3.vue';
import HelloWorld4 from './components/HelloWorld4.vue';
import Login from './components/Login.vue';
import Signup from './components/Signup.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: '/',
		redirect: '/login',
	},
	{
		path: '/helloworld1',
		component: HelloWorld,
		meta: { requiresAuth: true },
	},
	{
		path: '/signup',
		component: Signup,
	},
	{
		path: '/login',
		component: Login,
	},
	{
		path: '/helloworld2',
		component: HelloWorld2,
		meta: { requiresAuth: true },
	},
	{
		path: '/helloworld3',
		component: HelloWorld3,
		meta: { requiresAuth: true },
	},
	{
		path: '/helloworld4',
		component: HelloWorld4,
		meta: { requiresAuth: true },
	},
];

const router = new VueRouter({
	routes,
	mode: 'history',
});

export default router;
