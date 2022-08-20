import { useAppContext } from '@/contexts/StoreContext';
import AppBar from '@components/organisms/AppBar/AppBar';
import { useState } from 'react';

const AppBarContainer = () => {
    const [showMap, setShowMap] = useState<boolean>(false);
    const store = useAppContext();
    const onSearch = (value: string | undefined) => {
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
