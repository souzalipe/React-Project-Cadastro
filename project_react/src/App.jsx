import { useState } from 'react'
import React from 'react';
import './App.css'

function App() {
  const [values, setValues] = useState({
    nome: "",
    idade: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const handleNome = (event) => {
    setValues({ ...values, nome: event.target.value });
  }

  const handleIdade = (event) => {
    setValues({ ...values, idade: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.nome && values.idade) {
      setValid(true);
    }
    setSubmitted(true);
  }

  return (
    <div className='form-container'>
      <form className='register-form' onSubmit={handleSubmit}>
        {submitted && valid ? <div className='success-message'>Registro feito com sucesso!</div> : null}

        <input
          onChange={handleNome}
          value={values.nome}
          type="text"
          className='form-field'
          placeholder='Nome'
          name='nome'
        />
        {submitted && !values.nome ? <span>Coloque seu Nome</span> : null}

        <input
          onChange={handleIdade}
          value={values.idade}
          type="text"
          className='form-field'
          placeholder='Idade'
          name='idade'
        />
        {submitted && !values.idade ? <span>Coloque sua Idade</span> : null}

        <button className="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}

export default App;
