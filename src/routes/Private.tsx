import AppBarContainer from '@/components/containers/AppBarContainer/AppBarContainer';
import { Navigate, Route, Routes } from 'react-router-dom';
import {
    Catalog,
    Collections,
    Favorites,
    News,
    User,
} from '../components/pages/index';
import { Paths } from './Paths';
const Private = () => {
    return (
        <>
            <AppBarContainer />
            <Routes>
                <Route path={Paths.Catalog} element={<Catalog />} />
                <Route path={Paths.News} element={<News />} />
                <Route path={Paths.Collections} element={<Collections />} />
                <Route path={Paths.Favorites} element={<Favorites />} />
                <Route path={Paths.User} element={<User />} />
                <Route
                    path={'*'}
                    element={<Navigate to={Paths.Catalog} replace />}
                />
            </Routes>
        </>
    );
};

export default Private;
