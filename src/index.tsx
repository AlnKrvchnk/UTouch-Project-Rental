import StoreContext from '@context/StoreContext';
import { ThemeProvider } from '@mui/material/styles';
import AppStore from '@store/index';
import Theme from '@styles/Theme';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const store = new AppStore();
root.render(
    <ThemeProvider theme={Theme}>
        <StoreContext.Provider value={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </StoreContext.Provider>
    </ThemeProvider>
);
