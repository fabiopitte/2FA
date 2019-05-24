import React from 'react';

function Login() {
  let state = {
    usuario: '',
    senha: ''
  };

  function handleChanges(event) {
    state[event.target.id] = event.target.value;
  }

  function RealizarLogin(event) {
    event.preventDefault();
  }

  return (
    <div className='ui one column doubling stackable container'>
      <div className='column'>
        <form className='ui form' onSubmit={RealizarLogin}>
          <div className='field'>
            <label>Usuário</label>
            <input
              onChange={handleChanges}
              type='text'
              id='usuario'
              placeholder='Usuário'
            />
          </div>

          <div className='field'>
            <label>Senha</label>
            <input
              onChange={handleChanges}
              type='password'
              id='senha'
              placeholder='Senha'
            />
          </div>

          <button className='ui button primary' type='submit'>
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
