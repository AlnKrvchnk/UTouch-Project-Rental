import { ComponentMeta, ComponentStory } from '@storybook/react';
import AuthForm from './AuthForm';

export default {
    title: 'Organisms/AuthForm',
    component: AuthForm,
} as ComponentMeta<typeof AuthForm>;

const Template: ComponentStory<typeof AuthForm> = (args) => (
    <AuthForm {...args} />
);

export const Default = Template.bind({});
Default.args = {};
