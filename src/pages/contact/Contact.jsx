import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [form, setForm] = useState({
    nome: "",
    cpf: "",
    email: "",
    mensagem: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  
  const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    
    if (!form.nome || !form.cpf || !form.email || !form.mensagem) {
      setError("Preencha todos os campos!");
      setSuccess("");
      return;
    }

    
    if (!cpfRegex.test(form.cpf)) {
      setError("CPF inválido! Use o formato 000.000.000-00");
      setSuccess("");
      return;
    }

    
    setError("");
    setSuccess("Mensagem enviada com sucesso!");

    
    setForm({
      nome: "",
      cpf: "",
      email: "",
      mensagem: "",
    });
  }

  return (
    <main className="contact-container">
      <div className="contact-text">
        <h1>Vamos conversar?</h1>
        <p>
          Quer escalar seu próximo projeto? Nossa equipe está pronta para te ajudar.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Nome</label>
        <input
          name="nome"
          value={form.nome}
          onChange={handleChange}
          placeholder="Seu nome"
        />

        <label>CPF</label>
        <input
          name="cpf"
          value={form.cpf}
          onChange={handleChange}
          placeholder="000.000.000-00"
        />

        <label>E-mail</label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="seu@email.com"
        />

        <label>Mensagem</label>
        <textarea
          name="mensagem"
          value={form.mensagem}
          onChange={handleChange}
          placeholder="Como podemos te ajudar?"
        />

        {error && <p className="error">{error}</p>}
        {success && <p className="success">{success}</p>}

        <button type="submit">Enviar Mensagem</button>
      </form>
    </main>
  );
}

export default Contact;