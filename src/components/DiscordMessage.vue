<template>
<div class="discord-message">
	<div class="message">
		<div class="header">
			<div class="avatar-wrapper">
				<div class="avatar" :style="{ backgroundImage: `url(${avatarSrc})` }"></div>
			</div>
			<h2 class="meta">
				<span>
					<span class="username" :style="{ color: roleColor }">{{ author }}</span>
				</span>
				<time class="timestamp" :datetime="timestamp.valueOf()">{{ time }}</time>
			</h2>
		</div>
		<div class="content">
			<div class="container">
				<!-- React and options button -->
				<div :class="['markup', mdStyles.markdown]" v-html="mdContent"></div>
			</div>
		</div>
	</div>
</div>
</template>

<script>
import { toHTML } from 'discord-markdown';
import moment from 'moment';

export default {
	name: 'DiscordMessage',
	props: {
		author: {
			type: String,
			default: 'User'
		},
		avatarUrl: String,
		content: String,
		bot: Boolean,
		roleColor: {
			default: '#fff',
			validator(value) {
				if (typeof value === 'string')
					return /^#[0-9A-F]{3,6}$/i.test(value);
				if (typeof value === 'number')
					return value >= 0 && value <= 16777215;

				return false;
			}
		},
		timestamp: {
			type: Date,
			default() {
				return new Date();
			}
		},
		embeds: Object
	},
	data() {
		return {
			avatarSrc: ''
		};
	},
	computed: {
		color() {
			return (typeof this.roleColor === 'string') ? this.roleColor : '#' + this.roleColor.toString(16);
		},
		mdContent() {
			return toHTML(this.content.trim(), { cssModuleNames: this.mdStyles });
		},
		time() {
			return moment(this.timestamp).calendar();
		}
	},
	created() {
		this.avatarSrc = this.avatarUrl || require('../assets/avatars/blue.png');
	}
};
</script>

<style lang="sass" scoped>
@import '../assets/font.sass';

.discord-message
	background-color: #36393f
	font-family: 'Roboto', sans-serif
	overflow: hidden
	padding: 20px 0
	box-sizing: border-box
	line-height: 1
	user-select: text
	word-wrap: break-word
	.message
		margin-bottom: .2em
		.header
			display: flex
			align-content: normal
			align-items: flex-start
			height: 1.3em
			.avatar-wrapper
				cursor: pointer
				margin: -2px 20px 20px
				opacity: 1
				transition: opacity .2s ease
				height: 40px
				width: 40px
				border-radius: 50%
				flex-shrink: 0
				position: relative
				&:hover
					opacity: .8
				.avatar
					height: 40px
					width: 40px
					border-radius: 50%
					background-clip: padding-box
					background-position: 50%
					background-size: 100%
			.meta
				color: hsla(0, 0%, 100%, .2)
				white-space: nowrap
				font-size: 100%
				font-weight: 400
				margin: 0
				padding: 0
				.username
					color: #fff
					cursor: pointer
					font-size: 1rem
					font-weight: 500
					letter-spacing: 0
				.timestamp
					color: hsla(0, 0%, 100%, .2)
					font-size: .75rem
					font-weight: 400
					letter-spacing: 0
					margin-left: .3rem
		.content
			margin-left: 80px
			padding-right: 10px
			.container
				user-select: text
				.markup
					color: #dcddde
					font-size: 0.9375rem
					line-height: 1.3
					user-select: text
					white-space: pre-wrap
					word-wrap: break-word

</style>

<style lang="sass" module="mdStyles">
.markdown
	strong
		font-weight: 700
	a
		color: #0096cf
		cursor: pointer
		direction: ltr
		text-decoration: none
		transition: .05s
		unicode-bidi: bidi-override
		word-break: break-word
		&:hover
			text-decoration: underline
	code
		background: #2f3136
		font-size: .875rem
		line-height: 1rem
		text-indent: 0
		&:not(.hljs)
			border: none
			border-radius: 3px
			font-family: Consolas, Liberation Mono, Menlo, Courier, monospace
			font-size: 85%
			height: auto
			margin: -.2em 0
			padding: .2em 4px
			width: auto

	pre
		background: #2f3136
		border-color: rgba(32,34,37,.3)
		border-radius: 5px
		border-style: solid
		border-width: 2px
		box-sizing: border-box
		font-family: Consolas, Liberation Mono, Menlo, Courier, monospace
		font-size: 14px // .75rem
		margin-top: 6px
		max-width: 90%
		padding: 0
		white-space: pre-wrap

	// Orginal Style from ethanschoonover.com/solarized (c) Jeremy Hull <sourdrums@gmail.com>
	.hljs
		display: block
		overflow-x: auto
		padding: 0.5em
		color: #839496

	.hljs-comment,
	.hljs-quote
		color: #586e75

	/* Solarized Green */
	.hljs-keyword,
	.hljs-selector-tag,
	.hljs-addition
		color: #859900

	/* Solarized Cyan */
	.hljs-number,
	.hljs-string,
	.hljs-meta .hljs-meta-string,
	.hljs-literal,
	.hljs-doctag,
	.hljs-regexp
		color: #2aa198

	/* Solarized Blue */
	.hljs-title,
	.hljs-section,
	.hljs-name,
	.hljs-selector-id,
	.hljs-selector-class
		color: #268bd2

	/* Solarized Yellow */
	.hljs-attribute,
	.hljs-attr,
	.hljs-variable,
	.hljs-template-variable,
	.hljs-class .hljs-title,
	.hljs-type
		color: #b58900

	/* Solarized Orange */
	.hljs-symbol,
	.hljs-bullet,
	.hljs-subst,
	.hljs-meta,
	.hljs-meta .hljs-keyword,
	.hljs-selector-attr,
	.hljs-selector-pseudo,
	.hljs-link
		color: #cb4b16

	/* Solarized Red */
	.hljs-built_in,
	.hljs-deletion
		color: #dc322f

	.hljs-formula
		background: #073642

	.hljs-emphasis
		font-style: italic

	.hljs-strong
		font-weight: bold
</style>
