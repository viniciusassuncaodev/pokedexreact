export interface PokemonListItem {
  id: number;
  name: string;
  image: string;
}

export interface PokemonDetail {
  id: number;
  name: string;
  image: string;
  height: number;
  weight: number;
  types: string[];
  abilities: string[];
  stats: { name: string; value: number }[];
}