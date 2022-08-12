import Typography from '@mui/material/Typography';
import { ComponentMeta, ComponentStory } from '@storybook/react';

export default {
    title: 'Atoms/Typography',
    component: Typography,
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
    <Typography {...args} />
);

export const h1 = Template.bind({});
h1.args = {
    variant: 'h1',
    children: 'Some Text',
    color: 'text.primary',
};
export const h2 = Template.bind({});
h2.args = {
    variant: 'h2',
    children: 'Some Text',
    color: 'text.primary',
};
export const h3 = Template.bind({});
h3.args = {
    variant: 'h3',
    children: 'Some Text',
    color: 'text.primary',
};
export const h4 = Template.bind({});
h4.args = {
    variant: 'h4',
    children: 'Some Text',
    color: 'text.primary',
};
export const h5 = Template.bind({});
h5.args = {
    variant: 'h5',
    children: 'Some Text',
    color: 'text.primary',
};
export const h6 = Template.bind({});
h6.args = {
    variant: 'h6',
    children: 'Some Text',
    color: 'text.primary',
};
export const subtitle1 = Template.bind({});
subtitle1.args = {
    variant: 'subtitle1',
    children: 'Some Text',
    color: 'text.primary',
};
export const subtitle2 = Template.bind({});
subtitle1.args = {
    variant: 'subtitle2',
    children: 'Some Text',
    color: 'text.primary',
};
export const body1 = Template.bind({});
body1.args = {
    variant: 'body1',
    children: 'Some Text',
    color: 'text.primary',
};
