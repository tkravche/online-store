import { StyledGlobal } from '@/theme/styles/base/StyledGlobal.js';
import { ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
// import { theme } from 'twin.macro';
import { App } from './App.js';
import './index.css';
import { ToastContainer} from 'react-toastify';

// import { store } from './lib/redux/init/store.js';
import theme from './theme/theme';
import { otherStore, persistor } from './lib/otherRedux/otherStore.js';
import { PersistGate } from 'redux-persist/integration/react';
import { ScrollToTop } from './components/ScrollToTop/index.js';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // Наш store прокидаємо у Provider
  <React.StrictMode>
    <StyledGlobal />
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={otherStore}>
        <ThemeProvider theme={theme}>
          <Router>
            <ScrollToTop />
            <App />
            <ToastContainer />
          </Router>
        </ThemeProvider>
      </Provider>
    </PersistGate>
  </React.StrictMode>
);
