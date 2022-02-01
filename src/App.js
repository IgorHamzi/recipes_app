import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Routes from './routes';
import FamilyContext from './Context/context';

function App() {
  const [senha, setSenha] = useState();
  const [mail, setMail] = useState();
  const [redirect, setRedirect] = useState(false);

  const funt = async (m, s) => {
    setSenha(s);
    setMail(m);
    const ob = { email: m };
    localStorage.setItem('mealsToken', 1); // type="text"
    localStorage.setItem('cocktailsToken', 1);
    localStorage.setItem('user', JSON.stringify(ob));
    const y = 120;
    setTimeout(() => { setRedirect(true); }, y);
  };

  const contextValue = {
    user: {
      mail,
      senha,
    },
    funt,
    redirect,
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
