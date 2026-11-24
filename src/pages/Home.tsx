import { Link } from "react-router-dom";
import PokemonCard from "../components/PokemonCard";
import useFetch from "../hooks/useFetch";
import { getPokemonList } from "../services/api";
import type { PokemonListItem } from "../types/pokemon";

export default function Home() {
  const { data, loading, error } = useFetch<PokemonListItem[]>(
    () => getPokemonList(6, 0),
    [],
  );

  return (
    <>
      <section className="hero">
        <h1>Bem-vindo à Pokédex</h1>
        <p>
          Explore o mundo Pokémon, descubra detalhes e guarde seus favoritos.
        </p>
        <Link className="botao" to="/explorar">
          Explorar agora
        </Link>
      </section>

      <section>
        <h2>Pokémon em destaque</h2>
        {loading && <p>Carregando Pokémon...</p>}
        {error && <p className="erro">{error}</p>}
        {data && (
          <div className="grid">
            {data.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
