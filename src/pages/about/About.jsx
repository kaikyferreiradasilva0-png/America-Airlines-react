function About() {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-texto">
          <h2>Por que escolher a America Airlines?</h2>

          <p>
            Com mais de 15 anos de experiência, oferecemos as melhores
            experiências de viagem para nossos clientes. Nossa equipe
            especializada está pronta para tornar seus sonhos realidade.
          </p>

          <div className="about-item">
            <h4>🌍 Destinos Exclusivos</h4>
            <p>Acesso a mais de 150 destinos em todo o mundo</p>
          </div>

          <div className="about-item">
            <h4>👥 Atendimento Personalizado</h4>
            <p>Consultores especializados para planejar sua viagem</p>
          </div>

          <div className="about-item">
            <h4>📅 Flexibilidade</h4>
            <p>Opções de pagamento e cancelamento facilitadas</p>
          </div>
        </div>

        <div className="about-imagem">
          <img
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470"
            alt="Viagem"
          />
        </div>
      </div>
    </section>
  );
}

export default About;