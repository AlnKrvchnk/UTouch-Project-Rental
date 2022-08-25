import { ComponentMeta, ComponentStory } from '@storybook/react';
import FacilityDetailHeader from './FacilityDetailHeader';

export default {
    title: 'Organisms/FacilityDetailHeader',
    component: FacilityDetailHeader,
} as ComponentMeta<typeof FacilityDetailHeader>;

const Template: ComponentStory<typeof FacilityDetailHeader> = (args) => (
    <FacilityDetailHeader {...args} />
);

export const Default = Template.bind({});
Default.args = {};
