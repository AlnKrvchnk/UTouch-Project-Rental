import { ComponentMeta, ComponentStory } from '@storybook/react';
import FacilitySalesList from './FacilitySalesList';

export default {
    title: 'Molecules/FacilitySalesList',
    component: FacilitySalesList,
} as ComponentMeta<typeof FacilitySalesList>;

const Template: ComponentStory<typeof FacilitySalesList> = (arg) => (
    <FacilitySalesList {...arg} />
);

export const Default = Template.bind({});
Default.args = { salesList: ['benefits', 'benefits'] };
