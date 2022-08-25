import { ComponentMeta, ComponentStory } from '@storybook/react';

import ApartmentLayoutsImg from './ApartmentLayoutsImg';

export default {
    title: 'Atoms/ApartmentLayoutsImg',
    component: ApartmentLayoutsImg,
} as ComponentMeta<typeof ApartmentLayoutsImg>;

const Template: ComponentStory<typeof ApartmentLayoutsImg> = (args) => (
    <ApartmentLayoutsImg {...args} />
);

export const Default = Template.bind({});
Default.args = {
    imageUrl: '09a8db7e54f7.jpeg',
    onZoomImage: () => {},
};
