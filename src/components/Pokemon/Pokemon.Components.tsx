import React from "react";
import { motion } from "framer-motion";

//import { IPokemon } from "../../Models/Pokemon.mock";
import { IPokemonModel } from "../../Models/Pokemon";

export const Pokemon = (data: IPokemonModel) => {
  const item = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <motion.img
      variants={item}
      alt={data.name}
      src={data.sprites.other["official-artwork"].front_default}
      className="w-1/2 h-auto"
    />
  );
};
