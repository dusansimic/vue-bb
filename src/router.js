import Vue from 'vue'
import Router from 'vue-router'
// import store from './store'
import Home from './views/Home'
import About from './views/About'
import Login from './views/Login'
import Register from './views/Register'
import Write from './views/Write'
import Profile from './views/Profile'
import UpdateProfile from './views/UpdateProfile'
import Logout from './views/Logout'

Vue.use(Router)

function getProfileData () {
	// return store.state.userData
	return {
		username: window.localStorage.getItem('username'),
		displayName: window.localStorage.getItem('displayName')
	}
}

function getUpdateProfileData () {
	return {
		id: window.localStorage.getItem('id'),
		username: window.localStorage.getItem('username'),
		displayName: window.localStorage.getItem('displayName')
	}
}

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/about',
			name: 'about',
			component: About
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		},
		{
			path: '/register',
			name: 'register',
			component: Register
		},
		{
			path: '/write',
			name: 'write',
			component: Write
		},
		{
			path: '/profile',
			name: 'profile',
			component: Profile,
			props: getProfileData
		},
		{
			path: '/profile/update',
			name: 'updateprofile',
			component: UpdateProfile,
			props: getUpdateProfileData
		},
		{
			path: '/logout',
			name: 'logout',
			component: Logout
		}
	]
})
