import { ComponentMeta, ComponentStory } from '@storybook/react';

import FacilityCardControls from './FacilityCardControls';

export default {
    title: 'Molecules/FacilityCardControls',
    component: FacilityCardControls,
} as ComponentMeta<typeof FacilityCardControls>;

const Template: ComponentStory<typeof FacilityCardControls> = (args) => (
    <FacilityCardControls {...args} />
);

export const Default = Template.bind({});
Default.args = {
    isFavorite: false,
    isCollection: true,
};
