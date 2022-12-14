import { ComponentMeta, ComponentStory } from '@storybook/react';

import CheckBox from './CheckBox';

export default {
    title: 'Atoms/CheckBox',
    component: CheckBox,
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => (
    <CheckBox {...args} />
);
let isChecked = false;
export const Default = Template.bind({});
Default.args = {
    title: 'Checkbox',
    onChange: () => {
        isChecked = !isChecked;
    },
    checked: isChecked,
};
