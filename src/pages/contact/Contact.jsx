import { useState } from 'react';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        nome: '',
        cpf: '',
        email: '',
        mensagem: '',
        aceitaTermos: false
    });

    const [emailError, setEmailError] = useState('');
    const [cpfError, setCpfError] = useState('');

    const mascaraCpf = (valor) => {
        let cpfLimpo = valor.replace(/\D/g, "");
        cpfLimpo = cpfLimpo.replace(/(\d{3})(\d)/, "$1.$2");
        cpfLimpo = cpfLimpo.replace(/(\d{3})(\d)/, "$1.$2");
        cpfLimpo = cpfLimpo.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        return cpfLimpo;
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        let novoValor = type === 'checkbox' ? checked : value;

        if (name === 'cpf') {
            novoValor = mascaraCpf(novoValor);
            setCpfError('');
        }

        if (name === 'email') {
            setEmailError('');
        }

        setFormData({
            ...formData,
            [name]: novoValor
        });
    };

    const validarEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const validarCpfOficial = (cpf) => {
        const cpfLimpo = cpf.replace(/\D/g, '');

        if (cpfLimpo.length !== 11) return false;
        if (/^(\d)\1+$/.test(cpfLimpo)) return false;

        let soma = 0;
        let resto;

        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpfLimpo[i]) * (10 - i);
        }

        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpfLimpo[9])) return false;

        soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpfLimpo[i]) * (11 - i);
        }

        resto = (soma * 10) % 11;
        if (resto === 10 || resto === 11) resto = 0;
        if (resto !== parseInt(cpfLimpo[10])) return false;

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validarEmail(formData.email)) {
            setEmailError('Por favor, insira um e-mail válido.');
            return;
        }

        if (!validarCpfOficial(formData.cpf)) {
            setCpfError('Insira um CPF válido!');
            return;
        }

        console.log('Dados enviados:', formData);
        alert('Mensagem enviada com sucesso!');

        setFormData({
            nome: '',
            cpf: '',
            email: '',
            mensagem: '',
            aceitaTermos: false
        });
    };

    return (
        <main className="contact-page">
            <div className="contact-container">

                <div className="contact-info">
                    <h2>Entre em Contato</h2>
                    <p>
                        Se você tem dúvidas, sugestões ou apenas quer dizer oi, estamos aqui para ouvir! Preencha o formulário ao lado e nossa equipe entrará em contato o mais breve possível.
                    </p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label htmlFor="nome">Nome</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="cpf">CPF</label>
                        <input
                            type="text"
                            id="cpf"
                            name="cpf"
                            value={formData.cpf}
                            onChange={handleChange}
                            required
                            className={cpfError ? 'input-error' : ''}
                        />
                        {cpfError && <span className="error-text">{cpfError}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={emailError ? 'input-error' : ''}
                        />
                        {emailError && <span className="error-text">{emailError}</span>}
                    </div>

                    <div className="form-group">
                        <label htmlFor="mensagem">Mensagem</label>
                        <textarea
                            id="mensagem"
                            name="mensagem"
                            value={formData.mensagem}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group checkbox-group">
                        <input
                            type="checkbox"
                            id="aceitaTermos"
                            name="aceitaTermos"
                            checked={formData.aceitaTermos}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="aceitaTermos">Aceito os termos</label>
                    </div>

                    <button type="submit" className="submit-btn">
                        Enviar Mensagem
                    </button>

                </form>
            </div>
        </main>
    );
}

export default Contact;