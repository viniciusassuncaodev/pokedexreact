import { useMemo, useState } from "react";
import PokemonCard from "../components/PokemonCard";
import SearchBar from "../components/SearchBar";
import useFetch from "../hooks/useFetch";
import { getPokemonList } from "../services/api";
import type { PokemonListItem } from "../types/pokemon";

export default function Explorar() {
  const [busca, setBusca] = useState("");
  const { data, loading, error } = useFetch<PokemonListItem[]>(
    () => getPokemonList(151, 0),
    [],
  );

  const filtrados = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    return data?.filter((pokemon) => pokemon.name.includes(termo)) ?? [];
  }, [data, busca]);

  return (
    <section>
      <h1>Explorar Pokémon</h1>
      <SearchBar value={busca} onChange={setBusca} />

      {loading && <p>Carregando Pokémon...</p>}
      {error && <p className="erro">{error}</p>}
      {!loading && !error && filtrados.length === 0 && (
        <p>Nenhum Pokémon encontrado</p>
      )}
      {!loading && !error && filtrados.length > 0 && (
        <div className="grid">
          {filtrados.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </div>
      )}
    </section>
  );
}
