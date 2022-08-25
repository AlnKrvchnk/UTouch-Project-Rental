import { ComponentMeta, ComponentStory } from '@storybook/react';
import FacilityDetailBox from './FacilityDetailBox';

export default {
    title: 'Atoms/FacilityDetailBox',
    component: FacilityDetailBox,
} as ComponentMeta<typeof FacilityDetailBox>;

const Template: ComponentStory<typeof FacilityDetailBox> = (args) => (
    <FacilityDetailBox {...args} />
);

export const Default = Template.bind({});
Default.args = {
    title: 'Title',
    textContent: 'Text',
};
