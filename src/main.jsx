import React from 'react';
import ReactDOM from 'react-dom/client';
import AppZustand from './AppZustand';
import AppValtio from './AppValtio';
import AppJotai from './AppJotai';
import AppRTK from './AppRTK';
import { Router, Link } from '@reach/router';
import Home from './Home';
import { Provider as JotaiProvider } from 'jotai';
import { store } from './rtk/store'
import { Provider as RTKProvider } from 'react-redux'

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RTKProvider store={store}>
      <JotaiProvider>
            <Router>
              <Home path='/' />
              <AppZustand path='/zustand' />
              <AppValtio path='/valtio' />
              <AppJotai path='/jotai' />
              <AppRTK path='/rtk' />
            </Router>
          </JotaiProvider>
    </RTKProvider>
	</React.StrictMode>,
);
