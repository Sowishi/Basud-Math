import Lottie from "lottie-react";
import DefaultLayout from "../layout/defaultLayout";
import { motion } from "framer-motion";
import learn from "../assets/Animation - 1730299701622.json";
const Landing = () => {
  return (
    <>
      <DefaultLayout>
        <div className="container border mx-auto flex-col h-screen flex items-center justify-center ">
          <Lottie animationData={learn} autoplay />
          <div className="flex w-full">
            <motion.div
              initial={{ y: -2000 }}
              animate={{ y: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              className="basis-4/12 mx-5 rounded-xl bg-[#C74034] flex items-center justify-center h-80"
            >
              <h1 className="text-white font-bold text-4xl">Unit 1</h1>
            </motion.div>
            <motion.div
              initial={{ y: -5000 }}
              animate={{ y: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              className="basis-4/12 mx-5 rounded-xl bg-[#12A3AB] flex items-center justify-center h-80"
            >
              <h1 className="text-white font-bold text-4xl">Unit 2</h1>
            </motion.div>
            <motion.div
              initial={{ y: -8000 }}
              animate={{ y: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              className="basis-4/12 mx-5 rounded-xl bg-[#7ACC46] flex items-center justify-center h-80"
            >
              <h1 className="text-white font-bold text-4xl">Unit 3</h1>
            </motion.div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default Landing;
