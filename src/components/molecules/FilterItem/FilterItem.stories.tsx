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
    title: 'Title',
    isCheckbox: true,
    value: ['item1', 'item'],
    selectValue: ['item'],
};
