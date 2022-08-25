import { ComponentMeta, ComponentStory } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import AppBar from './AppBar';

export default {
    title: 'Organisms/AppBar',
    component: AppBar,
} as ComponentMeta<typeof AppBar>;

const Template: ComponentStory<typeof AppBar> = (args) => (
    <BrowserRouter>
        <AppBar {...args} />
    </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = { isShowMap: true };
