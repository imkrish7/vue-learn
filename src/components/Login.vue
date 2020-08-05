<template>
	<div class="wrapper">
		<form class="form" @submit.prevent="getLogedin()">
			<h1>Login</h1>
			<div class="inputWrapper">
				<input class="input" type="text" v-model="email" />
			</div>
			<div class="inputWrapper">
				<input class="input" type="password" v-model="password" />
			</div>
			<div class="btnWrapper">
				<button class="btn">Login</button>
			</div>
		</form>
		<div class="option">
			<p>
				Don't have an account?
				<router-link to="/signup">Signup</router-link>
			</p>
		</div>
	</div>
</template>
<script>
import { mapState } from 'vuex';
export default {
	name: 'Login',
	computed: mapState(['logedin']),
	data() {
		return {
			email: '',
			password: '',
		};
	},
	methods: {
		getLogedin() {
			const params = {
				email: this.email,
				password: this.password,
			};
			this.$store.dispatch('getLogedin', params).then((data) => {
				if (data.data.success) {
					this.$router.push('/helloworld1');
				}
			});
		},
	},

	updated: function() {
		console.log('krishna');
		if (this.logedin) {
			console.log(this.$router);
		} else {
			console.log(this.$router);
		}
	},

	watch: {},
};
</script>
<style scoped>
.wrapper {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.form {
	display: flex;
	flex-direction: column;
}
.inputWrapper {
	width: 100%;
	margin: 0.8rem 0rem;
}

h1 {
	display: flex;
	justify-content: flex-start;
	font-size: 2rem;
}
.input {
	width: 100%;
	padding: 0.5rem;
	font-size: 1.3rem;
	border: none;
	box-shadow: 0px 2px 0px 0px #ccc;
}

.btnWrapper {
	display: flex;
	justify-content: flex-start;
}

.btn {
	border: none;
	padding: 0.5rem 1rem;
	background-color: #54b983;
	color: #fff;
	font-weight: 400;
	font-size: 1.2rem;
	box-shadow: 0px 0px 4px 2px #ccc;
}
.option {
	display: flex;
	justify-content: flex-start;
	margin: 1rem 0rem;
}

.option p {
	font-size: 1rem;
}
</style>
