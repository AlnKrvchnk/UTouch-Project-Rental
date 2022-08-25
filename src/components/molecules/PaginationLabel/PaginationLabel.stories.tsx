import { ComponentMeta, ComponentStory } from '@storybook/react';

import PaginationLabel from './PaginationLabel';

export default {
    title: 'Molecules/PaginationLabel ',
    component: PaginationLabel,
} as ComponentMeta<typeof PaginationLabel>;

const Template: ComponentStory<typeof PaginationLabel> = (args) => (
    <PaginationLabel {...args} />
);

export const Default = Template.bind({});
Default.args = {
    currentPage: 7,
    pageCount: 9,
};
