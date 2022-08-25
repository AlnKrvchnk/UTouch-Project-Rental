import { ComponentMeta, ComponentStory } from '@storybook/react';

import FacilityBriefInformationBox from './FacilityBriefInformationBox';

export default {
    title: 'Molecules/FacilityBriefInformationBox',
    component: FacilityBriefInformationBox,
} as ComponentMeta<typeof FacilityBriefInformationBox>;

const Template: ComponentStory<typeof FacilityBriefInformationBox> = (args) => (
    <FacilityBriefInformationBox {...args} />
);

export const Default = Template.bind({});
Default.args = {
    price: '000 000',
    minPrice: '000 000',
    square: '000 000',
    facilityType: 'Type',
    facilityCount: '0',
    city: 'City',
    address: 'Address',
    district: 'District',
    building: 'Building',
    microDistrict: 'MicroDistrict',
};
