import React, { useState, useContext } from 'react';
import validator from 'validator';
import FamilyContext from '../Context/context';

function Login() {
  const [mail, setMail] = useState();
  const [senha, setSenha] = useState('');
  const { funt } = useContext(FamilyContext);

  const setMaill = ({ target }) => {
    setMail(target.value);
  };

  const setSenhaa = ({ target }) => {
    setSenha(target.value);
  };
  const tres = 6;

  return (
    <div>
      <label htmlFor="email">
        <input
          data-testid="email-input"
          name="email"
          type="text"
          value={ mail }
          onChange={ (e) => setMaill(e) }
        />
      </label>
      <label htmlFor="senha">
        <input
          data-testid="password-input"
          name="senha"
          type="text"
          value={ senha }
          onChange={ (e) => setSenhaa(e) }
        />
      </label>
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ senha.length < tres || !validator.isEmail(mail) }
        onClick={ () => funt(mail, senha) }
      >
        Enter
      </button>
    </div>
  );
}

export default Login;
