import "./Card.css";

function Card({ nome, descricao, preco, imagem }) {
  return (
    <div className="card">
      <div className="card-image-container">
        <img src={imagem} alt={nome} className="card-image" />
      </div>

      <div className="card-content">
        <h3 className="card-title">{nome}</h3>
        <p className="card-description">{descricao}</p>

        <div className="card-footer">
          <span className="card-price">A partir de {preco}</span>
          <button
            className="card-btn"
            onClick={() =>
              window.open(`https://www.google.com/maps?q=${nome}`, "_blank")
            }
          >
            Ver localização
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
