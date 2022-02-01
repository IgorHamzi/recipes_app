import React, { useState } from 'react';

function Login() {
    const [senha, setSenha] = useState();
    const [mail, setEmail] = useState();

  return (
    <form>
      <label htmlFor="email">
        <input
          name="email"
          type="email"
          data-testid="email-input"
          value={email}
          // onChange={}
        />
      </label>
      <label htmlFor="senha">
        <input
          name="senha"
          type="text"
          data-testid="password-input"
          value={ senha }
        // onChange={}
        />
      </label>
      <button
        // onClick={() => this.clickenviastore({ senha, email })}
         // disabled={
         // senha.length < tres || !validator.isEmail(email)
         // }
          >
          Entrar
        </button>

      </form>
    );
}

export default Login;
