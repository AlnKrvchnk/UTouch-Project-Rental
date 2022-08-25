import { FacilityCommunication } from '@/app/types/Facility/FacilityCommunication';
import { FacilityHouseClass } from '@/app/types/Facility/FacilityHouseClass';
import { FacilityRegistration } from '@/app/types/Facility/FacilityRegistration';
import { FacilityType } from '@/app/types/Facility/FaculityType';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import FacilityGeneralList from './FacilityGeneralList';

export default {
    title: 'Molecules/FacilityGeneralList',
    component: FacilityGeneralList,
} as ComponentMeta<typeof FacilityGeneralList>;

const Template: ComponentStory<typeof FacilityGeneralList> = (args) => (
    <FacilityGeneralList {...args} />
);

export const Default = Template.bind({});
Default.args = {
    houseClass: FacilityHouseClass.business,
    material: 'Material',
    facilityType: FacilityType.apartments,
    parking: 'Parking',
    territory: 'Territory',
    ceilingHeight: 900000,
    distanceToTheBeach: 87589798,
    communications: [
        FacilityCommunication.electricity,
        FacilityCommunication.gas,
    ],
    registrations: [FacilityRegistration.bookingAgreement],
    price: 9879868,
};
