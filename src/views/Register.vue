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
								v-model=registrationData.username
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
								v-model=registrationData.password
								required
								placeholder="Enter your password"/>
						</b-form-group>

						<b-form-group
							id=repeatPasswordInputGroup
							label="Repeat password:"
							label-for=repeatPasswordInput
							description="Enter your password again">
							<b-form-input
								id=repeatPasswordInput
								type=password
								v-model=registrationData.repeatedPassword
								required
								placeholder="Enter your password again"
								:state="registrationData.repeatedPasswordInputState"/>
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
import config from '../config'

export default {
	name: 'Register',
	data () {
		return {
			registrationData: {
				username: '',
				password: '',
				passwordInputState: null,
				repeatedPassword: '',
				repeatedPasswordInputState: null
			}
		}
	},
	methods: {
		onSubmit (e) {
			(async () => {
				this.registrationData.repeatedPasswordInputState = this.registrationData.password === this.registrationData.repeatedPassword

				const {data} = await axios.post(`${config.serverUrl}/api/register`, {
					token: 'token'
				})

				console.log(data)
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
