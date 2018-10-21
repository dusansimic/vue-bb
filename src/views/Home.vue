<template>
	<div>
		<b-container>
			<b-row>
				<b-col/>
				<b-col xl=10 lg=10>
					<h1 class="d-none d-md-block d-lg-block d-xl-block">Bulletin Board</h1>
					<Board/>
				</b-col>
				<!-- <b-col xl=2 lg=2>
					<TimelineList/>
				</b-col> -->
				<b-col/>
			</b-row>
		</b-container>
	</div>
</template>

<script>
import Board from '@/components/Board'
import TimelineList from '@/components/TimelineList'

export default {
	name: 'Home',
	components: {
		Board,
		TimelineList
	}
}
</script>
