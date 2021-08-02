class PokeService {
    static getPokemons = async (limit = 10, offset = 0) =>{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
            .then((response) => response.json())
            .then((data) => data.results);
        return response;
    }

    static getPokemonById = async (id) =>{
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
            .then((response) => response.json())
        return response;
    }
}

const pokeStorage = {
    set: (key, value) => {
        localStorage.setItem(key, JSON.stringify(value))
    },

    get: (key) => {
       return  JSON.parse(localStorage.getItem(key) || '')
    },
}

const sortByHeight = (pokemons) => pokemons.sort((a,b) => a.height - b.height);

const sortByWeight = (pokemons) => pokemons.sort((a,b) => a.weight - b.weight);

const getPokemons = async () =>{
    const pokemons = await PokeService.getPokemons();
    console.log(pokemons)

    const pokemonsData = await Promise.all(pokemons.map((pokemon) =>{
        const pokemonID = pokemon.url.match(/[0-9]{1,}/g)[1];
        return PokeService.getPokemonById(pokemonID);
    }));

    const mappedPokemons = pokemonsData.map((pokemon) => ({
        id: pokemon.id,
        name: pokemon.name,
        height: pokemon.height,
        weight: pokemon.weight,
    }));

    pokeStorage.set('pokemons', mappedPokemons);
    const gotPokemons = pokeStorage.get('pokemons');
    console.log(sortByHeight([...gotPokemons]));
    console.log(sortByWeight([...gotPokemons]));

    return gotPokemons;
}

getPokemons();
