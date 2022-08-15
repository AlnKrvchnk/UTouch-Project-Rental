import { ComponentMeta, ComponentStory } from '@storybook/react';
import AppBar from './AppBar';

export default {
    title: 'Organisms/AppBar',
    component: AppBar,
} as ComponentMeta<typeof AppBar>;

const Template: ComponentStory<typeof AppBar> = (args) => <AppBar {...args} />;

export const Default = Template.bind({});
Default.args = {};
