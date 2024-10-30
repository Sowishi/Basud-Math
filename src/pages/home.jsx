import React from "react";
import { motion } from "framer-motion";
import DefaultLayout from "../layout/defaultLayout";
import bg from "../assets/Navy & Blue Futuristic Cyber Monday Poster_20241031_013003_0000.jpg";
const Home = () => {
  return (
    <DefaultLayout removeFooter={true}>
      <div
        className="h-[300vh] bg-cover bg-center flex flex-col items-center justify-start"
        style={{
          backgroundImage: `url(${bg})`, // Replace with your image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Hero Section */}
        <section className="relative text-center mb-12 z-10 text-white px-10 mt-52 bg-gray-800 py-12 rounded-lg shadow-lg">
          <motion.h1
            className="text-6xl font-extrabold mb-4 shadow-md"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Math-Master Al-Techcontrol
          </motion.h1>

          <motion.p
            className="text-lg mb-8 max-w-2xl mx-auto shadow-sm"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Master mathematics with engaging, interactive, and expertly crafted
            lessons. Dive into topics with ease and gain a deeper understanding
            of core concepts.
          </motion.p>

          <motion.div
            className="flex gap-6 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <button
              className="btn bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition-transform duration-200 hover:scale-105"
              onClick={() => (window.location.href = "/learn")}
            >
              Learn!
            </button>
            <button
              className="btn bg-gray-300 text-gray-800 px-8 py-3 rounded-lg font-semibold shadow-lg transition-transform duration-200 hover:scale-105"
              onClick={() => (window.location.href = "/about")}
            >
              About Us
            </button>
          </motion.div>
        </section>
      </div>
    </DefaultLayout>
  );
};

export default Home;
