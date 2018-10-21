<template>
	<div>
		<b-container>
			<b-row>
				<b-col/>
				<b-col xl=6 lg=6>
					<b-form @submit=onSubmit>
						<b-form-group
							id=inputTitleGroup
							label="Title:"
							label-for=inputTitle
							description="Enter post title">
							<b-form-input
								id=inputTitle
								v-model=postData.title
								placeholder="Write post title"></b-form-input>
						</b-form-group>

						<b-form-group
							id=inputTextGroup
							label="Input text:"
							label-for=inputText
							description="Enter post text">
							<b-form-textarea
								id=inputText
								v-model=postData.text
								placeholder="Write some text to post"
								:rows="4"
								:max-rows="6"></b-form-textarea>
						</b-form-group>

						<b-form-group
							id=inputTagsGroup
							label="Tags:"
							label-for=inputTags
							description="Enter post tags">
							<b-form-input
								id=inputTags
								v-model=postData.tags
								placeholder="Write post tags"></b-form-input>
						</b-form-group>

						<b-button type=submit variant=primary class="buttonMargin">Post</b-button>
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
	name: 'Write',
	data () {
		return {
			postData: {
				title: '',
				text: '',
				tags: ''
			}
		}
	},
	methods: {
		async onSubmit (e) {
			e.preventDefault()
			this.publishPost()
		},
		async publishPost () {
			try {
				if (!window.localStorage.getItem('token')) {
					throw new Error('Token not found!')
				}

				const {data} = await axios.post(`${config.serverUrl}/api/posts`, {
					token: window.localStorage.getItem('token'),
					postData: Object.assign(this.postData, {_posterId: window.localStorage.getItem('id')})
				})

				console.log(data)
			} catch (e) {
				console.error(e)
			}
		}
	}
}
</script>

<style>
.viewTextArea {
	white-space: pre;
}
.buttonMargin {
	margin: 2px;
}
</style>
