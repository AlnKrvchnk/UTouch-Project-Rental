import { ComponentMeta, ComponentStory } from '@storybook/react';
import FacilityCommissionsList from './FacilityCommissionsList';

export default {
    title: 'Molecules/FacilityCommissionsList',
    component: FacilityCommissionsList,
} as ComponentMeta<typeof FacilityCommissionsList>;

const Template: ComponentStory<typeof FacilityCommissionsList> = (arg) => (
    <FacilityCommissionsList {...arg} />
);

export const Default = Template.bind({});
Default.args = { commissionsList: ['commissions', 'commissions'] };
