import { useEffect, useState } from "react";
import CardProduto from "./components/CardProduto";
import {produtos} from "./produtos";

/*function App(){

    const [minimo, setMinimo] = useState(0);
    const [maximo, setMaximo] = useState(0);

    const valorMinimo = (event) =>{
        setMinimo(event.target.value);
    }
    
    const valorMaximo = (event) =>{
        setMaximo(event.target.value);
    }

    const filtrarProduto = produtos.filter((produto) => {
        return minimo > 0 || maximo > 0 ? produto.preco >= minimo && produto.preco <= maximo: true;
    })

  return(
    <div>
        <div>
                <label>Minimo:</label>
                <input type="text" value={minimo} onChange={valorMinimo}></input>
                <label>Maximo:</label>
                <input type="text" value={maximo} onChange={valorMaximo}></input>
        </div>
      {filtrarProduto.map((produto) => {
        return <CardProduto nome={produto.nome} descricao={produto.descricao} preco={produto.preco}/>
      })}
    </div>
  );
}*/

const nomes = ["José", "Maria", "Ana"];

function App(){

  const [nome, setNome] = useState("");
  
  useEffect(()=> {

    procurarNome();

  },[nome]);

  const procurarNome = (nomeProcurado) => {
    const achouNome = nomes.filter((nomes)=>{
      return nomes.includes(nome)
    })

    return achouNome;
  }

  const handleNome = (event) => {
    setNome(event.target.value);
  }
  
  return (
    <div>
      <div>
        <label>Nome: </label>    
        <input type="text" value={nome} onChange={handleNome}></input>
      </div>
      {procurarNome().map((nome)=>{
        return <p>{nome}</p>
      })}
    </div>
  )
}

export default App;