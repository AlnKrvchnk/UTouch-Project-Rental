import { FacilityPaymentOption } from '@/app/types/Facility/FacilityPaymentOption';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import FacilityPaymentOptionsList from './FacilityPaymentOptionsList';

export default {
    title: 'Molecules/FacilityPaymentOptionsList',
    component: FacilityPaymentOptionsList,
} as ComponentMeta<typeof FacilityPaymentOptionsList>;

const Template: ComponentStory<typeof FacilityPaymentOptionsList> = (args) => (
    <FacilityPaymentOptionsList {...args} />
);

export const Default = Template.bind({});
Default.args = {
    paymentOptions: [
        FacilityPaymentOption.installmentPlan,
        FacilityPaymentOption.militaryMortgage,
    ],
    installmentPlanOptions: ['60%', '70%'],
};
