import { shallowMount } from '@vue/test-utils';
import DiscordMessage from '@/components/DiscordMessage.vue';

describe('DiscordMessage.vue', () => {
	it('renders props.content when passed', () => {
		const content = '*new message*';
		const wrapper = shallowMount(DiscordMessage, {
			propsData: { content }
		});
		expect(wrapper.html()).toContain('<div class="markup markdown"><em>new message</em></div>');
	});
});
