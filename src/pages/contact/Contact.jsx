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

        // ⚠️ CORREÇÃO: reset completo
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
                    <h2>Vamos conversar?</h2>
                    <p>
                        Quer escalar seu próximo projeto? Nossa equipe está pronta para ajudar.
                    </p>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>

                    <div className="form-group">
                        <label>Nome</label>
                        <input
                            type="text"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label>CPF</label>
                        <input
                            type="text"
                            name="cpf"
                            value={formData.cpf}
                            onChange={handleChange}
                            required
                            className={cpfError ? 'input-error' : ''}
                        />
                        {cpfError && <span className="error-text">{cpfError}</span>}
                    </div>

                    <div className="form-group">
                        <label>E-mail</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className={emailError ? 'input-error' : ''}
                        />
                        {emailError && <span className="error-text">{emailError}</span>}
                    </div>

                    <div className="form-group">
                        <label>Mensagem</label>
                        <textarea
                            name="mensagem"
                            value={formData.mensagem}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group checkbox-group">
                        <input
                            type="checkbox"
                            name="aceitaTermos"
                            checked={formData.aceitaTermos}
                            onChange={handleChange}
                            required
                        />
                        <label>Aceito os termos</label>
                    </div>

                    <button type="submit">Enviar Mensagem</button>

                </form>
            </div>
        </main>
    );
}

export default Contact;