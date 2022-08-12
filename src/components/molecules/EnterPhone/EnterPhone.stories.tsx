import { ComponentMeta, ComponentStory } from '@storybook/react';
import EnterPhone from './EnterPhone';

export default {
    title: 'Molecules/EnterPhone',
    component: EnterPhone,
} as ComponentMeta<typeof EnterPhone>;

const Template: ComponentStory<typeof EnterPhone> = (arg) => (
    <EnterPhone {...arg} />
);

export const Default = Template.bind({});
Default.args = {
    handleChange: (value) => {},
};
