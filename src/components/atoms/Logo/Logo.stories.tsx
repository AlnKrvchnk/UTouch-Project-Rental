import { ComponentMeta, ComponentStory } from '@storybook/react';

import Logo from './Logo';

export default {
    title: 'Atoms/Logo',
    component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = () => <Logo />;
