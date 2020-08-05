<template>
	<div id="app">
		<Header></Header>

		<main>
			<Sidebar v-if="logedin" />
			<div class="main">
				<div class="logoWrapper">
					<img alt="Vue logo" src="./assets/logo.png" />
				</div>
				<router-view></router-view>
			</div>
		</main>
	</div>
</template>

<script>
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { mapState } from 'vuex';
export default {
	name: 'App',
	computed: mapState(['logedin']),
	components: { Header, Sidebar },
};
</script>

<style>
* {
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
}
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	display: flex;
	flex-direction: column;
}
.logoWrapper {
	display: flex;
	justify-content: center;
}
main {
	width: 100%;
	display: flex;
}
.main {
	flex: 80%;
	margin: 1.5rem;
}
ul {
	list-style: none;
	display: inline-flex;
}
</style>
