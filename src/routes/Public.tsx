import { Navigate, Route, Routes } from 'react-router-dom';
import { Auth } from '../components/pages/index';
import { Paths } from './Paths';

const Public = () => {
    return (
        <Routes>
            <Route path={'/auth'} element={<Auth />} />
            <Route path={'*'} element={<Navigate to={Paths.Auth} replace />} />
        </Routes>
    );
};

export default Public;
