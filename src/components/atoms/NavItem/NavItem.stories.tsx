import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import NavItem from './NavItem';

export default {
    title: 'Atoms/NavItem',
    component: NavItem,
} as ComponentMeta<typeof NavItem>;

const Template: ComponentStory<typeof NavItem> = (args) => (
    <BrowserRouter>
        <NavItem {...args} />
    </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
    to: '',
    children: <span>Item</span>,
};
