import React from "react";
import { PokemonList } from "../components/PokemonList/PokemonList.Components";
import pokemons from "../utilies/Pokemon.mock.json";

export const MainPage = () => {
  return <PokemonList pokemons={pokemons} />;
};
