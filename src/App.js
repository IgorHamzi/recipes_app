import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import GlobalProvider from './context/GlobalProvider';
import Routes from './routes';

function App() {
  return (
    <div>
      <GlobalProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </GlobalProvider>
    </div>
  );
}

export default App;
