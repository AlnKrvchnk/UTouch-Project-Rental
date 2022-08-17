import Typography from '@mui/material/Typography';
// eslint-disable-next-line max-len
import FavoritesFacilityContainer from '@components/containers/FavoritesFacilityContainer/FavoritesFacilityContainer';
const Favorites = () => {
    return (
        <>
            <Typography variant={'h1'} color={'text.primary'}>
                Избранное
            </Typography>
            <FavoritesFacilityContainer />
        </>
    );
};
export default Favorites;
