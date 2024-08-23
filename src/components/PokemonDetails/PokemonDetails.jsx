//CSS imports
import "./PokemonDetails.css";

import { Link} from "react-router-dom";
import Pokemon from "../Pokemon/Pokemon";
//Custom hook
import usePokemon from "../../hooks/usePokemon";

function PokemonDetails({pokemonName}) {

  
  const [pokemon, pokemonListState] = usePokemon(pokemonName);

  return (
    <>
      <h1 className="pokedex-redirect">
        <Link to="/"> POKEDEX </Link>
      </h1>
      {pokemon && (
        <div className="pokemon-detials-wrapper">
          <div className="pokemon-details-name">{pokemon.name}</div>

          <div className="pokemon-details-image">
            <img src={pokemon.image} />
          </div>

          <div className="pokemon-details-attr">
            <div>height : {pokemon.height}</div>
            <div>weight : {pokemon.weight}</div>
          </div>

          <div className="pokemon-details-types">
            <h1>Type :</h1>
            {pokemon.types.map((t) => (
              <span className="type" key={t.type.name}>
                {t.type.name}
              </span>
            ))}
          </div>
        </div>
      )}
      <div className="similar-pokemons">
        <h2> SIMILAR POKEMONS</h2>
        <div className="pokemon-similar-boxes">
          {pokemonListState.pokemonList.length > 0 &&
            pokemonListState.pokemonList.map((pokemon) => (
              <Pokemon
                name={pokemon.name}
                key={pokemon.id}
                url={pokemon.image}
                id={pokemon.id}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default PokemonDetails;
