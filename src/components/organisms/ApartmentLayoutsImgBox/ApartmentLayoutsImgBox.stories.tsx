import { ComponentMeta, ComponentStory } from '@storybook/react';

import ApartmentLayoutsImgBox from './ApartmentLayoutsImgBox';

export default {
    title: 'Organisms/ApartmentLayoutsImgBox',
    component: ApartmentLayoutsImgBox,
} as ComponentMeta<typeof ApartmentLayoutsImgBox>;

const Template: ComponentStory<typeof ApartmentLayoutsImgBox> = (arg) => (
    <ApartmentLayoutsImgBox {...arg} />
);

export const Default = Template.bind({});
Default.args = {
    imgUrl: '09a8db7e54f7.jpeg',
    isShow: true,
};
