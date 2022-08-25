import { ComponentMeta, ComponentStory } from '@storybook/react';

import FilterChipsList from './FilterChipsList';

export default {
    title: 'Molecules/FilterChipsList',
    component: FilterChipsList,
} as ComponentMeta<typeof FilterChipsList>;

const Template: ComponentStory<typeof FilterChipsList> = (args) => (
    <FilterChipsList {...args} />
);

export const Default = Template.bind({});
Default.args = {
    items: [{ title: 'Title', value: 'Value' }],
};
