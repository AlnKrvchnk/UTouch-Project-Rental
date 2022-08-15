import { ComponentMeta, ComponentStory } from '@storybook/react';

import NavItem from './NavItem';

export default {
    title: 'Atoms/NavItem',
    component: NavItem,
} as ComponentMeta<typeof NavItem>;

const Template: ComponentStory<typeof NavItem> = (args) => (
    <NavItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
    children: <span>Item</span>,
};
