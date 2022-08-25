import { ComponentMeta, ComponentStory } from '@storybook/react';
import FilterList from './FilterList';

export default {
    title: 'Organisms/FilterList',
    component: FilterList,
} as ComponentMeta<typeof FilterList>;

const Template: ComponentStory<typeof FilterList> = (args) => (
    <FilterList {...args} />
);

export const Default = Template.bind({});
Default.args = {};
