import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AppStore from './app/store';
import StoreContext from './contexts/StoreContext';
import './index.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const store = new AppStore();
root.render(
    <StoreContext.Provider value={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StoreContext.Provider>
);
