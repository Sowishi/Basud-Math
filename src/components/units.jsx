import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Units = () => {
  const navigate = useNavigate();

  return (
    <div className="flex w-full">
      <motion.div
        onClick={() => {
          navigate("/unit-1");
        }}
        initial={{ y: -2000 }}
        animate={{ y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
        className="basis-4/12 mx-5 rounded-xl bg-[#C74034] flex flex-col items-center justify-center h-80"
      >
        <h1 className="text-white font-bold text-4xl">Unit 1</h1>
        <p className="text-white mt-3">Integer Properties</p>
      </motion.div>

      <motion.div
        onClick={() => {
          navigate("/unit-2");
        }}
        initial={{ y: -5000 }}
        animate={{ y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
        className="basis-4/12 mx-5 rounded-xl bg-[#12A3AB] flex flex-col items-center justify-center h-80"
      >
        <h1 className="text-white font-bold text-4xl">Unit 2</h1>
        <p className="text-white mt-3">Algebraic Properties</p>
      </motion.div>

      <motion.div
        onClick={() => {
          navigate("/unit-3");
        }}
        initial={{ y: -8000 }}
        animate={{ y: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
        className="basis-4/12 mx-5 rounded-xl bg-[#7ACC46] flex flex-col items-center justify-center h-80"
      >
        <h1 className="text-white font-bold text-4xl">Unit 3</h1>
        <p className="text-white mt-3">
          Principal Roots of Rational and Irrational Numbers
        </p>
      </motion.div>
    </div>
  );
};

export default Units;
