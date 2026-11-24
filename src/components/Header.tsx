import { NavLink } from "react-router-dom";
import { useFavoritos } from "../context/FavoritosContext";

export default function Header() {
  const { favoritos } = useFavoritos();
  return (
    <header className="header">
      <h1 className="logo">Pokédex</h1>
      <nav className="menu">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/explorar">Explorar</NavLink>
        <NavLink to="/favoritos">Favoritos ({favoritos.length})</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
      </nav>
    </header>
  );
}
