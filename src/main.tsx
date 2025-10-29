import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { ClickProvider } from './services/ClickContext.tsx';
import { LocaleProvider } from './services/LocaleContext.tsx';
import { I18nextProvider } from 'react-i18next';
import i18n from './services/i18next.ts';
import './styles/Global.css';
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ClickProvider>
          <LocaleProvider>
            <I18nextProvider i18n={i18n}>
              <App />
            </I18nextProvider>
          </LocaleProvider>
        </ClickProvider>
      </BrowserRouter>  
    </HelmetProvider>
  </React.StrictMode>
);
