<template>
<div id="app">
	<textarea v-model="content" rows="6"/>
	<discord-messages>
		<discord-message author="Brussell" :avatarUrl="brussellAvatar" roleColor="#7886d7"
			:content="firstContent" :timestamp="firstTime" />
		<discord-message :content="content" />
	</discord-messages>
</div>
</template>

<script>
import moment from 'moment';

export default {
	name: 'app',
	data() {
		return {
			content: 'Type your message here to see it previewed live',
			brussellAvatar: 'https://cdn.discordapp.com/avatars/95286900801146880/11647bb57691f273711d203552c01561.png?size=128',
			firstContent: 'This is a demo of my new Discord messages library for Vue.\nThis library is powered by **discord-markdown**\nhttps://github.com/brussell98/discord-markdown',
			firstTime: moment().subtract(4, 'days').toDate()
		}
	}
};
</script>

<style lang="sass">
#app
	margin: 80px auto
	max-width: 720px
	textarea
		margin-bottom: 40px
		width: 100%

</style>
