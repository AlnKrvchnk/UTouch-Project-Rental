import { ComponentMeta, ComponentStory } from '@storybook/react';
import FacilityInform from './FacilityInform';

export default {
    title: 'Molecules/FacilityInform',
    component: FacilityInform,
} as ComponentMeta<typeof FacilityInform>;

const Template: ComponentStory<typeof FacilityInform> = (arg) => (
    <FacilityInform {...arg} />
);

export const Default = Template.bind({});
Default.args = {
    title: 'Title',
    isDelivered: true,
    registrations: [],
    address: 'Address',
    count: '5',
    imageUrl: '09a8db7e54f7.jpeg',
    pricePerMeter: '000 00',
    price: '000 000',
};
