import { ComponentMeta, ComponentStory } from '@storybook/react';

import Timer from './Timer';

export default {
    title: 'Atoms/Timer',
    component: Timer,
} as ComponentMeta<typeof Timer>;

const Template: ComponentStory<typeof Timer> = (args) => <Timer {...args} />;

let isTicking = false;

export const Default = Template.bind({});
Default.args = {
    isWork: isTicking,
    timeInterval: 100,
    timeOver: () => {
        isTicking = false;
    },
};
