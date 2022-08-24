import { useAppContext } from '@/contexts/StoreContext';
import { Paths } from '@/routes/Paths';
import AppBar from '@components/organisms/AppBar/AppBar';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AppBarContainer = () => {
    const [showMap, setShowMap] = useState<boolean>(false);
    const store = useAppContext();
    const navigate = useNavigate();
    const onSearch = (value: string | undefined) => {
        navigate(`${Paths.Catalog}`, { replace: true });
        store.filter.setSearch(value);
    };

    return (
        <AppBar
            setShowMap={() => setShowMap(!showMap)}
            search={(value) => {
                onSearch(value);
            }}
            showMap={showMap}
        />
    );
};
export default AppBarContainer;
