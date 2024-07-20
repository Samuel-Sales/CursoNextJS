import { useState } from "react";
import Nome from "./components/Nome";


function App() {
  const [aluno, setAluno] = useState('Desenvolvedor vagabundo');

  function handleChangeName(nome) {
    setAluno(nome);
  }

  return (
    <div>
      <h1>Componente App</h1> 
      <h2>Ola: {aluno}</h2>
      <button onClick={() => handleChangeName('Samuel W')}>
        Mudar nome
      </button>
    </div>
  )
}

export default App;
