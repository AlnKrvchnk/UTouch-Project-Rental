import { ComponentMeta, ComponentStory } from '@storybook/react';

import TagList from './TagList';

export default {
    title: 'Molecules/TagList',
    component: TagList,
} as ComponentMeta<typeof TagList>;

const Template: ComponentStory<typeof TagList> = (arg) => <TagList {...arg} />;

export const Default = Template.bind({});
Default.args = {};
