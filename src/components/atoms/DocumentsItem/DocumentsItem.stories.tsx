import { ComponentMeta, ComponentStory } from '@storybook/react';
import DocumentsItem from './DocumentsItem';

export default {
    title: 'Atoms/DocumentsItem',
    component: DocumentsItem,
} as ComponentMeta<typeof DocumentsItem>;

const Template: ComponentStory<typeof DocumentsItem> = (args) => (
    <DocumentsItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
    path: '',
    fileName: 'FileName',
};
