import { useFavoritos } from "../context/FavoritosContext";

interface FavoriteButtonProps {
  id: number;
}

export default function FavoriteButton({ id }: FavoriteButtonProps) {
  const { isFavorito, toggleFavorito } = useFavoritos();
  const active = isFavorito(id);
  const label = active ? "Remover dos favoritos" : "Adicionar aos favoritos";

  return (
    <button
      className="fav"
      type="button"
      aria-label={label}
      aria-pressed={active}
      onClick={() => toggleFavorito(id)}
    >
      {active ? "★" : "☆"}
    </button>
  );
}
