import { ComponentMeta, ComponentStory } from '@storybook/react';

import Timer from './Timer';

export default {
    title: 'Atoms/Timer',
    component: Timer,
} as ComponentMeta<typeof Timer>;

const Template: ComponentStory<typeof Timer> = (args) => <Timer {...args} />;

export const Default = Template.bind({});
Default.args = {
    minutes: '00',
    seconds: '00',
};
