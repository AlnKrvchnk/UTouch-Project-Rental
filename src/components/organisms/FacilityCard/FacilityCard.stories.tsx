import { FacilityRegistration } from '@/app/types/Facility/FacilityRegistration';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import FacilityCard from './FacilityCard';

export default {
    title: 'Organisms/FacilityCard',
    component: FacilityCard,
} as ComponentMeta<typeof FacilityCard>;

const Template: ComponentStory<typeof FacilityCard> = (args) => (
    <FacilityCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
    title: 'Title',
    isDelivered: false,
    registrations: [FacilityRegistration.bookingAgreement],
    address: 'Address',
    count: '7',
    pricePerMeter: '000 000',
    price: '000',
    isFavorite: false,
    imageUrl: '09a8db7e54f7.jpeg',
    isCollection: false,
};
