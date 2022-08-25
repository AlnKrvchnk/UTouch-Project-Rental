import { ComponentMeta, ComponentStory } from '@storybook/react';
import BenefitsList from './BenefitsList';

export default {
    title: 'Molecules/BenefitsList',
    component: BenefitsList,
} as ComponentMeta<typeof BenefitsList>;

const Template: ComponentStory<typeof BenefitsList> = (arg) => (
    <BenefitsList {...arg} />
);

export const Default = Template.bind({});
Default.args = { benefitsList: ['benefits', 'benefits'] };
