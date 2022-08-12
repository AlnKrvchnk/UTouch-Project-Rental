import { ComponentMeta, ComponentStory } from '@storybook/react';
import ResendCode from './ResendCode';

export default {
    title: 'Molecules/ResendCode',
    component: ResendCode,
} as ComponentMeta<typeof ResendCode>;

const Template: ComponentStory<typeof ResendCode> = (arg) => (
    <ResendCode {...arg} />
);

export const Default = Template.bind({});
let timerWork = false;
Default.args = {
    isWork: timerWork,
    resendCode: () => {
        timerWork = !timerWork;
    },
};
