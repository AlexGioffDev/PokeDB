import React, { useEffect, useState } from "react";
import { PokemonList } from "../Components/PokemonList/PokemonList.Components";
//import pokemonsMock from "../utilies/Pokemon.mock.json";
import { getRandomPokemon } from "../Services/Pokemon";
import { IPokemonModel } from "../Models/Pokemon";

export const MainPage = () => {
  const [pokemonsList, setPokemons] = useState<IPokemonModel[] | []>([]);

  useEffect(() => {
    console.log("Load Pokemons List...");
    const loadPokemon = async () => {
      let pokes = await getRandomPokemon();
      setPokemons(pokes)
    };

    loadPokemon();
  }, []);
  return <PokemonList pokemons={pokemonsList} />;
};
