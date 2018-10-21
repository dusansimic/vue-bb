<template>
	<div>
		<b-container>
			<b-row>
				<b-col/>
				<b-col xl=2 lg=2 md=3>
					<img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Profile" width="150px" height="150px"/>
					<p><small><a :href="`#/profile/${username}`">/profile/{{ username }}</a></small></p>
				</b-col>
				<b-col xl=8 lg=8 md=6>
					<h1>{{ displayName }}</h1>
					<p>Software developer and engineer.</p>
					<div v-if="isMyUser">
						<b-button type=button variant=secondary to="/profile/update">Edit profile</b-button>
					</div>
				</b-col>
				<b-col/>
			</b-row>
		</b-container>
	</div>
</template>

<script>
export default {
	name: 'Profile',
	props: {
		username: String,
		displayName: String
	},
	computed: {
		isMyUser () {
			if (window.localStorage.getItem('loggedIn')) {
				return window.localStorage.getItem('username') === this.username
			}
			return false
		}
	}
}
</script>
