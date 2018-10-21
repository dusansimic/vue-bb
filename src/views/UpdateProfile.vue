<template>
	<div>
		<b-container>
			<b-form @submit=onSubmit @reset=onReset>
				<b-row>
					<b-col/>
					<b-col xl=2 lg=2 md=3>
						<img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Profile" width="150px" height="150px"/>
						<p><small><a :href="`#/profile/${username}`">/profile/{{ username }}</a></small></p>
					</b-col>
					<b-col xl=8 lg=8 md=6>
						<b-form-group
							id=usernameInputGroup
							label="Username:"
							label-for=usernameInput
							description="Input your username">
							<b-form-input
								id=usernameInput
								type=text
								v-model=updateData.username
								placeholder="Enter username"
								:state=usernameInputState></b-form-input>
						</b-form-group>

						<b-form-group
							id=displayNameInputGroup
							label="Display name:"
							label-for=displayNameInput
							description="Input your display name">
							<b-form-input
								id=displayNameInput
								type=text
								v-model=updateData.displayName
								placeholder="Enter display name"
								:state=displayNameInputState></b-form-input>
						</b-form-group>

						<b-form-group
							id=bioInputGroup
							label="Bio:"
							label-for=bioInput
							description="Write your bio">
							<b-form-textarea
								id=bioInput
								v-model=updateData.bio
								placeholder="Write your bio here"
								:rows="3"
								:max-rows="3"
								:state=bioInputState></b-form-textarea>
						</b-form-group>

						<b-button type=submit variant=primary class="buttonMargin">Save</b-button>
						<b-button type=reset variant=danger class="buttonMargin">Cancel</b-button>
					</b-col>
					<b-col/>
				</b-row>
			</b-form>
		</b-container>
	</div>
</template>

<script>
export default {
	name: 'UpdateProfile',
	props: {
		id: String,
		username: String,
		displayName: String,
		bio: String
	},
	watch: {
		'updateData.username': function (value) {
			this.usernameInputState = value === this.username ? null : true
		},
		'updateData.displayName': function (value) {
			console.log(value === this.displayName)
			this.displayNameInputState = value === this.displayName ? null : true
		},
		'updateData.bio': function (value) {
			this.bioInputState = value === this.bio || (value === '' && this.bio === undefined) ? null : true
		}
	},
	data () {
		return {
			updateData: {
				username: this.username,
				displayName: this.displayName,
				bio: this.bio
			},
			usernameInputState: null,
			displayNameInputState: null,
			bioInputState: null,
			usernameInputState: null
		}
	},
	methods: {
		onSubmit (e) {
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
