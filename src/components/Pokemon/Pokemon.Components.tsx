import React from "react";
import { motion } from "framer-motion";

import { IPokemon } from "../../Models/Pokemon.mock";

export const Pokemon = ({name, sprites}: IPokemon) => {
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
      alt={name}
      src={sprites.other.official_artwork.front_default}
      className="w-1/2 h-auto"
    />
  );
};
