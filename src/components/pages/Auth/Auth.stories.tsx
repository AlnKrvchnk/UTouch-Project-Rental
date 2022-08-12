import { ComponentMeta, ComponentStory } from '@storybook/react';
import Auth from './Auth';

export default {
    title: 'Pages/Auth',
    component: Auth,
} as ComponentMeta<typeof Auth>;

const Template: ComponentStory<typeof Auth> = () => <Auth />;

export const Default = Template.bind({});
Default.args = {};
