import { useState } from "react";



function App() {
  const [input, setInput] = useState('');
  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz',
    'Estudar React JS'
  ]);

  const [user, setUser] = useState({});

  function handleRegister(e) {
    e.preventDefault();

    // Pego todos dados que tem tarefas e adiciono mais os dados que tem em input
    setTarefas([...tarefas, input]);
    setInput('');
  }

  return (
    <div>
      <h1>Cadastrando Usuario</h1>

      <form onSubmit={handleRegister}>
        <label>Nome da tarefa: </label><br />
        <input type="text" value={input} placeholder="Digite uma tarefa" onChange={ (e) => setInput(e.target.value) } />
        
        <button type="submit">Registrar</button>
      </form>

      <br />
      <ul>
        {tarefas.map( tarefa => (
          <li key={tarefa}>
            {tarefa}
          </li>
        ) )}
      </ul>
    </div>
  )
}

export default App;
