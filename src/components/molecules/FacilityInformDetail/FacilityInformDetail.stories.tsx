import { ComponentMeta, ComponentStory } from '@storybook/react';

import FacilityInformDetail from './FacilityInformDetail';

export default {
    title: 'Molecules/FacilityInformDetail',
    component: FacilityInformDetail,
} as ComponentMeta<typeof FacilityInformDetail>;

const Template: ComponentStory<typeof FacilityInformDetail> = (args) => (
    <FacilityInformDetail {...args} />
);

export const Default = Template.bind({});
Default.args = {
    address: 'Address',
    count: '5 квартир',
    pricePerMeter: 'price',
};
