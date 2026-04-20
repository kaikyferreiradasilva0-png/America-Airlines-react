import { useState } from "react";

import "./Home.css";
import Card from "../../components/principal/Card";
import Maps from "../../components/Maps";

function Home() {
  const [cidadeSelecionada, setCidadeSelecionada] = useState("");
  const destinos = [
    {
      id: 1,
      nome: "Caribe",
      descricao: "Praias paradisíacas e águas cristalinas",
      preco: "R$ 3.500",
      imagem: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      localizacao: "Caribbean",
    },
    {
      id: 2,
      nome: "Paris",
      descricao: "A cidade luz e seus encantos",
      preco: "R$ 5.200",
      imagem: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a",
      localizacao: "Paris France",
    },
    {
      id: 3,
      nome: "Tóquio",
      descricao: "Tradição e tecnologia em harmonia",
      preco: "R$ 6.800",
      imagem: "https://images.unsplash.com/photo-1505069446780-4ef442b5207f",
      localizacao: "Tokyo Japan",
    },
    {
      id: 4,
      nome: "Nova York",
      descricao: "A cidade que nunca dorme",
      preco: "R$ 4.900",
      imagem: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
      localizacao: "New York USA",
    },
    {
      id: 5,
      nome: "China",
      descricao: "A Grande Muralha e uma cultura milenar impressionante",
      preco: "R$ 5.500",
      imagem: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d",
      localizacao: "Great Wall of China",
    },
    {
      id: 6,
      nome: "Dubai",
      descricao: "Luxo, modernidade e experiências únicas",
      preco: "R$ 7.200",
      imagem: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
      localizacao: "Dubai UAE",
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
            <Card
              key={item.id}
              nome={item.nome}
              descricao={item.descricao}
              preco={item.preco}
              imagem={item.imagem}
              onVerMapa={setCidadeSelecionada}
            />
          ))}
        </div>
        <Maps cidade={cidadeSelecionada} />
      </section>
    </main>
  );
}

export default Home;
