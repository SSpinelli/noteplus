import React from 'react';
import { Link } from 'react-router-dom';
import './style/login.css';

function Login (_props) {
  return (
    <div className='login-container'>
      <form action="" className='login-form'>
        <h1>Login NotePlus</h1>
        <input 
          type="text"
          name='email'
          placeholder='E-mail...'
        />
        <input 
          type="password"
          name='password'
          placeholder='Senha...' 
        />
        <button type='button'>Fazer Login</button>
        <p>Não tem uma conta? <Link to="/signup">Clique aqui e se cadastre</Link></p>
      </form>
    </div>
  )
}

export default Login;
