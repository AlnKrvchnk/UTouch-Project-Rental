import { ComponentMeta, ComponentStory } from '@storybook/react';
import FacilityList from './FacilityList';

export default {
    title: 'Organisms/FacilityList',
    component: FacilityList,
} as ComponentMeta<typeof FacilityList>;

const Template: ComponentStory<typeof FacilityList> = (args) => (
    <FacilityList {...args} />
);

export const Default = Template.bind({});
Default.args = {};
