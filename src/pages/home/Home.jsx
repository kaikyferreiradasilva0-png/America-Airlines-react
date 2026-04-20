import "./Home.css";

function Home() {
  const destinos = [
    {
      id: 1,
      nome: "Caribe",
      descricao: "Praias paradisíacas e águas cristalinas",
      preco: "A partir de R$ 3.500",
    },
    {
      id: 2,
      nome: "Paris",
      descricao: "A cidade luz e seus encantos",
      preco: "A partir de R$ 5.200",
    },
    {
      id: 3,
      nome: "Tóquio",
      descricao: "Tradição e tecnologia em harmonia",
      preco: "A partir de R$ 6.800",
    },
    {
      id: 4,
      nome: "Nova York",
      descricao: "A cidade que nunca dorme",
      preco: "A partir de R$ 4.900",
    },
  ];

  return (
    <main>

      
      <section className="hero">
        <div className="hero-content">
          <h1>Descubra o Mundo</h1>
          <p>As melhores ofertas para sua próxima aventura</p>
          <button>Explorar Destinos</button>
        </div>
      </section>

      
      <section className="search-section">
        <div className="search-box">
          <h3>Buscar Viagem</h3>

          <div className="search-form">
            <input type="text" placeholder="Para onde?" />
            <input type="date" />
            <input type="number" placeholder="Passageiros" min="1" />
            <button>Buscar</button>
          </div>
        </div>
      </section>

      
      <section className="destinos">
        <h2>Destinos Populares</h2>

        <div className="destinos-grid">
          {destinos.map((item) => (
            <div key={item.id} className="card">
              <div className="card-img"></div>

              <h3>{item.nome}</h3>
              <p>{item.descricao}</p>

              <div className="card-footer">
                <span>{item.preco}</span>
                <button>Ver Mais</button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}

export default Home;