import { useState } from "react";



function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');

  const [user, setUser] = useState({});

  function handleRegister(e) {
    e.preventDefault();
    alert('Usuario registrado com sucesso')

    setUser({
      nome: nome,
      idade: idade,
      email: email
    })
  }

  return (
    <div>
      <h1>Cadastrando Usuario</h1>

      <form onSubmit={handleRegister}>
        <label>Nome: </label><br />
        <input type="text" value={nome} placeholder="Digite seu nome" onChange={ (e) => setNome(e.target.value) } />
        <label>Email: </label>
        <input type="text" value={email} placeholder="Digite seu email" onChange={ (e) => setEmail(e.target.value) } /> <br />
        <label>Idade: </label><br />
        <input type="text" value={idade} placeholder="Digite sua idade" onChange={ (e) => setIdade(e.target.value) }/> <br />

        <button type="submit">Registrar</button>
      </form>

      <br />
      <div>
        <span>Bem vindo: {user.nome}</span> <br />
        <span>Idade: {user.idade}</span> <br />
        <span>Email: {user.email}</span>
      </div>
    </div>
  )
}

export default App;
