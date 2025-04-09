import ListaPessoas from "./components/ListaPessoas";

function App() {
  const pessoas = [
    { nome: "Gabriela", idade: "18" },
    { nome: "Ana", idade: "30" },
    { nome: "Rafaele", idade: "21" },
    { nome: "Maria", idade: "40" },
    { nome: "Felipe", idade: "42" }
  ];

  return (
    <div>
      {pessoas.map((pessoa, i) => (
        <ListaPessoas 
          key={i} // Adiciona uma chave única para cada item da lista
          nome={pessoa.nome}
          idade={pessoa.idade}
        />
      ))}
    </div>
  );
}

export default App;