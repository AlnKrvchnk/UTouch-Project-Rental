import { ComponentMeta, ComponentStory } from '@storybook/react';
import SliderTextField from './SliderTextField';

export default {
    title: 'Molecules/SliderTextField',
    component: SliderTextField,
} as ComponentMeta<typeof SliderTextField>;

const Template: ComponentStory<typeof SliderTextField> = (arg) => (
    <SliderTextField {...arg} />
);

export const Default = Template.bind({});
Default.args = {
    minDistance: 10,
    value: [0, 18],
    range: { min: 0, max: 50 },
    setValue: () => {},
};
