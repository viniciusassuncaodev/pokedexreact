import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { useFavoritos } from '../context/FavoritosContext';
import { getPokemonDetail } from '../services/api';
import { FavoriteButton } from '../components/FavoriteButton';
import './Favoritos.css';

// Deixa a primeira letra do nome em maiúscula (ex.: "pikachu" -> "Pikachu")
function capitalizar(texto: string) {
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

export function Favoritos() {
  const { favoritos } = useFavoritos();
  const vazio = favoritos.length === 0;

  // O contexto guarda só ids: buscamos os dados de todos de uma vez
  const { data, loading, error } = useFetch(
    () => Promise.all(favoritos.map((id) => getPokemonDetail(id))),
    [favoritos.join(',')],
  );

  return (
    <main className="favoritos">
      <h1 className="favoritos__titulo">Favoritos</h1>

      {vazio && (
        <div className="favoritos__vazio">
          <p className="favoritos__msg">Nenhum favorito ainda.</p>
          <Link to="/explorar" className="favoritos__link">
            Explorar Pokémon
          </Link>
        </div>
      )}

      {!vazio && loading && <p className="favoritos__msg">Carregando...</p>}

      {!vazio && error && (
        <p className="favoritos__msg favoritos__msg--erro">
          Não foi possível carregar seus favoritos. Tente novamente.
        </p>
      )}

      {!vazio && !loading && !error && data && (
        <ul className="favoritos__grade">
          {data.map((pokemon) => {
            const nome = capitalizar(pokemon.name);

            return (
              <li key={pokemon.id} className="favoritos__card">
                <Link
                  to={`/pokemon/${pokemon.id}`}
                  className="favoritos__link-card"
                >
                  <img
                    src={pokemon.image}
                    alt={nome}
                    className="favoritos__imagem"
                  />
                  <h2 className="favoritos__nome">{nome}</h2>
                </Link>
                <FavoriteButton id={pokemon.id} />
              </li>
            );
          })}
        </ul>
      )}
    </main>
  );
}

export default Favoritos;