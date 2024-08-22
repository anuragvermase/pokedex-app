import axios from 'axios'; 
async function downloadPokemons(pokemonListState, setPokemonListState,defaultUrl, limit = 20) {
  const response = await axios.get(
    pokemonListState.pokedexUrl ? pokemonListState.pokedexUrl : defaultUrl
  );

  let pokemonResult = response.data.results ? response.data.results : response.data.pokemon; //array of pokemons
  pokemonResult = pokemonResult.slice(0,limit)

  // setNextUrl(response.data.next);
  // setPrevUrl(response.data.previous);
  // setPokemonListState((state) => ({...state, nextUrl : response.data.next, prevUrl : response.data.previous}))

//   const pokemonPromise = pokemonResult.map((pokemon) => axios.get(pokemon.url));
const pokemonPromise = pokemonResult.map((p)=> {
    if(p.url){
        return axios.get(p.url)
    }else if(p.pokemon.url){
        return axios.get(p.pokemon.url)
    }
});

  const pokemonListData = await axios.all(pokemonPromise);

  console.log(pokemonListData);
  

  const pokemonFinalList = pokemonListData.map((pokemonData) => {
    const pokemon = pokemonData.data;
    return {
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.sprites.other.dream_world.front_default,
      types: pokemon.types,
    };
  });

  // setPokemonList(pokemonFinalList);
  // setPokemonListState((state) => ({...state, pokemonList : pokemonFinalList,  nextUrl : response.data.next, prevUrl : response.data.previous}))
  setPokemonListState({
    ...pokemonListState,
    pokemonList: pokemonFinalList,
    nextUrl: response.data.next,
    prevUrl: response.data.previous,
  });
}
export default downloadPokemons;
