import { ComponentMeta, ComponentStory } from '@storybook/react';

import DeveloperInformSmallCard from './DeveloperInformSmallCard';

export default {
    title: 'Molecules/DeveloperInformSmallCard',
    component: DeveloperInformSmallCard,
} as ComponentMeta<typeof DeveloperInformSmallCard>;

const Template: ComponentStory<typeof DeveloperInformSmallCard> = (args) => (
    <DeveloperInformSmallCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
    developerAvatarUrl: '09a8db7e54f7.jpeg',
    developerName: 'Developer Name',
};
