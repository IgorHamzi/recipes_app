import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from './routes';
import FamilyContext from './Context/context';

function App() {
  const [senha, setSenha] = useState();
  const [mail, setMail] = useState();

  const funt = (m, s) => {
    setSenha(s);
    setMail(m);
  };

  const contextValue = {
    user: {
      mail,
      senha,
    },
    funt,
  };

  return (
    <div>
      <BrowserRouter>
        <FamilyContext.Provider value={ contextValue }>
          <Routes />
        </FamilyContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
