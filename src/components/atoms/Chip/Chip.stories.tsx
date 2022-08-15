import { ComponentMeta, ComponentStory } from '@storybook/react';
import Chip from './Chip';

export default {
    title: 'Atoms/Chip',
    component: Chip,
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (arg) => <Chip {...arg} />;

export const Default = Template.bind({});
Default.args = {
    label: 'Chip',
    color: 'primary',
};
