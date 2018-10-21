<template><div></div></template>

<script>
export default {
	name: 'Logout',
	mounted () {
		window.localStorage.removeItem('loggedIn')
		window.localStorage.removeItem('username')
		window.localStorage.removeItem('token')
		window.localStorage.removeItem('displayName')
		window.localStorage.removeItem('email')
		window.localStorage.removeItem('id')
		// this.$store.commit('logout')
		this.$router.push({path: '/'})
	}
}
</script>
