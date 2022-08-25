import { ComponentMeta, ComponentStory } from '@storybook/react';

import Slider from './Slider';

export default {
    title: 'Atoms/Slider',
    component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;
let currentValue = [8, 30];
export const Default = Template.bind({});
Default.args = {
    minDistance: 10,
    value: currentValue,
    range: { max: 50, min: 0 },
    setValue: (value) => (currentValue = value),
};
