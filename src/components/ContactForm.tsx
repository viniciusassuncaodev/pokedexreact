import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import './ContactForm.css';

type Campos = { nome: string; email: string; mensagem: string };
type Erros = Partial<Record<keyof Campos, string>>;

const VALORES_INICIAIS: Campos = { nome: '', email: '', mensagem: '' };
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Confere os campos e devolve um objeto só com os erros encontrados
function validar(valores: Campos): Erros {
  const erros: Erros = {};

  if (valores.nome.trim() === '') {
    erros.nome = 'Informe seu nome.';
  }

  if (valores.email.trim() === '') {
    erros.email = 'Informe seu e-mail.';
  } else if (!EMAIL_REGEX.test(valores.email.trim())) {
    erros.email = 'Informe um e-mail válido (ex.: nome@dominio.com).';
  }

  if (valores.mensagem.trim().length < 10) {
    erros.mensagem = 'A mensagem deve ter pelo menos 10 caracteres.';
  }

  return erros;
}

export function ContactForm() {
  const [valores, setValores] = useState<Campos>(VALORES_INICIAIS);
  const [erros, setErros] = useState<Erros>({});
  const [enviado, setEnviado] = useState(false);

  // Um único handler atende os três campos, usando o atributo name
  function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setValores((anterior) => ({ ...anterior, [name]: value }));
    setEnviado(false);
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const novosErros = validar(valores);
    setErros(novosErros);

    if (Object.keys(novosErros).length > 0) {
      setEnviado(false);
      return;
    }

    // Sem servidor: só limpa os campos e mostra o sucesso
    setValores(VALORES_INICIAIS);
    setEnviado(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__campo">
        <label htmlFor="contato-nome" className="contact-form__label">
          Nome
        </label>
        <input
          id="contato-nome"
          name="nome"
          type="text"
          className={`contact-form__input${erros.nome ? ' contact-form__input--erro' : ''}`}
          value={valores.nome}
          onChange={handleChange}
          aria-invalid={erros.nome ? true : undefined}
          aria-describedby={erros.nome ? 'contato-nome-erro' : undefined}
        />
        {erros.nome && (
          <p id="contato-nome-erro" className="contact-form__erro" role="alert">
            {erros.nome}
          </p>
        )}
      </div>

      <div className="contact-form__campo">
        <label htmlFor="contato-email" className="contact-form__label">
          E-mail
        </label>
        <input
          id="contato-email"
          name="email"
          type="email"
          className={`contact-form__input${erros.email ? ' contact-form__input--erro' : ''}`}
          value={valores.email}
          onChange={handleChange}
          aria-invalid={erros.email ? true : undefined}
          aria-describedby={erros.email ? 'contato-email-erro' : undefined}
        />
        {erros.email && (
          <p id="contato-email-erro" className="contact-form__erro" role="alert">
            {erros.email}
          </p>
        )}
      </div>

      <div className="contact-form__campo">
        <label htmlFor="contato-mensagem" className="contact-form__label">
          Mensagem
        </label>
        <textarea
          id="contato-mensagem"
          name="mensagem"
          rows={4}
          className={`contact-form__textarea${erros.mensagem ? ' contact-form__input--erro' : ''}`}
          value={valores.mensagem}
          onChange={handleChange}
          aria-invalid={erros.mensagem ? true : undefined}
          aria-describedby={erros.mensagem ? 'contato-mensagem-erro' : undefined}
        />
        {erros.mensagem && (
          <p id="contato-mensagem-erro" className="contact-form__erro" role="alert">
            {erros.mensagem}
          </p>
        )}
      </div>

      <button type="submit" className="contact-form__botao">
        Enviar mensagem
      </button>

      {enviado && (
        <p className="contact-form__sucesso" role="status">
          Mensagem enviada com sucesso! Obrigado pelo contato.
        </p>
      )}
    </form>
  );
}

export default ContactForm;