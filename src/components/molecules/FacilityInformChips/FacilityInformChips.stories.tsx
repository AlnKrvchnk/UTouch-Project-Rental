import { ComponentMeta, ComponentStory } from '@storybook/react';

import FacilityInformChips from './FacilityInformChips';

export default {
    title: 'Molecules/FacilityInformChips',
    component: FacilityInformChips,
} as ComponentMeta<typeof FacilityInformChips>;

const Template: ComponentStory<typeof FacilityInformChips> = (args) => (
    <FacilityInformChips {...args} />
);

export const Default = Template.bind({});
Default.args = {
    isDelivered: true,
    registrations: ['123', '786'],
};
