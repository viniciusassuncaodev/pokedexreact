import type { PokemonDetail } from '../types';
import { TypeBadge } from './TypeBadge';
import { FavoriteButton } from './FavoriteButton';
import './PokemonDetails.css';

interface PokemonDetailsProps {
  pokemon: PokemonDetail;
}

// Valor máximo de um stat na PokéAPI, usado para calcular a largura da barra
const MAX_STAT = 255;

export function PokemonDetails({ pokemon }: PokemonDetailsProps) {
  const { id, name, image, height, weight, types, abilities, stats } = pokemon;

  return (
    <article className="pokemon-details">
      <header className="pokemon-details__header">
        <h1 className="pokemon-details__name">
          #{id} {name}
        </h1>
        <FavoriteButton id={id} />
      </header>

      <div className="pokemon-details__body">
        <img
          className="pokemon-details__image"
          src={image}
          alt={`Imagem do Pokémon ${name}`}
        />

        <div className="pokemon-details__info">
          <section>
            <h2>Tipos</h2>
            <div className="pokemon-details__types">
              {types.map((type) => (
                <TypeBadge key={type} type={type} />
              ))}
            </div>
          </section>

          <section>
            <h2>Medidas</h2>
            <p>Altura: {(height / 10).toFixed(1)} m</p>
            <p>Peso: {(weight / 10).toFixed(1)} kg</p>
          </section>

          <section>
            <h2>Habilidades</h2>
            <ul className="pokemon-details__abilities">
              {abilities.map((ability) => (
                <li key={ability}>{ability}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <section className="pokemon-details__stats">
        <h2>Estatísticas</h2>
        {stats.map((stat) => (
          <div key={stat.name} className="stat">
            <span className="stat__name">{stat.name}</span>
            <span className="stat__value">{stat.value}</span>
            <div className="stat__track">
              <div
                className="stat__bar"
                style={{ width: `${Math.min((stat.value / MAX_STAT) * 100, 100)}%` }}
                role="progressbar"
                aria-valuenow={stat.value}
                aria-valuemin={0}
                aria-valuemax={MAX_STAT}
                aria-label={stat.name}
              />
            </div>
          </div>
        ))}
      </section>
    </article>
  );
}

export default PokemonDetails;