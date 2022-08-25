import { ComponentMeta, ComponentStory } from '@storybook/react';

import NewsSmallCard from './NewsSmallCard';

export default {
    title: 'Molecules/NewsSmallCard ',
    component: NewsSmallCard,
} as ComponentMeta<typeof NewsSmallCard>;

const Template: ComponentStory<typeof NewsSmallCard> = (args) => (
    <NewsSmallCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
    imgUrl: '09a8db7e54f7.jpeg',
    title: 'News',
};
