import { ComponentMeta, ComponentStory } from '@storybook/react';

import TextField from './TextField';

export default {
    title: 'Atoms/TextField',
    component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
    <TextField {...args} />
);

export const Default = Template.bind({});
Default.args = {};
export const Label = Template.bind({});
Label.args = {
    label: 'Label',
};
export const Error = Template.bind({});
Error.args = {
    helperText: 'error',
    error: true,
};
