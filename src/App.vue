<template>
	<div id="app">
		<div id=navbar>
			<b-navbar toggleable=md type=light variant=white>
				<b-navbar-toggle target=nav_collapse />

				<b-navbar-brand to="/" id=brandContainer>VueBB</b-navbar-brand>

				<b-collapse is-nav id=nav_collapse>
					<b-navbar-nav class="ml-auto">
						<b-nav-item to="/" exact>Home</b-nav-item>
						<b-nav-item to="/about" exact>About</b-nav-item>
						<b-nav-item-dropdown text="Profile" right>
							<div v-if="!isLoggedIn">
								<b-dropdown-item to="/login" exact>Login</b-dropdown-item>
								<b-dropdown-item to="/register" exact>Register</b-dropdown-item>
							</div>
							<div v-else>
								<b-dropdown-item to="/profile" exact>Profile</b-dropdown-item>
								<b-dropdown-item to="/write" exact>Write a post</b-dropdown-item>
								<b-dropdown-item to="/logout" exact>Logout</b-dropdown-item>
							</div>
						</b-nav-item-dropdown>
					</b-navbar-nav>
				</b-collapse>
			</b-navbar>
		</div>

		<router-view/>
	</div>
</template>

<script>
export default {
	name: 'app',
	computed: {
		isLoggedIn () {
			// return this.$store.state.loggedIn
			return window.localStorage.getItem('loggedIn')
		}
	}
}
</script>

<style>
#app {
	/* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
#brandContainer {
	font-size: 26pt;
}
@media screen and (min-width: 767px) {
	#navbar {
		height: 150px;
		width: 60%;
		margin-left: 20%;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
}
</style>
