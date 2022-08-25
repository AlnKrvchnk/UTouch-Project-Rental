import { ComponentMeta, ComponentStory } from '@storybook/react';

import FacilityCarouselBox from './FacilityCarouselBox';

export default {
    title: 'Molecules/FacilityCarouselBox',
    component: FacilityCarouselBox,
} as ComponentMeta<typeof FacilityCarouselBox>;

const Template: ComponentStory<typeof FacilityCarouselBox> = (args) => (
    <FacilityCarouselBox {...args} />
);

export const Default = Template.bind({});
Default.args = {
    images: [
        'http://212.41.17.20:3000/files/getImage/09a8db7e54f7.jpeg',
        'http://212.41.17.20:3000/files/getImage/09a8db7e54f7.jpeg',
        'http://212.41.17.20:3000/files/getImage/09a8db7e54f7.jpeg',
    ],
    maxSteps: 3,
    isDelivered: false,
};
