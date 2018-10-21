<template>
	<div>
		<b-card
			class="mb-3"
			:title="postData.title"
			:sub-title="`by ${postData.author.displayName}&nbsp&nbsp&nbsp•&nbsp&nbsp&nbsp${getTimeFromTimestamp(postData.postTime)}`">
			<p class="card-text">{{ postData.text }}</p>
		</b-card>
	</div>
</template>

<script>
import moment from 'moment'

export default {
	name: 'Post',
	props: {
		postData: Object
	},
	methods: {
		getTimeFromTimestamp (timestamp) {
			// return moment(timestamp).format('MMMM Do YYYY, h:mm a')
			return moment(timestamp).calendar()
		}
	}
}
</script>

<style>
.card-text {
	white-space: pre;
}
</style>
