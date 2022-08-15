import { ComponentMeta, ComponentStory } from '@storybook/react';
import FacilityInform from './FacilityInform';

export default {
    title: 'Molecules/FacilityInform',
    component: FacilityInform,
} as ComponentMeta<typeof FacilityInform>;

const Template: ComponentStory<typeof FacilityInform> = (arg) => (
    <FacilityInform {...arg} />
);

export const Default = Template.bind({});
Default.args = {};
