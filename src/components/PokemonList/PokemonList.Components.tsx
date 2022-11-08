import React from "react";
import { motion } from "framer-motion";
import { Pokemon } from "../Pokemon/Pokemon.Components";
import { IPokemon } from "../../Models/Pokemon.mock";

export const PokemonList = ({ pokemons }: { pokemons: IPokemon[] }) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.4,
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
        <Pokemon {...pokemon}  key={pokemon.id} />
      ))}
    </motion.div>
  );
};
