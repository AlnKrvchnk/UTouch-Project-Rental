import { ComponentMeta, ComponentStory } from '@storybook/react';
import NewsSmallCardList from './NewsSmallCardList';

export default {
    title: 'Organisms/NewsSmallCardList',
    component: NewsSmallCardList,
} as ComponentMeta<typeof NewsSmallCardList>;

const Template: ComponentStory<typeof NewsSmallCardList> = (args) => (
    <NewsSmallCardList {...args} />
);

export const Default = Template.bind({});
Default.args = {
    items: [
        { image: '09a8db7e54f7.jpeg', header: 'News', text: '', createdAt: '' },
        { image: '09a8db7e54f7.jpeg', header: 'News', text: '', createdAt: '' },
        { image: '09a8db7e54f7.jpeg', header: 'News', text: '', createdAt: '' },
    ],
};
