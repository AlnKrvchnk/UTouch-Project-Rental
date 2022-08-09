import { ComponentMeta, ComponentStory } from '@storybook/react';
import EnterCodeContainer from './EnterCodeContainer';

export default {
    title: 'Molecules/EnterCodeContainer',
    component: EnterCodeContainer,
} as ComponentMeta<typeof EnterCodeContainer>;

const Template: ComponentStory<typeof EnterCodeContainer> = () => <EnterCodeContainer />;

export const Default = Template.bind({});
Default.args = {};
