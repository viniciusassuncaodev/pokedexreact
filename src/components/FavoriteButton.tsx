import type { MouseEvent } from "react";
import { useFavoritos } from "../context/FavoritosContext";
import "./FavoriteButton.css";

interface FavoriteButtonProps {
  id: number;
}

export function FavoriteButton({ id }: FavoriteButtonProps) {
  const { isFavorito, toggleFavorito } = useFavoritos();
  const favorito = isFavorito(id);

  function handleClick(event: MouseEvent<HTMLButtonElement>) {
    // Se o botão estiver dentro de um card clicável (Link), não navega ao favoritar
    event.preventDefault();
    event.stopPropagation();
    toggleFavorito(id);
  }

  return (
    <button
      type="button"
      className={`favorite-button ${favorito ? "favorite-button--ativo" : ""}`}
      onClick={handleClick}
      aria-pressed={favorito}
      aria-label={favorito ? "Remover dos favoritos" : "Adicionar aos favoritos"}
      title={favorito ? "Remover dos favoritos" : "Adicionar aos favoritos"}
    >
      {favorito ? "♥" : "♡"}
    </button>
  );
}

export default FavoriteButton;