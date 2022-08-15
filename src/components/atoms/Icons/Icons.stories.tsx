import { storiesOf } from '@storybook/react';
import { DotsIcon, PlaceIcon } from './Icons';

storiesOf('Atoms/Icons', module)
    .add('DotsIcon', () => <DotsIcon color={'primary'} />)
    .add('PlaceIcon', () => <PlaceIcon color={'primary'} />);
