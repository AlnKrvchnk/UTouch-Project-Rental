import Typography from '@mui/material/Typography';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import FilterItem from './FilterItem';

export default {
    title: 'Molecules/FilterItem',
    component: FilterItem,
} as ComponentMeta<typeof FilterItem>;

const Template: ComponentStory<typeof FilterItem> = (args) => (
    <FilterItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
    id: '1',
    title: 'Title',
    content: <Typography>Content</Typography>,
};
