import { ComponentMeta, ComponentStory } from '@storybook/react';
import EnterPhoneContainer from './EnterPhoneContainer';

export default {
    title: 'Container/EnterPhoneContainer',
    component: EnterPhoneContainer,
} as ComponentMeta<typeof EnterPhoneContainer>;

const Template: ComponentStory<typeof EnterPhoneContainer> = () => (
    <EnterPhoneContainer />
);

export const Default = Template.bind({});
Default.args = {};
