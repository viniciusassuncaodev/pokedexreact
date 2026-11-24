import type { PokemonDetail, PokemonListItem } from "../types/pokemon";

const API_URL = "https://pokeapi.co/api/v2";
const ARTWORK_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork";

interface ApiPokemonResult {
  name: string;
  url: string;
}

interface ApiPokemonList {
  results: ApiPokemonResult[];
}

interface ApiPokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: { type: { name: string } }[];
  abilities: { ability: { name: string } }[];
  stats: { base_stat: number; stat: { name: string } }[];
}

export async function getPokemonList(
  limit: number,
  offset: number,
): Promise<PokemonListItem[]> {
  const response = await fetch(`${API_URL}/pokemon?limit=${limit}&offset=${offset}`);

  if (!response.ok) {
    throw new Error("Não foi possível carregar os Pokémon.");
  }

  const data: ApiPokemonList = await response.json();

  return data.results.map(({ name, url }) => {
    const id = Number(url.split("/").filter(Boolean).at(-1));

    return {
      id,
      name,
      image: `${ARTWORK_URL}/${id}.png`,
    };
  });
}

export async function getPokemonDetail(
  idOrName: string | number,
): Promise<PokemonDetail> {
  const response = await fetch(`${API_URL}/pokemon/${idOrName}`);

  if (!response.ok) {
    throw new Error("Não foi possível carregar os detalhes do Pokémon.");
  }

  const data: ApiPokemon = await response.json();

  return {
    id: data.id,
    name: data.name,
    image: `${ARTWORK_URL}/${data.id}.png`,
    height: data.height,
    weight: data.weight,
    types: data.types.map(({ type }) => type.name),
    abilities: data.abilities.map(({ ability }) => ability.name),
    stats: data.stats.map(({ base_stat, stat }) => ({
      name: stat.name,
      value: base_stat,
    })),
  };
}
