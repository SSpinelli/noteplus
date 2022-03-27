import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './style/login.css';

function CreateUser(_props) {
  const [input, setInput] = useState({
    email: '',
    password: '',
    name: '',
  });

  const [mes, setMes] = useState('')

  const handleChange = ({ target: { name, value } }) => {
    if (name === 'email') {
      setInput({ ...input, email: value });
    } else if (name === 'name') {
      setInput({ ...input, name: value }); 
    } else {
      setInput({ ...input, password: value }); 
    }
  }

  const addStyleLi = (result, liId) => {
    if (document.querySelector(`#li-${liId}`)) {
      return result
      ? document.querySelector(`#li-${liId}`).classList.add('ativo')
      : document.querySelector(`#li-${liId}`).classList.remove('ativo')
    }
  }

  const checkPassLenght = () => {
    const { password } = input;
    const result = password.length > 4;

    addStyleLi(result, '01');

    return result;
  }

  const checkPassHasNumber = () => {
    const { password } = input;
    const numbers = '1234567890'.split('');
    const result = numbers.some((number) => password.includes(number));

    addStyleLi(result, '03');

    return result;
  }

  const checkPassHasSpecialChar = () => {
    const { password } = input;
    const special = '!@#$%^&*()_-+={}[]:;/?>.<,|~`'.split('');

    const result = special.some((char) => password.includes(char));

    addStyleLi(result, '02');

    return result;
  }

  const checkPassHasCaps = () => {
    const { password } = input;
    const lettersCaps = 'qwertyuioplkjhgfdsazxcvbnm'.toUpperCase().split('');
    const result = lettersCaps.some((charCaps) => password.includes(charCaps));

    addStyleLi(result, '04');

    return result;
  }

  const checkPassword = () => { 
    const A = checkPassLenght();
    const B = checkPassHasCaps();
    const C = checkPassHasNumber();
    const D = checkPassHasSpecialChar();
    return !(A && B && C && D);
  }

  const checkEmail = () => {
    const { email } = input;
    const checkAt = email.includes('@');
    const checkDotCom = email.endsWith('.com');
    const checkDotComBr = email.endsWith('.com.br');

    return !(checkAt && (checkDotCom || checkDotComBr));
  }

  const checkName = () => {
    const { name } = input;

    return !(name.length > 5);
  }

  const buttonEnabler = () => {
    return checkPassword() || checkEmail() || checkName();
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(`/signup?email=${input.email}`)
      .then(response => response.json())
      .then(newWord => setMes(newWord))
  }

  return (
    <div className='login-container'>
    <form method='GET' className='login-form' onSubmit={ handleSubmit }>
      <h1>Create New User</h1>
      <label htmlFor="">
        Escreva seu Nome:
      <input 
        onChange={ handleChange }
        type="text"
        name='name'
        placeholder='Nome...'
        value={ input.name }
      />
      </label>
      <label htmlFor="">
        Escreva seu E-mail:
      <input 
        onChange={ handleChange }
        type="text"
        name='email'
        placeholder='Email...'
        value={ input.email }
      />
      </label>
      <label htmlFor="">
        Defina sua Senha:
      <input 
        onChange={ handleChange }
        type="password"
        name='password'
        placeholder='Senha...'
        value={ input.password }
      />
      <ul>
        <li id='li-01'>Mais que 5 characteres</li>
        <li id='li-02'>Deve possuir pelo menos um cáracter especial</li>
        <li id='li-03'>Deve possuir pelo menos um numeral</li>
        <li id='li-04'>Deve possuir pelo menos uma letra maiúscula</li>
      </ul>
      </label>
      <button type='submit' disabled={ buttonEnabler() }>Criar Usuário</button>
      <p>Já possui uma conta? <Link to="/login">Venha fazer o seu login</Link></p>
    </form>
    <h1>{ mes }</h1>
  </div>
  )
}

export default CreateUser;