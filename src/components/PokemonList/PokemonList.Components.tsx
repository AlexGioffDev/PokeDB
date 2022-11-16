import React from "react";
import { motion } from "framer-motion";
import { Pokemon } from "../Pokemon/Pokemon.Components";
//import { IPokemon } from "../../Models/Pokemon.mock";
import { IPokemonModel } from "../../Models/Pokemon";

export const PokemonList = ({ pokemons }: { pokemons: IPokemonModel[] }) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.6,
      },
    },
  };
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="mt-[4rem] mx-auto w-[90%] h-auto overflow-auto p-11  bg-pokemon-primaryYellow rounded-2xl rounded-tl-none shadow-[5px_8px_20px_rgba(0,0,0,0.8)] flex flex-wrap justify-between items-center "
    >
      {pokemons?.map((pokemon) => (
        <Pokemon {...pokemon} key={pokemon.name} />
      ))}
    </motion.div>
  );
};
