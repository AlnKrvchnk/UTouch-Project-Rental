import Typography from '@mui/material/Typography';
// eslint-disable-next-line max-len
import FavoritesFacilityContainer from '@components/containers/FavoritesFacilityContainer/FavoritesFacilityContainer';
import { useEffect } from 'react';
import { StyledFavorites } from './StyledFavorites';
const Favorites = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <StyledFavorites>
            <Typography
                variant={'h1'}
                color={'text.primary'}
                sx={{ marginBottom: '24px' }}
            >
                Избранное
            </Typography>
            <FavoritesFacilityContainer />
        </StyledFavorites>
    );
};
export default Favorites;
