<template>
	<div>
		<Post v-for="post in postData" :key="post.title" :postData="post"/>
	</div>
</template>

<script>
import axios from 'axios'
import Post from '@/components/Post'
import config from '../config'

export default {
	name: 'Board',
	components: {
		Post
	},
	data () {
		return {
			postData: [
				{
					author: 'dusansimic',
					title: 'First post',
					text: 'This is text of the first post',
					timestamp: new Date()
				},
				{
					author: 'nexy',
					title: 'Second post',
					text: 'This is text of the second post',
					timestamp: new Date()
				},
				{
					author: 'dusansimic',
					title: 'Third post',
					text: 'This is text of the third post',
					timestamp: new Date()
				}
			]
		}
	},
	methods: {
		async fetchPosts () {
			try {
				const response = await axios.get(`${config.serverUrl}/api/posts/full`)
				const {posts, authors} = response.data

				for (const i in posts) {
					posts[i] = Object.assign(posts[i], {author: authors[i]})
				}

				this.postData = posts
			} catch (e) {
				throw e
			}
		}
	},
	mounted () {
		this.fetchPosts()
	}
}
</script>
