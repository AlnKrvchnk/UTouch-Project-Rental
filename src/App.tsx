import CircularProgress from '@components/atoms/CircularProgress/CircularProgress';
import { useAppContext } from '@context/StoreContext';
import { observer } from 'mobx-react';
import { useEffect } from 'react';
import Private from './routes/Private';
import Public from './routes/Public';
function App() {
    const store = useAppContext();
    useEffect(() => {
        store.auth.whoami();
    }, []);
    const isAuth = store.auth.isAuth;
    const isLoading = store.auth.isLoading;
    return (
        <div className="App">
            {isLoading ? (
                isAuth ? (
                    <Private />
                ) : (
                    <Public />
                )
            ) : (
                <CircularProgress />
            )}
        </div>
    );
}

export default observer(App);
