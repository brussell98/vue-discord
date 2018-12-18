<template>
<div class="discord-messages">
	<slot></slot>
</div>
</template>

<script>
export default {
	props: {
		compact: Boolean,
		light: Boolean
	}
};
</script>

<style lang="sass" scoped>
.discord-messages
	background-color: #36393f
	margin: 0
	overflow: hidden
	& > .discord-message
		border-bottom: 1px solid transparent
		margin: 0 20px
		&:not(:last-child)
			border-bottom-color: hsla(0, 0%, 100%, .04)

</style>

