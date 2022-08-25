import { storiesOf } from '@storybook/react';
import {
    ArrowNextIcon,
    ArrowPrevIcon,
    CollectionsIcon,
    DotsIcon,
    ExistOptionIcon,
    ExpandMoreIcon,
    FileIcon,
    LikeIcon,
    MapIcon,
    NewsIcon,
    NotExistOptionIcon,
    PlaceIcon,
    RemoveIcon,
    SearchIcon,
    SolidLikeIcon,
    UserIcon,
} from './Icons';

storiesOf('Atoms/Icons', module)
    .add('DotsIcon', () => <DotsIcon color={'primary'} />)
    .add('PlaceIcon', () => <PlaceIcon color={'primary'} />)
    .add('MapIcon', () => <MapIcon color={'primary'} />)
    .add('FileIcon', () => <FileIcon color={'primary'} />)
    .add('CollectionsIcon', () => <CollectionsIcon color={'primary'} />)
    .add('LikeIcon', () => <LikeIcon color={'primary'} />)
    .add('SolidLikeIcon', () => <SolidLikeIcon color={'primary'} />)
    .add('ExpandMoreIcon', () => <ExpandMoreIcon color={'primary'} />)
    .add('SearchIcon', () => <SearchIcon color={'primary'} />)
    .add('UserIcon', () => <UserIcon color={'primary'} />)
    .add('NewsIcon', () => <NewsIcon color={'primary'} />)
    .add('RemoveIcon', () => <RemoveIcon color={'primary'} />)
    .add('ExistOption', () => <ExistOptionIcon color={'primary'} />)
    .add('NotExistOption', () => <NotExistOptionIcon color={'primary'} />)
    .add('ArrowPrevIcon', () => <ArrowPrevIcon color={'primary'} />)
    .add('ArrowNextIcon', () => <ArrowNextIcon color={'primary'} />);
