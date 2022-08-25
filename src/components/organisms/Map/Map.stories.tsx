import { ComponentMeta, ComponentStory } from '@storybook/react';
import Map from './Map';

export default {
    title: 'Organisms/Map',
    component: Map,
} as ComponentMeta<typeof Map>;

const Template: ComponentStory<typeof Map> = (args) => <Map {...args} />;

export const Default = Template.bind({});
Default.args = {
    placemarks: [{ title: 'Some Place', marks: [67, 78] }],
    display: true,
};
