import { Navigate, Route, Routes } from 'react-router-dom';
import { Catalog} from '../components/pages/index';
import { Paths } from './Paths';

const Private = () => {
    return (
        <Routes>
            <Route path={'/catalog'} element={<Catalog />} />
            <Route path={'*'} element={<Navigate to={Paths.Catalog} replace />} />
        </Routes>
    );
};

export default Private;