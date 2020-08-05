<template>
	<div class="sidebar">
		<ul class="list">
			<li>
				<router-link to="/helloworld1">Hello World1!</router-link>
			</li>
			<li>
				<router-link to="/helloworld2">Hello World2!</router-link>
			</li>
			<li>
				<router-link to="/helloworld3">Hello World3!</router-link>
			</li>
			<li>
				<router-link to="/helloworld4">Hello World4!</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Sidebar',
};
</script>

<style scoped>
.sidebar {
	flex: 15%;
	height: calc(100vh - 50px);
	background-color: #54b983;
	display: flex;
	justify-content: center;
	box-shadow: 1px 16px 5px 0px #b9b9b9;
}
.list {
	width: 100%;
	display: flex;
	flex-direction: column;
}
li {
	margin: 0.8rem 0rem;
	font-size: 1rem;
	padding: 0.5rem;
}
li:hover {
	background-color: #2c3e5040;
}
li a {
	text-decoration: none;
	color: #34495e;
}
</style>
