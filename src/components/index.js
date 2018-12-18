import Vue from 'vue';
import DiscordMessage from './DiscordMessage.vue';
import DiscordMessages from './DiscordMessages.vue';

const Components = {
	DiscordMessage,
	DiscordMessages
};

Object.keys(Components).forEach(name => Vue.component(name, Components[name]));

export default Components;
