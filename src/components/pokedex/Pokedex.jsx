//CSS import 
import './Pokedex.css';
import Search from '../search/Search';
import PokemonList from '../pokemonList/PokemonList';

function Pokedex(){
    return(
        <div className = 'pokedex-wrapper'>
            <h1>POKEMON</h1>
            <Search />
            <PokemonList />
        </div>
    )
}

export default Pokedex;