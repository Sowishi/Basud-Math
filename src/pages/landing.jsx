import Lottie from "lottie-react";
import DefaultLayout from "../layout/defaultLayout";
import { motion } from "framer-motion";
import learn from "../assets/Animation - 1730299701622.json";
import { useNavigate } from "react-router-dom";
import Units from "../components/units";
const Landing = () => {
  const navigation = useNavigate();
  return (
    <>
      <DefaultLayout>
        <div className="container border mx-auto flex-col h-screen flex items-center justify-center ">
          <Lottie animationData={learn} autoplay />
          <Units />
        </div>
      </DefaultLayout>
    </>
  );
};

export default Landing;
