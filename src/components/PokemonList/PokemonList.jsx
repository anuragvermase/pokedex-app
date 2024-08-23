// CSS imports
import './PokemonList.css';

import Pokemon from '../Pokemon/Pokemon';
import usePokemonList from '../../hooks/usePokemonList';


function PokemonList(){

    const DEFAULT_URL = "https://pokeapi.co/api/v2/pokemon";

    //custom hooks
    const [pokemonListState, setPokemonListState] = usePokemonList(DEFAULT_URL)


    return(
        <div className='pokemon-list-wrapper'>
            <div>
                <h1>Pokemon List</h1>
            </div>

            <div className='page-controls'>
                <button onClick={()=> setPokemonListState({...pokemonListState, pokedexUrl : pokemonListState.prevUrl})}>&#8592;</button>
                <button onClick={()=> setPokemonListState({...pokemonListState, pokedexUrl : pokemonListState.nextUrl})}>&#8594;</button>
            </div>

            <div className='pokemon-list'>
            {pokemonListState.pokemonList.map(pokemon => <Pokemon name = {pokemon.name} key = {pokemon.id} url = {pokemon.image} id = {pokemon.id} /> )}
            </div>

        </div>
    )
}

export default PokemonList;