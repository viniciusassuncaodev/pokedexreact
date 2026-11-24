import { Link, useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { getPokemonDetail } from '../services/api';
import { PokemonDetails } from '../components/PokemonDetails';
import './Detalhe.css';

export function Detalhe() {
  // Pega o :id da URL (ex.: /pokemon/25 -> id = "25")
  const { id } = useParams<{ id: string }>();

  // Busca o Pokémon; refaz a busca sempre que o id da URL mudar
  const { data, loading, error } = useFetch(
    () => getPokemonDetail(id ?? ''),
    [id]
  );

  return (
    <main className="detalhe">
      <Link to="/explorar" className="detalhe__voltar">
        ← Voltar
      </Link>

      {loading && <p className="detalhe__msg">Carregando...</p>}

      {error && (
        <p className="detalhe__msg detalhe__msg--erro">
          Não foi possível carregar este Pokémon. Tente novamente.
        </p>
      )}

      {!loading && !error && data && <PokemonDetails pokemon={data} />}
    </main>
  );
}

export default Detalhe;