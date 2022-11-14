import axios from "axios";
import { IPokemonModel } from '../Models/Pokemon'


const getRandom = (arr_length: number) => {
    return Math.floor(Math.random() * arr_length)
}


export const getRandomPokemon = async () => {
    let response = await axios("https://pokeapi.co/api/v2/pokemon?limit=100000")
    let data = await response['data']
    let length_arr: number = await data['results'].length
    let pokemon_list: IPokemonModel[] = []
    let number_out: number[] = []


    while (pokemon_list.length < 4) {
        let random = getRandom(length_arr)
        if (number_out.includes(random)) {
            random = getRandom(length_arr)
        }

        number_out.push(random)
        let pokemonUrl = data['results'][random]
        let pokemon: IPokemonModel = await getPokemonData(pokemonUrl.url);
        if (pokemon['sprites']['other']['official-artwork']['front_default'] == null) {
            continue
        }
        pokemon_list.push(pokemon)
    }
    return pokemon_list
}

export const getPokemonData = async (url: string) => {
    let response = await axios.get<IPokemonModel>(url)
    let data: IPokemonModel = await response.data;
    return data
} 