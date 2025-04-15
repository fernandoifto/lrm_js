const ListaPessoas = ({nome, idade}) => {
    return (
        <div className="MainContainer">
          <h2>Meu nome: {nome}</h2>
          <h2>Idade: {idade} </h2>
        </div>
    );
}

export default ListaPessoas