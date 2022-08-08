import { ComponentMeta, ComponentStory } from '@storybook/react';
import EnterCode from './EnterCode';

export default {
    title: 'Molecules/EnterCode',
    component: EnterCode,
} as ComponentMeta<typeof EnterCode>;

const Template: ComponentStory<typeof EnterCode> = () => <EnterCode />;

export const Default = Template.bind({});
Default.args = {};
