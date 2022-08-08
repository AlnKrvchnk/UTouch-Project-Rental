import { ComponentMeta, ComponentStory } from '@storybook/react';
import ResendCode from './ResendCode';

export default {
    title: 'Molecules/ResendCode',
    component: ResendCode,
} as ComponentMeta<typeof ResendCode>;

const Template: ComponentStory<typeof ResendCode> = () => <ResendCode />;

export const Default = Template.bind({});
Default.args = {};
