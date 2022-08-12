import { ComponentMeta, ComponentStory } from '@storybook/react';
import ErrorBox from './ErrorBox';

export default {
    title: 'Organisms/ErrorBox',
    component: ErrorBox,
} as ComponentMeta<typeof ErrorBox>;

const Template: ComponentStory<typeof ErrorBox> = (args) => (
    <ErrorBox {...args} />
);

export const Default = Template.bind({});
Default.args = {
    children: 'Error!',
};
