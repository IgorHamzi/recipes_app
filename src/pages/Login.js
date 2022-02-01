import React, { useState, useContext } from 'react';
import validator from 'validator';
import { Redirect } from 'react-router';
import FamilyContext from '../Context/context';

function Login() {
  const [mail, setMail] = useState('');
  const [senha, setSenha] = useState('');
  const { redirect } = useContext(FamilyContext);
  const { funt } = useContext(FamilyContext);

  const setMaill = ({ target }) => {
    setMail(target.value);
  };

  const setSenhaa = ({ target }) => {
    setSenha(target.value);
  };
  const tres = 7;

  const final = (m, s) => {
    funt(m, s);
  };

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
      <label htmlFor="password">
        <input
          data-testid="password-input"
          name="password"
          type="password"
          value={ senha }
          onChange={ (e) => setSenhaa(e) }
        />
      </label>
      <button
        type="button"
        data-testid="login-submit-btn"
        disabled={ senha.length < tres || !validator.isEmail(mail) }
        onClick={ () => final(mail, senha) }
      >
        Enter
      </button>
      { redirect && <Redirect to="/foods" />}
    </div>
  );
}

export default Login;
