/*import { useState } from "react";
import ListaPessoas from "./components/ListaPessoas";
import styled from "styled-components"*/
import CardProduto from "./components/CardProduto";
import {produtos} from "./produtos";

function App(){
  return(
    <div>
      {produtos.map((produto) => {
        return <CardProduto nome={produto.nome} descricao={produto.descricao}/>
      })}
    </div>
  );
}

/*
function App(){

  const [step, setStep] = useState(0);

  const mudarStep = () =>{
    switch(step){

      case -1:
        return <div>Iniciando Cadastro</div>
      break;
      
      case 0:
        return (
          <div>
            <h1>Primeira parte do cadastro</h1>
            <label htmlFor="">Nome</label>
            <input />
          </div>
        );
      break;
      
      case 1:
        return (
          <div>
            <h1>Segunda parte do cadastro</h1>
            <label htmlFor="">Sobrenome</label>
            <input />
          </div>
        );
      break;
      
      default:
        return <div>Finalizado</div>

    }
  }

  const proximoStep = () => {
    setStep( step + 1);
  }

  const anteriorStep = () => {
    setStep( step - 1);
  }

  return(
    <div>
      {mudarStep()}
      <button onClick={anteriorStep}>Anterior</button>
      <button onClick={proximoStep}>Proximo</button>
    </div>
  );
}

function App(){

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleNome = (event) => {
    setNome(event.target.value)
  }

  const handleEmail = (event) => {
    setEmail(event.target.value)
  }

  const handleSenha = (event) => {
    setSenha(event.target.value)
  }

  function enviarForm(event){
    event.preventDefault();
    console.log(nome, email, senha);
  }

  return (
    <div>
      <form onSubmit={enviarForm}>
        <label>Nome: </label>
        <input type="text" value={nome} onChange={handleNome}></input><br></br>

        <label>E-mail: </label>
        <input type="email" value={email} onChange={handleEmail}></input><br></br>

        <label>Senha: </label>
        <input type="password" value={senha} onChange={handleSenha}></input><br></br> 

        <button type="submit">Enviar</button>  
      </form>
    </div>
  );
}

function App(){

  const [valor, setValor] = useState(1500);

  const incrementarValor = () => {
    setValor(valor + 1);
  }

  const decrementarValor = () => {
    setValor(valor - 1);
  }

  return <div>
    <p>O numero é: {valor} </p>
    <button onClick={incrementarValor}>Incrementar</button>
    <button onClick={decrementarValor}>Decrementar</button>
  </div>;

}

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
`

function App() {
  const pessoas = [
    { nome: "Gabriela", idade: "18" },
    { nome: "Ana", idade: "30" },
    { nome: "Rafaele", idade: "21" },
    { nome: "Maria", idade: "40" },
    { nome: "Felipe", idade: "42" }
  ];

  return (
    <MainContainer>
      {pessoas.map((pessoa, i) => (
        <ListaPessoas 
          key={i} // Adiciona uma chave única para cada item da lista
          nome={pessoa.nome}
          idade={pessoa.idade}
        />
      ))}
    </MainContainer>
  );
}*/

export default App;