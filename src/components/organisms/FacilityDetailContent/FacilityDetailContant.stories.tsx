import { ComponentMeta, ComponentStory } from '@storybook/react';
import FacilityDetailContent from './FacilityDetailContent';

export default {
    title: 'Organisms/FacilityDetailContent',
    component: FacilityDetailContent,
} as ComponentMeta<typeof FacilityDetailContent>;

const Template: ComponentStory<typeof FacilityDetailContent> = (args) => (
    <FacilityDetailContent {...args} />
);

export const Default = Template.bind({});
Default.args = {};
