<template>
	<div>
		<b-container>
			<b-row>
				<b-col/>
				<b-col xl=6 lg=6>
					<b-form @submit=onSubmit @reset=onReset>
						<b-form-group
							id=usernameInputGroup
							label="Username:"
							label-for=usernameInput
							description="Enter your username">
							<b-form-input
								id=usernameInput
								type=text
								v-model=loginData.username
								required
								placeholder="Enter your username"/>
						</b-form-group>

						<b-form-group
							id=passwordInputGroup
							label="Password:"
							label-for=passwordInput
							description="Enter your password">
							<b-form-input
								id=passwordInput
								type=password
								v-model=loginData.password
								required
								placeholder="Enter your password"/>
						</b-form-group>

						<b-button type=submit variant=primary class="buttonMargin">Login</b-button>
						<b-button type=reset variant=danger to="/" class="buttonMargin">Cancel</b-button>
					</b-form>
				</b-col>
				<b-col/>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import axios from 'axios'
import sha256 from 'sha256'
import config from '../config'

export default {
	name: 'Login',
	data () {
		return {
			loginData: {
				username: '',
				password: ''
			}
		}
	},
	computed: {
		passwordHash () {
			return sha256(this.loginData.password)
		}
	},
	methods: {
		onSubmit (e) {
			(async () => {
				try {
					const {data} = await axios.post(`${config.serverUrl}/api/user/auth`, {
						username: this.loginData.username,
						password: this.passwordHash.toUpperCase()
					})

					window.localStorage.setItem('loggedIn', true)
					window.localStorage.setItem('username', this.loginData.username)
					window.localStorage.setItem('token', data.token)
					window.localStorage.setItem('displayName', data.userData.displayName)
					window.localStorage.setItem('email', data.userData.email)
					window.localStorage.setItem('id', data.userData.id)
					// this.$store.commit('login')
					// this.$store.dispatch('addUserData', {
					// 	username: this.loginData.username,
					// 	token: data.token
					// })

					this.$router.push({path: '/'})
					location.reload()
				} catch (e) {
					console.error(e.message)
				}
			})()

			e.preventDefault()
		},
		onReset (e) {
			e.preventDefault()
		}
	}
}
</script>

<style>
.buttonMargin {
	margin: 2px;
}
</style>
