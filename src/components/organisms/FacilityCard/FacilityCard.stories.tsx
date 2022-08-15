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
Default.args = {};
