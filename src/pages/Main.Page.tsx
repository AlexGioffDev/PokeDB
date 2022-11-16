import React, { useEffect, useState } from "react";
import { PokemonList } from "../Components/PokemonList/PokemonList.Components";
//import pokemonsMock from "../utilies/Pokemon.mock.json";
import { getRandomPokemon } from "../Services/Pokemon";
import { IPokemonModel } from "../Models/Pokemon";
import { Loading } from "../Components/Loading/Loading.Components";

export const MainPage = () => {
  const [pokemonsList, setPokemons] = useState<IPokemonModel[] | []>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    const loadPokemon = async () => {
      let pokes = await getRandomPokemon();
      await setPokemons(pokes)
      setTimeout(() => setLoading(false), 1000)
    };

    loadPokemon();
  }, []);
  return loading ? <Loading /> : <PokemonList pokemons={pokemonsList} />;
};
