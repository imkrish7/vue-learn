<template>
	<header>
		<div class="logo">Logo</div>
		<button v-if="logedin" @click="logout()" class="btn">Logout</button>
	</header>
</template>

<script>
import { mapState } from 'vuex';
export default {
	name: 'Header',
	computed: mapState(['logedin']),
	methods: {
		logout: function() {
			localStorage.clear();
			this.$store.commit('setLogout');
			this.$router.push('/login');
		},
	},
};
</script>

<style scoped>
header {
	width: 100%;
	height: 3rem;
	background-color: #54b983;
	padding: 0rem 1rem;
	display: flex;
	justify-content: space-around;
	align-items: center;
	box-shadow: 0px 0px 9px 3px #b9b9b9;
}

.logo {
	color: #fff;
	font-size: 2rem;
	font-weight: 500;
}

.btn {
	background: transparent;
	border: 1px solid #34495e;
	color: #34495e;
	padding: 0.3rem;
}
</style>
