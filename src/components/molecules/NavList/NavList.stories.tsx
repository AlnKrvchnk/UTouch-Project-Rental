import { Paths } from '@/routes/Paths';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import NavList from './NavList';

export default {
    title: 'Molecules/NavList',
    component: NavList,
} as ComponentMeta<typeof NavList>;

const Template: ComponentStory<typeof NavList> = (args) => (
    <BrowserRouter>
        <NavList {...args} />
    </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = {
    pages: [{ link: Paths.Catalog, content: () => <span>Page</span> }],
};
