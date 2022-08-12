import { useAppContext } from '@context/StoreContext';
import Private from '@routes/Private';
import Public from '@routes/Public';
import { observer } from 'mobx-react';
function App() {
    const store = useAppContext();
    const isAuth = store.auth.isAuth;
    return <div className="App">{isAuth ? <Private /> : <Public />}</div>;
}

export default observer(App);
