import { ComponentMeta, ComponentStory } from '@storybook/react';
import Search from './Search';

export default {
    title: 'Molecules/Search',
    component:Search,
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const Default = Template.bind({});
Default.args = {};
