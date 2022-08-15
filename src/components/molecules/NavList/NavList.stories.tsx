import { ComponentMeta, ComponentStory } from '@storybook/react';

import NavList from './NavList';

export default {
    title: 'Molecules/NavList',
    component: NavList,
} as ComponentMeta<typeof NavList>;

const Template: ComponentStory<typeof NavList> = (args) => (
    <NavList {...args} />
);

export const Default = Template.bind({});
Default.args = {};
