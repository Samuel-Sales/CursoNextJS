import Nome from "./components/Nome";

function App() {
  return (
    <div>
      <h1>Componente App</h1>
      <Nome aluno="Samuel" idade={25} /> <br />
      <Nome aluno="Matheus" idade={30} />
    </div>
  )
}

export default App;
