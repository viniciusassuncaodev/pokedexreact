import { Link } from "react-router-dom";
import type { PokemonListItem } from "../types/pokemon";
import FavoriteButton from "./FavoriteButton";

interface PokemonCardProps {
  pokemon: PokemonListItem;
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const pokemonId = String(pokemon.id).padStart(3, "0");

  return (
    <article className="card">
      <FavoriteButton id={pokemon.id} />
      <Link className="card-link" to={`/pokemon/${pokemon.id}`}>
        <img src={pokemon.image} alt={pokemon.name} loading="lazy" />
        <span className="card-id">#{pokemonId}</span>
        <h2>{pokemon.name}</h2>
      </Link>
    </article>
  );
}
