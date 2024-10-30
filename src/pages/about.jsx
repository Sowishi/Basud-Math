import React from "react";
import { motion } from "framer-motion";
import DefaultLayout from "../layout/defaultLayout";

const About = () => {
  return (
    <DefaultLayout>
      <div className="min-h-screen flex flex-col items-center justify-center p-6">
        {/* About Section */}
        <section className="relative text-center mb-12 z-10 text-white bg-gray-800 p-8 rounded-lg shadow-lg">
          <motion.h1
            className="text-4xl font-extrabold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            About Math-Master Al-Techcontrol
          </motion.h1>

          <motion.p
            className="text-lg mb-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Math-Master Al-Techcontrol is dedicated to helping Grade 7 students
            at Basud National High School excel in mathematics. Our mission is
            to provide engaging and interactive lessons that simplify complex
            mathematical concepts and foster a deeper understanding of the
            subject.
          </motion.p>

          <motion.p
            className="text-lg mb-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
          >
            We focus on a comprehensive curriculum tailored specifically for
            Grade 7 math, covering essential topics such as fractions, decimals,
            ratios, proportions, and basic algebra. Our content is designed to
            support the learning needs of students in this crucial stage of
            their education.
          </motion.p>

          <motion.p
            className="text-lg mb-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            At Math-Master Al-Techcontrol, we believe in the power of technology
            to enhance learning experiences. Our interactive lessons, quizzes,
            and assessments are crafted to engage students actively and promote
            a growth mindset, ensuring they feel confident in tackling
            mathematical challenges.
          </motion.p>

          <motion.p
            className="text-lg mb-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
          >
            Located at Basud National High School, we are committed to providing
            resources and support to both students and teachers. Our platform
            aims to bridge gaps in understanding and provide a solid foundation
            in mathematics that will serve students well beyond Grade 7.
          </motion.p>

          <motion.p
            className="text-lg mb-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            Join us at Math-Master Al-Techcontrol as we work together to inspire
            and empower Grade 7 students to embrace mathematics with enthusiasm
            and confidence!
          </motion.p>

          <motion.div
            className="flex justify-center mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <button
              className="btn bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold"
              onClick={() => (window.location.href = "/learn")}
            >
              Get Started
            </button>
          </motion.div>
        </section>
      </div>
    </DefaultLayout>
  );
};

export default About;
