import { ComponentMeta, ComponentStory } from '@storybook/react';
import CircularProgress from './CircularProgress';

export default {
    title: 'Atoms/CircularProgress',
    component: CircularProgress,
} as ComponentMeta<typeof CircularProgress>;

const Template: ComponentStory<typeof CircularProgress> = () => (
    <CircularProgress />
);

export const Default = Template.bind({});
