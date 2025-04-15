const CardProduto = (props) => {
    return(
        <div>
            <h1>{props.nome}</h1>
            <h2>Descrição do produto: {props.descricao}</h2>
            <h2>Preço: R$ {props.preco}</h2>
            <button>Comprar</button>
        </div>
    );
}

export default CardProduto