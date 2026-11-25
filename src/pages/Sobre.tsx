import { ContactForm } from '../components/ContactForm';
import './Sobre.css';

export function Sobre() {
  return (
    <main className="sobre">
      <h1 className="sobre__titulo">Sobre o projeto</h1>

      <section className="sobre__secao">
        <p className="sobre__descricao">
          Esta Pokédex foi feita em React com TypeScript e consome a PokéAPI
          para listar Pokémon, mostrar os detalhes de cada um e guardar seus
          favoritos.
        </p>
      </section>

      <section className="sobre__secao">
        <h2 className="sobre__subtitulo">Tecnologias</h2>
        <ul className="sobre__lista">
          <li className="sobre__item">React</li>
          <li className="sobre__item">TypeScript</li>
          <li className="sobre__item">Vite</li>
          <li className="sobre__item">react-router-dom</li>
          <li className="sobre__item">PokéAPI</li>
        </ul>
      </section>

      <section className="sobre__secao sobre__secao--contato">
        <h2 className="sobre__subtitulo">Fale com a gente</h2>
        <ContactForm />
      </section>
    </main>
  );
}

export default Sobre;